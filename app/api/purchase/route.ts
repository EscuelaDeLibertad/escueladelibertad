import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
	try {
		const { userId, courseIds } = await request.json();

		if (!userId || !courseIds || !Array.isArray(courseIds)) {
			return NextResponse.json(
				{ error: "Falta userId o courseIds inválido" },
				{ status: 400 }
			);
		}

		const purchases = await db.purchase.findMany({
			where: {
				userId: userId,
				courseId: {
					in: courseIds,
				},
			},
			select: {
				courseId: true,
			},
		});

		const purchasedCourses = purchases.map((purchase) => purchase.courseId);
		const result = courseIds.reduce((acc, courseId) => {
			acc[courseId] = purchasedCourses.includes(courseId);
			return acc;
		}, {});

		return NextResponse.json(result);
	} catch (error) {
		console.error("[VERIFICAR_COMPRAS]", error);
		return NextResponse.json(
			{ error: "Error al verificar las compras" },
			{ status: 500 }
		);
	}
}
