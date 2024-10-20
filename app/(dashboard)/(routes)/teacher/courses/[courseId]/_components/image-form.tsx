"use client";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
	initialData: Course;
	courseId: string;
}

const formSchema = z.object({
	imageUrl: z.string().min(1, {
		message: "La imagen es requerida",
	}),
});

const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
	const router = useRouter();

	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((currentValue) => !currentValue);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(`/api/courses/${courseId}`, values);
			toast.success("Curso actualizado correctamente");
			toggleEdit();
			router.refresh();
		} catch {
			toast.error("Error al actualizar el título del curso");
		}
	};

	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			<div className="font-medium flex items-center justify-between">
				Imagen del Curso
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing && <>Cancelar</>}
					{!isEditing && !initialData.imageUrl && (
						<>
							<PlusCircle className="w-4 h-4 mr-2" />
							Agregar imagen
						</>
					)}
					{!isEditing && initialData.imageUrl && (
						<>
							<Pencil className="w-4 h-4 mr-2" />
							Editar imagen
						</>
					)}
				</Button>
			</div>
			{!isEditing &&
				(!initialData.imageUrl ? (
					<div className="flex items-center justify-center h-[150px] w-full bg-slate-200 rounded-md">
						<ImageIcon className="w-10 h-10 text-slate-500" />
					</div>
				) : (
					<div className="relative aspect-video mt-2">
						<Image
							alt="Imagen del curso"
							fill
							src={initialData.imageUrl}
							className="object-cover rounded-md"
						/>
					</div>
				))}
			{isEditing && (
				<div>
					<FileUpload
						endpoint="courseImage"
						onChange={(url) => {
							if (url) {
								onSubmit({ imageUrl: url });
							}
						}}
					/>
					<div className="text-xs text-muted-foreground mt-4">
						*Tamaño recomendado 1280 x 720px
					</div>
				</div>
			)}
		</div>
	);
};

export default ImageForm;
