import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(
	req: Request,
	{ params }: { params: { courseId: string; chapterId: string } }
) {
	try {
		const { userId } = auth();
		const { isComplete } = await req.json();

		if (!userId) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const userProgress = await db.userProgress.upsert({
			where: {
				userId_chapterId: {
					userId,
					chapterId: params.chapterId,
				},
			},
			update: {
				isComplete,
			},
			create: {
				userId,
				chapterId: params.chapterId,
				isComplete,
			},
		});

		return NextResponse.json(userProgress);
	} catch (error) {
		console.log("[CHAPTER_PROGRESS]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
