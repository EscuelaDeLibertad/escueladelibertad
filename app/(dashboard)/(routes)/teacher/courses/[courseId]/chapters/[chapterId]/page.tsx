import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import ChapterTitleForm from "./_components/chapter-title-form";
import ChapterDescriptionForm from "./_components/chapter-description-form";
import ChapterAccessForm from "./_components/chapter-access-form";
import ChapterVideoForm from "./_components/chapter-video-form";
import Banner from "@/components/banner";
import ChapterActions from "./_components/chapter-actions";

const ChapterIdPage = async ({
	params,
}: {
	params: { courseId: string; chapterId: string };
}) => {
	const { userId } = auth();

	if (!userId) {
		redirect("/");
	}

	const chapter = await db.chapter.findUnique({
		where: {
			id: params.chapterId,
			courseId: params.courseId,
		},
		include: {
			muxData: true,
		},
	});

	if (!chapter) {
		return redirect("/");
	}

	const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;

	const completionText = `(${completedFields}/${totalFields})`;

	//Acciones para publicar el capitulo
	const isComplete = requiredFields.every(Boolean);

	return (
		<>
			{!chapter.isPublished && (
				<Banner
					variant="warning"
					label="Este capítulo se encuentra en modo borrador. No será visible en el curso"
				/>
			)}
			<div className="p-6">
				<div className="flex items-center justify-between">
					<div className="w-full">
						<Link
							href={`/teacher/courses/${params.courseId}`}
							className="flex items-center text-sm hover:opacity-75 transition mb-6 font-medium"
						>
							<ArrowLeft className="mr-2 h-5 w-5" />
							Volver a la configuración del curso
						</Link>
						<div className="flex items-center justify-between w-full">
							<div className="flex flex-col gap-y-2">
								<h1 className="text-2xl font-medium">
									Configuración del Capítulo
								</h1>
								<span className="text-sm text-slate-700">
									Completa todos los campos requeridos {completionText}
								</span>
							</div>
							<ChapterActions
								disabled={!isComplete}
								courseId={params.courseId}
								chapterId={params.chapterId}
								isPublished={chapter.isPublished}
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
					<div className="space-y-4">
						<div>
							<div className="flex items-center gap-x-2">
								<IconBadge icon={LayoutDashboard} />
								<h2>Configura tu capítulo</h2>
							</div>
							{/* Titulo del Form del Capitulo */}
							<ChapterTitleForm
								initialData={chapter}
								courseId={params.courseId}
								chapterId={params.chapterId}
							/>
							<ChapterDescriptionForm
								initialData={chapter}
								courseId={params.courseId}
								chapterId={params.chapterId}
							/>
						</div>
						<div>
							<div className="flex items-center gap-x-2">
								<IconBadge icon={Eye} />
								<h2 className="text-xl">Configuraciones de Acceso</h2>
							</div>
							<ChapterAccessForm
								initialData={chapter}
								courseId={params.courseId}
								chapterId={params.chapterId}
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center gap-x-2">
							<IconBadge icon={Video} />
							<h2 className="text-xl">Agrega un video</h2>
						</div>
						<ChapterVideoForm
							initialData={chapter}
							courseId={params.courseId}
							chapterId={params.chapterId}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChapterIdPage;
