import { InteractiveMenu } from "@/components/interactive-menu/interactive-menu";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="h-full">
			<div className="h-[80px] md:pl-64 fixed inset-y-0 w-full z-50">
				<Navbar />
			</div>
			<div className="md:flex hidden h-full w-64 flex-col fixed inset-y-0 z-50">
				<Sidebar />
			</div>
			<main className="md:pl-64 pt-[80px] h-full bg-slate-900">
				{children}
				<div>
					<InteractiveMenu />
				</div>
			</main>
		</div>
	);
};

export default DashboardLayout;
