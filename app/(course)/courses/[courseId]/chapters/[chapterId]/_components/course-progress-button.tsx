"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "./Modal"; // Importar el modal correctamente

interface CourseProgressButtonProps {
	chapterId: string;
	courseId: string;
	isComplete?: boolean;
	nextChapterId?: string;
}

const CourseProgressButton = ({
	chapterId,
	courseId,
	isComplete,
	nextChapterId,
}: CourseProgressButtonProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onClick = async () => {
		try {
			setIsLoading(true);

			await axios.put(
				`/api/courses/${courseId}/chapters/${chapterId}/progress`,
				{
					isComplete: !isComplete,
				}
			);

			if (!isComplete && !nextChapterId) {
				setIsModalOpen(true);
			}

			if (!isComplete && nextChapterId) {
				router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
			}

			toast.success("Progreso actualizado");
			router.refresh();
		} catch {
			toast.error("Algo salió mal");
		} finally {
			setIsLoading(false);
		}
	};

	const Icon = isComplete ? XCircle : CheckCircle;

	return (
		<>
			<Button
				onClick={onClick}
				disabled={isLoading}
				type="button"
				variant={isComplete ? "outline" : "success"}
				className="w-full md:w-auto"
			>
				{isComplete ? "No completado" : "Marcar como Completado"}
				<Icon className="w-4 h-4 ml-2" />
			</Button>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<p>¡Felicidades! ¡Has completado el curso!</p>
			</Modal>
		</>
	);
};

export default CourseProgressButton;
