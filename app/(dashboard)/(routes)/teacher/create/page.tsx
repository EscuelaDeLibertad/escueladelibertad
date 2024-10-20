"use client";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import toast from "react-hot-toast";

const formSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required",
	}),
});

const CreatePage = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
		},
	});

	const { isSubmitting, isValid } = form.formState;

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const response = await axios.post("/api/courses", values);
			router.push(`/teacher/courses/${response.data.id}`); //Aqui regresara el ID del curso que solicitamos en la api de cursos (route.ts), response.data esta por que usamos axios. Nos redirige al link del curso con su respectiva ID
			toast.success("Curso creado correctamente");
		} catch {
			toast.error("Error al crear el curso");
		}
	};

	return (
		<div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
			<div>
				<h1 className="text-2xl">Nombre de curso</h1>
				<p className="text-sm text-slate-600">
					Como llamarás a tu curso, no te preocupes, podrás cambiarlo luego.
				</p>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 mt-8"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Título del Curso</FormLabel>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="Ej. Desarrollo Web"
											{...field}
										/>
									</FormControl>
									<FormDescription>Que enseñarás en tu curso?</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex items-center gap-x-2">
							<Link href="/teacher/courses">
								<Button type="button" variant="ghost">
									Cancelar
								</Button>
							</Link>
							<Button type="submit" disabled={!isValid || isSubmitting}>
								Continuar
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
};

export default CreatePage;
