import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string; attachmentId: string } }
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

		const attachment = await db.attachment.delete({
			where: {
				courseId: params.courseId,
				id: params.attachmentId,
			},
		});

		return NextResponse.json(attachment);
	} catch (error) {
		console.log("[ATTACHMENT_ID_DELETE]", error);
		return new NextResponse("Error Interno del Servidor", { status: 500 });
	}
}
