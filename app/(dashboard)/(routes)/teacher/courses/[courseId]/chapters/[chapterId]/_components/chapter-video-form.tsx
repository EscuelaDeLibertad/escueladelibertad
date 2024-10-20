"use client";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, VideoIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";
import MuxPlayer from "@mux/mux-player-react";

interface ChapterVideoFormProps {
	initialData: Chapter & { muxData?: MuxData | null };
	courseId: string;
	chapterId: string;
}

const formSchema = z.object({
	videoUrl: z.string().min(1),
});

const ChapterVideoForm = ({
	initialData,
	courseId,
	chapterId,
}: ChapterVideoFormProps) => {
	const router = useRouter();

	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((currentValue) => !currentValue);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(
				`/api/courses/${courseId}/chapters/${chapterId}`,
				values
			);
			toast.success("Capítulo actualizado correctamente");
			toggleEdit();
			router.refresh();
		} catch {
			toast.error("Error al actualizar el curso");
		}
	};

	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			<div className="font-medium flex items-center justify-between">
				Video del Capítulo
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing && <>Cancelar</>}
					{!isEditing && !initialData.videoUrl && (
						<>
							<PlusCircle className="w-4 h-4 mr-2" />
							Agregar video
						</>
					)}
					{!isEditing && initialData.videoUrl && (
						<>
							<Pencil className="w-4 h-4 mr-2" />
							Editar video
						</>
					)}
				</Button>
			</div>
			{!isEditing &&
				(!initialData.videoUrl ? (
					<div className="flex items-center justify-center h-[150px] w-full bg-slate-200 rounded-md">
						<VideoIcon className="w-10 h-10 text-slate-500" />
					</div>
				) : (
					<div className="relative aspect-video mt-2">
						<MuxPlayer
							accentColor="#0369a1"
							playbackId={initialData.muxData?.playbackId!}
						/>
					</div>
				))}
			{isEditing && (
				<div>
					<FileUpload
						endpoint="chapterVideo"
						onChange={(url) => {
							if (url) {
								onSubmit({ videoUrl: url });
							}
						}}
					/>
					<div className="text-xs text-muted-foreground mt-4">
						*Sube el video del capítulo
					</div>
				</div>
			)}
			{initialData.videoUrl && !isEditing && (
				<div className="text-sm text-muted-foreground mt-2">
					Los videos pueden tomar unos minutos en procesarse. Refresca la página
					si el video no aparece.
				</div>
			)}
		</div>
	);
};

export default ChapterVideoForm;
