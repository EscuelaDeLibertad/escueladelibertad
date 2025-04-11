import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string; chapterId: string; attachmentId: string } }
) {
	try {
		const { userId } = auth();

		if (!userId || !isTeacher(userId)) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const courseOwner = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId,
			},
		});

		if (!courseOwner) {
			return new NextResponse("No autorizado", { status: 401 });
		}

        const chapter = await db.chapter.findUnique({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            }
        })

        if (!chapter) {
            return new NextResponse("Capítulo no encontrado", { status: 404 });
        }

		const attachment = await db.attachment.delete({
			where: {
				id: params.attachmentId,
                chapterId: params.chapterId,
			},
		});

		return NextResponse.json(attachment);
	} catch (error) {
		console.log("[ATTACHMENT_ID_DELETE]", error);
		return new NextResponse("Error Interno del Servidor", { status: 500 });
	}
}
