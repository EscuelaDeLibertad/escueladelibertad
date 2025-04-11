"use client";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { File, Loader2, PlusCircle, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Attachment, Chapter } from "@prisma/client";
import { FileUpload } from "@/components/file-upload";

interface AttachmentFormProps {
  initialData: Chapter & { attachments: Attachment[] }; //Agregamos el array de attachments desde prisma -> Base de Datos
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  url: z.string().min(1),
  name: z.string().min(1),
});

const AttachmentForm = ({
  initialData,
  courseId,
  chapterId,
}: AttachmentFormProps) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((currentValue) => !currentValue);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(
        "Submitting to:",
        `/api/courses/${courseId}/chapters/${chapterId}/attachments`
      );
      console.log("Values:", values);
      await axios.post(
        `/api/courses/${courseId}/chapters/${chapterId}/attachments`,
        values
      );
      toast.success("Capítulo actualizado correctamente");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Error al actualizar el capítulo");
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(
        `/api/courses/${courseId}/chapters/${chapterId}/attachments/${id}`
      );
      toast.success("Archivo eliminado correctamente");
      router.refresh();
    } catch {
      toast.error("Error al eliminar el archivo");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Recursos y Adjuntos del Capítulo
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancelar</>}
          {!isEditing && (
            <>
              <PlusCircle className="w-4 h-4 mr-2" />
              Agregar archivos
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className="text-sm text-slate-500 mt-2 italic">
              No hay archivos adjuntos para este capítulo
            </p>
          )}
          {initialData.attachments.length > 0 && (
            <div className="space-y-2">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
                >
                  <File className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-sm line-clamp-1">{attachment.name}</p>
                  {deletingId === attachment.id && (
                    <div>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <button
                      className="ml-auto hover:opacity-75 transition"
                      onClick={() => onDelete(attachment.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="chapterAttachment"
            onChange={(url, name) => {
              if (url) {
                onSubmit({ url: url, name: name });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Agrega archivos para tus estudiantes como: videos, pdfs, imágenes,
            etc.{" "}
            <b>
              El peso máximo por archivo es de Imágenes(32MB), Videos y
              Audio(1GB) y PDFs(128MB)
            </b>
            .
          </div>
        </div>
      )}
    </div>
  );
};

export default AttachmentForm;
