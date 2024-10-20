"use client";
import { Category } from "@prisma/client";
import {
	FcEngineering,
	FcFilmReel,
	FcMultipleDevices,
	FcMusic,
	FcBullish,
	FcOldTimeCamera,
	FcSalesPerformance,
	FcSportsMode,
	FcGlobe,
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import CategoryItem from "./category-item";

interface CategoriesProps {
	items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
	Contabilidad: FcBullish,
	"Desarrollo Web": FcMultipleDevices,
	Fotografía: FcOldTimeCamera,
	Idiomas: FcGlobe,
	Ingeniería: FcEngineering,
	"Marketing Digital": FcSalesPerformance,
	Música: FcMusic,
	Programación: FcFilmReel,
};

const Categories = ({ items }: CategoriesProps) => {
	return (
		<div className="flex items-center gap-x-2 overflow-x-auto pb-2">
			{items.map((item) => (
				<CategoryItem
					key={item.id}
					label={item.name}
					icon={iconMap[item.name]}
					value={item.id}
				/>
			))}
		</div>
	);
};

export default Categories;
