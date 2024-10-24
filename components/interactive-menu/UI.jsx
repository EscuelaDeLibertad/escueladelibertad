"use client";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useEmissive } from "./EmissiveContext";

export const UI = ({ currentScreen, onChangeScreen, isAnimating }) => {
	const router = useRouter();
	const isla1Button = useRef();
	const isla2Button = useRef();
	const isla3Button = useRef();
	const isla4Button = useRef();
	const [activeButton, setActiveButton] = useState(); // Estado para controlar el botón activo
	const [timelines, setTimelines] = useState({}); // Estado para almacenar timelines

	const { setEmissiveIntensity, setActiveIsland } = useEmissive();

	const handleButtonClick = (buttonKey) => {
		onClickButton(buttonKey);
		// Cambia la intensidad emisiva y la isla activa según el botón
		switch (buttonKey) {
			case "isla1":
				setEmissiveIntensity(1.5);
				setActiveIsland("isla1");
				break;
			case "isla2":
				setEmissiveIntensity(1.5);
				setActiveIsland("isla2");
				break;
			case "isla3":
				setEmissiveIntensity(1.5);
				setActiveIsland("isla3");
				break;
			case "isla4":
				setEmissiveIntensity(1.5);
				setActiveIsland("isla4");
				break;
			default:
				setEmissiveIntensity(0.5);
				setActiveIsland(null);
		}
	};

	useEffect(() => {
		// Inicializa los timelines para cada botón
		setTimelines({
			isla1: gsap.timeline({ paused: true }).fromTo(
				isla1Button.current,
				{
					opacity: 0, // Estado inicial
					y: 0, // Estado inicial
				},
				{
					opacity: 1,
					y: 44,
					duration: 0.5,
					ease: "power2.inOut",
					zIndex: 0,
				}
			),
			isla2: gsap.timeline({ paused: true }).fromTo(
				isla2Button.current,
				{
					opacity: 0, // Estado inicial
					y: 0, // Estado inicial
				},
				{
					opacity: 1,
					y: 44,
					duration: 0.5,
					ease: "power2.inOut",
					zIndex: 0,
				}
			),
			isla3: gsap.timeline({ paused: true }).fromTo(
				isla3Button.current,
				{
					opacity: 0, // Estado inicial
					y: 0, // Estado inicial
				},
				{
					opacity: 1,
					y: 44,
					duration: 0.5,
					ease: "power2.inOut",
					zIndex: 0,
				}
			),
			isla4: gsap.timeline({ paused: true }).fromTo(
				isla4Button.current,
				{
					opacity: 0, // Estado inicial
					y: 0, // Estado inicial
				},
				{
					opacity: 1,
					y: 44,
					duration: 0.5,
					ease: "power2.inOut",
					zIndex: 0,
				}
			),
		});
	}, []);

	const onClickButton = (buttonKey) => {
		if (activeButton && activeButton !== buttonKey) {
			timelines[activeButton].reverse();
		}
		setActiveButton(buttonKey);
		timelines[buttonKey].reversed()
			? timelines[buttonKey].play()
			: timelines[buttonKey].reverse();
	};

	return (
		<>
			<main
				className={`${
					currentScreen === "Isla1" ||
					currentScreen === "Isla2" ||
					currentScreen === "Isla3" ||
					currentScreen === "Isla4"
						? "relative inset-0 z-1"
						: "relative inset-0 z-10"
				}`}
			>
				<section
					className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 
				${
					(currentScreen === "Home" ||
						currentScreen === "InicioIsla1" ||
						currentScreen === "InicioIsla2" ||
						currentScreen === "InicioIsla3" ||
						currentScreen === "InicioIsla4") &&
					!isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
				>
					<div className="mt-60 flex flex-col gap-4 items-center justify-center mb-4">
						<div className="flex gap-6 mb-10">
							<div className="relative flex flex-col items-center justify-center">
								<button
									onClick={() => handleButtonClick("isla1")}
									className="bg-gray-400 text-sm bg-opacity-50 p-3 rounded-full text-white font-medium"
								>
									El Río de la Vida
								</button>
								<button
									onClick={() => onChangeScreen("Isla1")}
									className="absolute top-0 left-[50%] translate-x-[-50%] text-sm bg-sky-800 bg-opacity-50 py-3 px-6 rounded-b-md text-white opacity-0 font-medium -z-10"
									ref={isla1Button}
								>
									Ir
								</button>
							</div>
							<div className="relative flex flex-col items-center justify-center">
								<button
									onClick={() => handleButtonClick("isla2")}
									className="bg-gray-400 text-sm bg-opacity-50 p-3 rounded-full text-white font-medium"
								>
									Sabiduría Zen
								</button>
								<button
									onClick={() => onChangeScreen("Isla2")}
									className="absolute top-0 left-[50%] translate-x-[-50%] text-sm bg-sky-800 bg-opacity-50 py-3 px-6 rounded-b-md text-white opacity-0 font-medium -z-10"
									ref={isla2Button}
								>
									Ir
								</button>
							</div>
							<div className="relative flex flex-col items-center justify-center">
								<button
									onClick={() => handleButtonClick("isla3")}
									className="bg-gray-400 text-sm bg-opacity-50 p-3 rounded-full text-white font-medium"
								>
									Tao de la Meditación I
								</button>
								<button
									onClick={() => onChangeScreen("Isla3")}
									className="absolute top-0 left-[50%] translate-x-[-50%] text-sm bg-sky-800 bg-opacity-50 py-3 px-6 rounded-b-md text-white opacity-0 font-medium -z-10"
									ref={isla3Button}
								>
									Ir
								</button>
							</div>
							<div className="relative flex flex-col items-center justify-center">
								<button
									onClick={() => handleButtonClick("isla4")}
									className="bg-gray-400 text-sm bg-opacity-50 p-3 rounded-full text-white font-medium"
								>
									Alkimia Interna
								</button>
								<button
									onClick={() => onChangeScreen("Isla4")}
									className="absolute top-0 left-[50%] translate-x-[-50%] text-sm bg-sky-800 bg-opacity-50 py-3 px-6 rounded-b-md text-white opacity-0 font-medium -z-10"
									ref={isla4Button}
								>
									Ir
								</button>
							</div>
						</div>
						<h1 className="text-4xl text-white opacity-90">
							Bienvenidos a Escuela de Libertad
						</h1>
						<p className="text-white text-sm font-thin">
							lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos.
						</p>
					</div>
				</section>
			</main>
			<section
				className={`fixed 2xl:top-0 2xl:right-[300px] top-[-100px] right-[200px] translate-x-[50%] translate-y-[50%] flex flex-col p-10 transition-opacity duration-1000 z-10 2xl:w-[600px] w-[400px] ${
					currentScreen === "Isla1" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="bg-[#D9D9D999] rounded-lg p-6">
					<h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						El Río de la Vida
					</h2>
					<p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<div className="flex gap-2 2xl:flex-row flex-col">
						<button
							onClick={() => onChangeScreen("InicioIsla1")}
							className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Regresar al menú
						</button>
						<button
							onClick={() =>
								router.push("/courses/881228e9-889b-4633-bdcb-95980ad46fc3")
							}
							className="bg-sky-800 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Ir al curso
						</button>
					</div>
				</div>
			</section>
			<section
				className={`fixed 2xl:top-0 2xl:right-[300px] top-[-100px] right-[200px] translate-x-[50%] translate-y-[50%] flex flex-col p-10 transition-opacity duration-1000 z-10 2xl:w-[600px] w-[400px] ${
					currentScreen === "Isla2" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="bg-[#D9D9D999] rounded-lg p-6">
					<h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Sabiduría Zen
					</h2>
					<p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<div className="flex gap-2 2xl:flex-row flex-col">
						<button
							onClick={() => onChangeScreen("InicioIsla2")}
							className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Regresar al menú
						</button>
						<button
							onClick={() =>
								router.push("/courses/24885a44-42c3-4b0f-9d77-32db0ca81b55")
							}
							className="bg-sky-800 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Ir al curso
						</button>
					</div>
				</div>
			</section>
			<section
				className={`fixed 2xl:top-0 2xl:right-[300px] top-[-100px] right-[200px] translate-x-[50%] translate-y-[50%] flex flex-col p-10 transition-opacity duration-1000 z-10 2xl:w-[600px] w-[400px] ${
					currentScreen === "Isla3" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="bg-[#D9D9D999] rounded-lg p-6">
					<h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Tao de la Meditación I
					</h2>
					<p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<div className="flex gap-2 2xl:flex-row flex-col">
						<button
							onClick={() => onChangeScreen("InicioIsla3")}
							className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Regresar al menú
						</button>
						<button
							onClick={() =>
								router.push("/courses/1f984877-8128-4156-b0b5-be8a3dde7221")
							}
							className="bg-sky-800 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Ir al curso
						</button>
					</div>
				</div>
			</section>
			<section
				className={`fixed 2xl:top-0 2xl:right-[300px] top-[-100px] right-[200px] translate-x-[50%] translate-y-[50%] flex flex-col p-10 transition-opacity duration-1000 z-10 2xl:w-[600px] w-[400px] ${
					currentScreen === "Isla4" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="bg-[#D9D9D999] rounded-lg p-6">
					<h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Alkimia Interna
					</h2>
					<p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
					<div className="flex gap-2 2xl:flex-row flex-col">
						<button
							onClick={() => onChangeScreen("InicioIsla4")}
							className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Regresar al menú
						</button>
						<button
							onClick={() =>
								router.push("/courses/2a88e27f-0168-453c-9497-f5f6b746b7a3")
							}
							className="bg-sky-800 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
						>
							Ir al curso
						</button>
					</div>
				</div>
			</section>
			{/* <section
				className={`fixed top-[50%] left-[15%] translate-x-[-50%] translate-y-[-50%] flex flex-col p-10 transition-opacity duration-1000 z-10 w-[600px] ${
					currentScreen === "Isla1" && !isAnimating
						? ""
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div className="md:max-w-2xl">
				<h2 className="text-7xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
						Gracias por visitar
					</h2>
					<p className="text-white mt-2">
						Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
						excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
						excepteur officia consequat quis veniam non proident irure laboris.
						Eu duis dolore deserunt consectetur consectetur enim.
					</p>
				</div>
			</section> */}
		</>
	);
};
