import { db } from "@/lib/db";

interface GetPurchaseProps {
	userId: string;
	courseId: string;
}

export const getPurchase = async ({
	userId,
	courseId,
}: GetPurchaseProps): Promise<boolean> => {
	try {
		const purchase = await db.purchase.findUnique({
			where: {
				userId_courseId: {
					userId,
					courseId,
				},
			},
		});

		return !!purchase;
	} catch (error) {
		console.error("[VERIFICAR_COMPRA]", error);
		return false;
	}
};
