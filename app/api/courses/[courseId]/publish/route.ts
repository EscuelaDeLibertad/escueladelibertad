import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();

		if (!userId) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const course = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId: userId,
			},
			include: {
				chapters: {
					include: {
						muxData: true,
					},
				},
			},
		});

		if (!course) {
			return new NextResponse("No encontrado", { status: 404 });
		}

		const hasPublishedChapters = course.chapters.some(
			(chapter) => chapter.isPublished
		);

		if (
			!course.title ||
			!course.description ||
			!course.imageUrl ||
			!course.categoryId ||
			!hasPublishedChapters
		) {
			return new NextResponse("Faltan campos requeridos", { status: 401 });
		}

		const publishedCourse = await db.course.update({
			where: {
				id: params.courseId,
				userId: userId,
			},
			data: {
				isPublished: true,
			},
		});

		return NextResponse.json(publishedCourse);
	} catch (error) {
		console.log("[COURSE_ID_PUBLISH]", error);
		return new NextResponse("Error interno del servidor", { status: 500 });
	}
}
