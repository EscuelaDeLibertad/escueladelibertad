import Mux from "@mux/mux-node";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const mux = new Mux({
	tokenId: process.env.MUX_TOKEN_ID,
	tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string; chapterId: string } }
) {
	try {
		const { userId } = auth();

		if (!userId) {
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

		const chapter = await db.chapter.findUnique({
			where: {
				id: params.chapterId,
				courseId: params.courseId,
			},
		});

		if (!chapter) {
			return new NextResponse("Capitulo no encontrado", { status: 404 });
		}

		if (chapter.videoUrl) {
			const existingMuxData = await db.muxData.findFirst({
				where: {
					chapterId: params.chapterId,
				},
			});

			if (existingMuxData) {
				await mux.video.assets.delete(existingMuxData.assetId);
				await db.muxData.delete({
					where: {
						id: existingMuxData.id,
					},
				});
			}
		}

		//Vamos a mirar si hay al menos un capitulo activo para que el curso pueda ser publicado, si borramos este capitulo, hay algun capitulo activo adicional? Si no hay entonces el curso entero se despublicara.

		const deletedChapter = await db.chapter.delete({
			where: {
				id: params.chapterId,
			},
		});

		const publishedChaptersInCourse = await db.chapter.findMany({
			where: {
				courseId: params.courseId,
				isPublished: true,
			},
		});

		if (!publishedChaptersInCourse.length) {
			await db.course.update({
				where: {
					id: params.courseId,
				},
				data: {
					isPublished: false,
				},
			});
		}

		return NextResponse.json(deletedChapter);
	} catch (error) {
		console.log("[COURSE_CHAPTER_ID_DELETE]", error);
		return new NextResponse("Error Interno del Servidor", { status: 500 });
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string; chapterId: string } }
) {
	try {
		const { userId } = auth();
		const { isPublished, ...values } = await req.json();

		if (!userId) {
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

		const chapter = await db.chapter.update({
			where: {
				id: params.chapterId,
				courseId: params.courseId,
			},
			data: {
				...values,
			},
		});

		//Si el ususario ha subido un video, entonces se elimina el video existente y se sube el nuevo
		if (values.videoUrl) {
			const existingMuxData = await db.muxData.findFirst({
				where: {
					chapterId: params.chapterId,
				},
			});

			if (existingMuxData) {
				await mux.video.assets.delete(existingMuxData.assetId);
				await db.muxData.delete({
					where: {
						id: existingMuxData.id,
					},
				});
			}

			//Si el ususario no ha subido un video, entonces se sube
			const asset = await mux.video.assets.create({
				input: values.videoUrl,
				playback_policy: ["public"],
				test: false,
			});

			await db.muxData.create({
				data: {
					chapterId: params.chapterId,
					assetId: asset.id,
					playbackId: asset.playback_ids?.[0]?.id,
				},
			});
		}

		return NextResponse.json(chapter);
	} catch (error) {
		console.log("[COURSE_CHAPTER_ID]", error);
		return new NextResponse("Error Interno del Servidor", { status: 500 });
	}
}
