"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeftFromLine, LogOut } from "lucide-react";
import Link from "next/link";
import SearchInput from "./search-input";
import { isTeacher } from "@/lib/teacher";

const NavbarRoutes = () => {
	const { userId } = useAuth();
	const pathname = usePathname();

	const isTeacherPage = pathname?.startsWith("/teacher");
	const isCoursePage = pathname?.includes("/courses");
	const isSearchPage = pathname === "/search";

	return (
		<>
			{isSearchPage && (
				<div className="hidden md:block mr-6">
					<SearchInput />
				</div>
			)}
			<div
				className={`w-full flex gap-x-2 ${
					!isTeacher(userId) ? "justify-end" : "justify-between"
				}`}
			>
				{isTeacherPage || isCoursePage ? (
					<Link href="/">
						<Button size="sm" variant="ghost">
							<ArrowLeftFromLine className="w-4 h-4 mr-2" />
							Regresar
						</Button>
					</Link>
				) : isTeacher(userId) ? (
					<Link href="/teacher/courses">
						<Button size="sm" variant="secondary">
							Zona de Administrador
						</Button>
					</Link>
				) : null}
				<UserButton showName />
			</div>
		</>
	);
};

export default NavbarRoutes;
