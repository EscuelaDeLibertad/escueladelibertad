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
  const isla5Button = useRef();
  const isla6Button = useRef();
  const isla7Button = useRef();
  const isla8Button = useRef();
  const isla9Button = useRef();
  const isla10Button = useRef();
  const isla11Button = useRef();
  const isla12Button = useRef();
  const isla13Button = useRef();
  const [activeButton, setActiveButton] = useState(null); // Estado para controlar el botón activo
  const [timelines, setTimelines] = useState({}); // Estado para almacenar timelines

  const { setEmissiveIntensity, setActiveIsland } = useEmissive();

  const handleButtonClick = (buttonKey) => {
    onClickButton(buttonKey);
    // Cambia la intensidad emisiva y la isla activa según el botón
    switch (buttonKey) {
      case "isla1":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla1");
        break;
      case "isla2":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla2");
        break;
      case "isla3":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla3");
        break;
      case "isla4":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla4");
        break;
      case "isla5":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla5");
        break;
      case "isla6":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla6");
        break;
      case "isla7":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla7");
        break;
      case "isla8":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla8");
        break;
      case "isla9":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla9");
        break;
      case "isla10":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla10");
        break;
      case "isla11":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla11");
        break;
      case "isla12":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla12");
        break;
      case "isla13":
        setEmissiveIntensity(0.1);
        setActiveIsland("isla13");
        break;
      default:
        setEmissiveIntensity(0);
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
          x: 56,
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
          x: 56,
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
          x: 56,
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
          x: 56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla5: gsap.timeline({ paused: true }).fromTo(
        isla5Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: 56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla6: gsap.timeline({ paused: true }).fromTo(
        isla6Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: 56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla7: gsap.timeline({ paused: true }).fromTo(
        isla7Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: 56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla8: gsap.timeline({ paused: true }).fromTo(
        isla8Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: -56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla9: gsap.timeline({ paused: true }).fromTo(
        isla9Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: -56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla10: gsap.timeline({ paused: true }).fromTo(
        isla10Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: -56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla11: gsap.timeline({ paused: true }).fromTo(
        isla11Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: -56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla12: gsap.timeline({ paused: true }).fromTo(
        isla12Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: -56,
          duration: 0.5,
          ease: "power2.inOut",
          zIndex: 0,
        }
      ),
      isla13: gsap.timeline({ paused: true }).fromTo(
        isla13Button.current,
        {
          opacity: 0, // Estado inicial
          y: 0, // Estado inicial
        },
        {
          opacity: 1,
          x: -56,
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
    timelines[buttonKey].play();
  };

  return (
    <>
      <main
        className={`${
          currentScreen === "Isla1" ||
          currentScreen === "Isla2" ||
          currentScreen === "Isla3" ||
          currentScreen === "Isla4" ||
          currentScreen === "Isla5" ||
          currentScreen === "Isla6" ||
          currentScreen === "Isla7" ||
          currentScreen === "Isla8" ||
          currentScreen === "Isla9" ||
          currentScreen === "Isla10" ||
          currentScreen === "Isla11" ||
          currentScreen === "Isla12" ||
          currentScreen === "Isla13"
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
            currentScreen === "InicioIsla4" ||
            currentScreen === "InicioIsla5" ||
            currentScreen === "InicioIsla6" ||
            currentScreen === "InicioIsla7" ||
            currentScreen === "InicioIsla8" ||
            currentScreen === "InicioIsla9" ||
            currentScreen === "InicioIsla10" ||
            currentScreen === "InicioIsla11" ||
            currentScreen === "InicioIsla12" ||
            currentScreen === "InicioIsla13") &&
          !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
        >
          <div className="flex flex-col gap-4 mb-4 relative w-full h-full">
            <div className="flex flex-row gap-1 mt-16 w-full h-full">
              <div className="w-full h-full flex-1">
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla1")}
                    className="bg-[#94e9e3] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    1
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla1")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla1Button}
                  >
                    El Río de la Vida
                  </button>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla2")}
                    className="bg-[#ffe762] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    2
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla2")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla2Button}
                  >
                    Sabiduría Zen
                  </button>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla3")}
                    className="bg-[#b7f033] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    3
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla3")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla3Button}
                  >
                    Tao de la Meditación I
                  </button>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla4")}
                    className="bg-[#efc1b7] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    4
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla4")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla4Button}
                  >
                    Alkimia Interna
                  </button>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla5")}
                    className="bg-[#0073b4] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    5
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla5")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla5Button}
                  >
                    Reconexión Arcoírica
                  </button>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla6")}
                    className="bg-[#ff7e36] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    6
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla6")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla6Button}
                  >
                    La Rueda de la Vida
                  </button>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3">
                  <button
                    onClick={() => handleButtonClick("isla7")}
                    className="bg-[#95bd3f] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    7
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla7")}
                    className="absolute w-[150px] top-0 left-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla7Button}
                  >
                    Tao en la Meditación II
                  </button>
                </div>
              </div>
              <div className="w-full flex-1">
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3">
                  <button
                    onClick={() => handleButtonClick("isla8")}
                    className="bg-[#003e61] rounded-full w-10 h-10 text-white font-bold mb-2"
                  >
                    8
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla8")}
                    className="absolute w-[150px] top-0 right-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla8Button}
                  >
                    Chikung Onírico
                  </button>
                </div>
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3">
                  <button
                    onClick={() => handleButtonClick("isla9")}
                    className="bg-[#e5c100] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    9
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla9")}
                    className="absolute w-[150px] top-0 right-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla9Button}
                  >
                    Buda de la Risa
                  </button>
                </div>
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3">
                  <button
                    onClick={() => handleButtonClick("isla10")}
                    className="bg-[#001b19] rounded-full w-10 h-10 text-white font-bold mb-2"
                  >
                    10
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla10")}
                    className="absolute w-[150px] top-0 right-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla10Button}
                  >
                    Tao en el Amor
                  </button>
                </div>
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3">
                  <button
                    onClick={() => handleButtonClick("isla11")}
                    className="bg-[#812f88] rounded-full w-10 h-10 text-white font-bold mb-2"
                  >
                    11
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla11")}
                    className="absolute w-[150px] top-0 right-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla11Button}
                  >
                    Sempiterno I
                  </button>
                </div>
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3">
                  <button
                    onClick={() => handleButtonClick("isla12")}
                    className="bg-[#375d87] rounded-full w-10 h-10 text-white font-bold mb-2"
                  >
                    12
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla12")}
                    className="absolute w-[150px] top-0 right-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla12Button}
                  >
                    La Puerta del Dragón
                  </button>
                </div>
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3">
                  <button
                    onClick={() => handleButtonClick("isla13")}
                    className="bg-[#f19858] rounded-full w-10 h-10 text-black font-bold mb-2"
                  >
                    13
                  </button>
                  <button
                    onClick={() => onChangeScreen("Isla13")}
                    className="absolute w-[150px] top-0 right-0 text-xs bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10"
                    ref={isla13Button}
                  >
                    Retiros y Viajes
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 w-full h-[100px] 2xl:h-[200px] flex items-end justify-start pl-40 2xl:pl-72 pt-28 z-[-10]">
              <h1 className="text-4xl 2xl:text-5xl font-medium text-white opacity-40">
                Constelación de Draco
              </h1>
            </div>

            {/* <p className="text-white text-sm font-thin">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p> */}
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
      <section
        className={`fixed 2xl:top-0 2xl:right-[300px] top-[-100px] right-[200px] translate-x-[50%] translate-y-[50%] flex flex-col p-10 transition-opacity duration-1000 z-10 2xl:w-[600px] w-[400px] ${
          currentScreen === "Isla5" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Reconexión Arcoírica
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla5")}
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
          currentScreen === "Isla6" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            La Rueda de la Vida
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla6")}
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
          currentScreen === "Isla7" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Tao de la Meditación II
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla7")}
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
          currentScreen === "Isla8" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Chikung Onírico
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla8")}
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
          currentScreen === "Isla9" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Buda de la Risa
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla9")}
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
          currentScreen === "Isla10" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Tao en el Amor
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla10")}
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
          currentScreen === "Isla11" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Sempiterno I
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla11")}
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
          currentScreen === "Isla12" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            La Puerta del Dragón
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla12")}
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
          currentScreen === "Isla13" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#D9D9D999] rounded-lg p-6">
          <h2 className="2xl:text-7xl text-2xl text-white opacity-90 font-extrabold -ml-1 pointer-events-none">
            Retiros y Viajes
          </h2>
          <p className="text-white mt-2 pointer-events-none 2xl:text-md text-sm">
            Sint eu velit aute nostrud deserunt. In ipsum magna do amet ullamco
            excepteur elit commodo sunt dolore dolor nostrud. Cupidatat
            excepteur officia consequat quis veniam non proident irure laboris.
            Eu duis dolore deserunt consectetur consectetur enim.
          </p>
          <div className="flex gap-2 2xl:flex-row flex-col">
            <button
              onClick={() => onChangeScreen("InicioIsla13")}
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
