"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface TitleFormProps {
	initialData: {
		title: string;
	};
	courseId: string;
}

const formSchema = z.object({
	title: z.string().min(1, {
		message: "El titulo es requerido",
	}),
});

const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
	const router = useRouter();

	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((currentValue) => !currentValue);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData,
	});

	const { isSubmitting, isValid } = form.formState;

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
				Título del Curso
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancelar</>
					) : (
						<>
							<Pencil className="w-4 h-4 mr-2" />
							Editar título
						</>
					)}
				</Button>
			</div>
			{!isEditing ? (
				<p className="text-sm mt-2">{initialData.title}</p>
			) : (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 mt-4"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="Ej. 'Curso de React'"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Button type="submit" disabled={!isValid || isSubmitting}>
								Guardar
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	);
};

export default TitleForm;
