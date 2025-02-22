import { Mux } from "@mux/mux-node";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { isTeacher } from "@/lib/teacher";

const mux = new Mux({
	tokenId: process.env.MUX_TOKEN_ID,
	tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();

		if (!userId || !isTeacher(userId)) {
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

		for (const chapter of course.chapters) {
			if (chapter.muxData?.assetId) {
				await mux.video.assets.delete(chapter.muxData.assetId); // elimina el video de mux, solo se borra los videos de la plataforma de MUX por que la info de la BD esta en modo cascada.
			}
		}

		const deletedCourse = await db.course.delete({
			where: {
				id: params.courseId,
			},
		});

		return NextResponse.json(deletedCourse);
	} catch (error) {
		console.log("[COURSE_ID_DELETE]", error);
		return new NextResponse("Error Interno del Servidor", { status: 500 });
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } } // params debe ir siempre despues de request, incluso si no usas el request
) {
	try {
		const { userId } = auth();
		const { courseId } = params;
		const values = await req.json();

		if (!userId || !isTeacher(userId)) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const course = await db.course.update({
			where: {
				id: courseId,
				userId,
			},
			data: {
				...values,
			},
		});

		return NextResponse.json(course);
	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Error Interno", { status: 500 });
	}
}
