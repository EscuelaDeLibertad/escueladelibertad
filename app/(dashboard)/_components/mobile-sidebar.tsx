import { Menu } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger className="pr-4 hover:opacity-75 transition">
				<Menu />
			</SheetTrigger>
			<SheetContent side="left" className="p-0 bg-white w-64">
				<SheetClose asChild>
					<Sidebar />
				</SheetClose>
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
