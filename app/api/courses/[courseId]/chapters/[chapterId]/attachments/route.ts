import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { url, name } = body;

    if (!userId || !isTeacher(userId)) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    // Verify the chapter exists and belongs to the course
    const chapter = await db.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
    });

    if (!chapter) {
      return new NextResponse("Capítulo no encontrado", { status: 404 });
    }

    const attachment = await db.attachment.create({
      data: {
        url,
        name: name,
        chapterId: params.chapterId,
      },
    });

    return NextResponse.json(attachment);
  } catch (error) {
    console.log("[CHAPTER_ID_ATTACHMENTS]", error);
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
}
