const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
	try {
		await database.category.createMany({
			data: [
				{ name: "Desarrollo Web" },
				{ name: "Programación" },
				{ name: "Marketing Digital" },
				{ name: "Música" },
				{ name: "Fotografía" },
				{ name: "Contabilidad" },
				{ name: "Ingeniería" },
				{ name: "Idiomas" },
			],
		});
		console.log("Éxito al ejecutar la semilla en la base de datos");
	} catch (error) {
		console.log("Error al ejecutar la semilla en la base de datos", error);
	} finally {
		await database.$disconnect();
	}
}

main();
