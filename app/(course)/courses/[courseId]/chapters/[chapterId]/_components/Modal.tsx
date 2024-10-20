import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-slate-800 bg-opacity-50 z-50">
			<div className="bg-white p-4 rounded">
				<p className="text-center text-md">{children}</p>
				<Button onClick={onClose} className="mt-4">
					Cerrar
				</Button>
			</div>
		</div>
	);
};

export default Modal;
