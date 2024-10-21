import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
	return (
		<div className="p-4 border-b h-full flex items-center bg-white shadow-sm md:ml-64">
			<div className="md:hidden">
				<MobileSidebar />
			</div>
			<NavbarRoutes />
		</div>
	);
};

export default Navbar;
