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
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Loader2, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Chapter, Course } from "@prisma/client";
import { title } from "process";
import { Input } from "@/components/ui/input";
import ChaptersList from "./chapters-list";
import { list } from "postcss";

interface ChaptersFormProps {
	initialData: Course & { chapters: Chapter[] };
	courseId: string;
}

const formSchema = z.object({
	title: z.string().min(1),
});

const ChaptersForm = ({ initialData, courseId }: ChaptersFormProps) => {
	const router = useRouter();

	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	const toggleCreating = () => {
		setIsCreating((currentValue) => !currentValue);
	};

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.post(`/api/courses/${courseId}/chapters`, values);
			toast.success("Capítulo creado correctamente");
			toggleCreating();
			router.refresh();
		} catch {
			toast.error("Error al actualizar el título del curso");
		}
	};

	const onReorder = async (updatedData: { id: string; position: number }[]) => {
		try {
			setIsUpdating(true);

			await axios.put(`/api/courses/${courseId}/chapters/reorder`, {
				list: updatedData,
			});
			toast.success("Capítulos actualizados correctamente");
			router.refresh();
		} catch {
			toast.error("Error al actualizar el orden de los capítulos");
		} finally {
			setIsUpdating(false);
		}
	};

	const onEdit = (id: string) => {
		router.push(`/teacher/courses/${courseId}/chapters/${id}`);
	};

	return (
		<div className="relative mt-6 border bg-slate-100 rounded-md p-4">
			{isUpdating && (
				<div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-md flex items-center justify-center">
					<Loader2 className="animate-spin h-6 w-6 text-sky-700" />
				</div>
			)}
			<div className="font-medium flex items-center justify-between">
				Capítulos del Curso
				<Button onClick={toggleCreating} variant="ghost">
					{isCreating ? (
						<>Cancelar</>
					) : (
						<>
							<PlusCircle className="w-4 h-4 mr-2" />
							Agregar un capítulo
						</>
					)}
				</Button>
			</div>
			{isCreating && (
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
											placeholder="Ej. 'Introducción al curso'"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" disabled={!isValid || isSubmitting}>
							Crear
						</Button>
					</form>
				</Form>
			)}
			{!isCreating && (
				<div
					className={cn(
						"text-s, mt-2",
						!initialData.chapters.length && "text-slate-500 italic"
					)}
				>
					{!initialData.chapters.length && "Sin capítulos"}
					<ChaptersList
						onEdit={onEdit}
						onReorder={onReorder}
						items={initialData.chapters || []}
					/>
				</div>
			)}
			{!isCreating && (
				<p className="text-sm text-muted-foreground mt-4">
					Arrastra y suelta los capítulos para organizarlos
				</p>
			)}
		</div>
	);
};

export default ChaptersForm;
