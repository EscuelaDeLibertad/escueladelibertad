"use client";

import ConfirmModal from "@/components/models/confirm-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
	disabled: boolean;
	courseId: string;
	isPublished: boolean;
}

const Actions = ({ disabled, courseId, isPublished }: ActionsProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onDelete = async () => {
		try {
			setIsLoading(true);
			await axios.delete(`/api/courses/${courseId}`);
			toast.success("Curso eliminado");
			router.refresh();
			router.push(`/teacher/courses`);
		} catch {
			toast.error("Algo salió mal");
		} finally {
			setIsLoading(false);
		}
	};

	const onClick = async () => {
		try {
			setIsLoading(true);

			if (isPublished) {
				await axios.patch(`/api/courses/${courseId}/unpublish`);
				toast.success("Curso no publicado");
			} else {
				await axios.patch(`/api/courses/${courseId}/publish`);
				toast.success("Curso publicado");
			}
			router.refresh();
		} catch {
			toast.error("Algo salió mal");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex items-center gap-x-2">
			<Button
				onClick={onClick}
				disabled={disabled || isLoading}
				variant="outline"
				size="sm"
			>
				{isPublished ? "Quitar" : "Publicar"}
			</Button>
			<ConfirmModal onConfirm={onDelete}>
				<Button size="sm" disabled={isLoading}>
					<Trash className="h-4 w-4" />
				</Button>
			</ConfirmModal>
		</div>
	);
};

export default Actions;
