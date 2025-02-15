import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const user = await currentUser();

		if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
			return new NextResponse("No autorizado", { status: 401 });
		}

		const course = await db.course.findUnique({
			where: {
				id: params.courseId,
				isPublished: true,
			},
		});

		const purchase = await db.purchase.findUnique({
			where: {
				userId_courseId: {
					userId: user.id,
					courseId: params.courseId,
				},
			},
		});

		if (purchase) {
			return new NextResponse("El curso ya fue comprado", { status: 400 });
		}

		if (!course) {
			return new NextResponse("No encontrado", { status: 404 });
		}

		const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
			{
				quantity: 1,
				price_data: {
					currency: "USD",
					product_data: {
						name: course.title,
						description: course.description!,
					},
					unit_amount: Math.round(course.price! * 100),
				},
			},
		];

		let stripeCostumer = await db.stripeCustomer.findUnique({
			where: {
				userId: user.id,
			},
			select: {
				stripeCustomerId: true,
			},
		});

		if (!stripeCostumer) {
			const customer = await stripe.customers.create({
				email: user.emailAddresses[0].emailAddress,
			});

			stripeCostumer = await db.stripeCustomer.create({
				data: {
					userId: user.id,
					stripeCustomerId: customer.id,
				},
			});
		}

		const customerExists = await stripe.customers.retrieve(stripeCostumer.stripeCustomerId);
	  
		  if (!customerExists) {
			return new NextResponse("Cliente no encontrado en Stripe", { status: 400 });
		  }

		const session = await stripe.checkout.sessions.create({
			customer: stripeCostumer.stripeCustomerId,
			line_items,
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?success=1`,
			cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${course.id}?canceled=1`,
			metadata: {
				courseId: course.id,
				userId: user.id,
			},
		});

		return NextResponse.json({ url: session.url });
	} catch (error) {
		console.log("[COURSE_ID_CHECKOUT]", error);
		return new NextResponse("Error Interno del Servidor", { status: 500 });
	}
}
