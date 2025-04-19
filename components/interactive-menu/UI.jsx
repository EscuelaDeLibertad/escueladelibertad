"use client";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const UI = ({ currentScreen, onChangeScreen, isAnimating }) => {
  const router = useRouter();

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
          <div
            className={`flex flex-col gap-4 mb-4 relative w-full h-full ${playfair.className} tracking-normal`}
          >
            <div className="flex flex-row gap-1 mt-16 w-full h-full">
              <div className="w-full h-full flex-1">
                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla1")}
                    className="bg-[#94e9e3] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/riodelavida.svg"
                      alt="Alkimia Interna"
                      className="w-8 h-8 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[150px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    El Río de la Vida
                  </div>
                </div>
                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla2")}
                    className="bg-[#ffe762] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/sabiduriazen.svg"
                      alt="Sabiduría Zen"
                      className="w-8 h-8 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[150px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    Sabiduría Zen
                  </div>
                </div>

                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla3")}
                    className="bg-[#b7f033] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/taomeditacioni.svg"
                      alt="Tao de la Meditación I"
                      className="w-8 h-8 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[195px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    Tao de la Meditación I
                  </div>
                </div>

                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla4")}
                    className="bg-[#efc1b7] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/alquimiainterna.svg"
                      alt="Alquimia Interna"
                      className="w-8 h-8 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[180px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    Alquimia Interna
                  </div>
                </div>

                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla5")}
                    className="bg-[#0073b4] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/reconexionarcoirica.svg"
                      alt="Reconexión Arcoírica"
                      className="w-7 h-7 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[195px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    Reconexión Arcoírica
                  </div>
                </div>

                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla6")}
                    className="bg-[#ff7e36] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/ruedadelavida.svg"
                      alt="La Rueda de la Vida"
                      className="w-8 h-8 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[180px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    La Rueda de la Vida
                  </div>
                </div>

                <div className="flex flex-col items-start ml-6 relative mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla7")}
                    className="bg-[#95bd3f] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/taomeditacionii.svg"
                      alt="Tao en la Meditación II"
                      className="w-9 h-9 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[195px] top-0 left-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[56px]">
                    Tao en la Meditación II
                  </div>
                </div>
              </div>
              <div className="w-full flex-1">
                <div className="relative flex flex-col items-end justify-center mr-6 mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla8")}
                    className="bg-[#003e61] rounded-full w-10 h-10 text-white font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/chikungonirico.svg"
                      alt="Chikung Onírico"
                      className="w-7 h-7 filter"
                      style={{
                        filter:
                          "drop-shadow(0 0 0.5px black) brightness(0) invert(1) ",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[180px] top-0 right-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[-56px]">
                    Chikung Onírico
                  </div>
                </div>

                <div className="relative flex flex-col items-end justify-center mr-6 mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla9")}
                    className="bg-[#e5c100] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/budadelarisa.svg"
                      alt="Buda de la Risa"
                      className="w-8 h-8 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[150px] top-0 right-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[-56px]">
                    Buda de la Risa
                  </div>
                </div>

                <div className="relative flex flex-col items-end justify-center mr-6 mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla10")}
                    className="bg-[#1a524e] rounded-full w-10 h-10 text-white font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/taoenelamor.svg"
                      alt="Tao en el Amor"
                      className="w-9 h-9 filter"
                      style={{
                        filter:
                          "drop-shadow(0 0 0.5px black) brightness(0) invert(1)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[150px] top-0 right-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[-56px]">
                    Tao en el Amor
                  </div>
                </div>

                <div className="relative flex flex-col items-end justify-center mr-6 mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla11")}
                    className="bg-[#812f88] rounded-full w-10 h-10 text-white font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/sempiternoi.svg"
                      alt="Sempiterno I"
                      className="w-8 h-8 filter"
                      style={{
                        filter:
                          "drop-shadow(0 0 0.5px black) brightness(0) invert(1)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[150px] top-0 right-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[-56px]">
                    Sempiterno I
                  </div>
                </div>

                <div className="relative flex flex-col items-end justify-center mr-6 mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla12")}
                    className="bg-[#375d87] rounded-full w-10 h-10 text-white font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/puertadeldragon.svg"
                      alt="La Puerta del Dragón"
                      className="w-7 h-7 filter"
                      style={{
                        filter:
                          "drop-shadow(0 0 0.5px black) brightness(0) invert(1)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[195px] top-0 right-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[-56px]">
                    La Puerta del Dragón
                  </div>
                </div>

                <div className="relative flex flex-col items-end justify-center mr-6 mb-3 group">
                  <button
                    onClick={() => onChangeScreen("Isla13")}
                    className="bg-[#f19858] rounded-full w-10 h-10 text-black font-bold mb-2 flex items-center justify-center"
                  >
                    <img
                      src="/assets/icons/viajesyretiros.svg"
                      alt="Retiros y Viajes"
                      className="w-9 h-9 filter"
                      style={{
                        filter: "drop-shadow(0 0 0.5px black)",
                      }}
                    />
                  </button>
                  <div className="absolute flex items-center justify-center w-[150px] top-0 right-0 text-sm bg-sky-200 bg-opacity-50 py-3 px-6 rounded-md text-white opacity-0 font-medium -z-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[-56px]">
                    Retiros y Viajes
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 w-full h-[100px] 2xl:h-[200px] flex items-end justify-start pl-48 2xl:pl-80 pt-28 z-[-10]">
              <h1 className="text-4xl 2xl:text-6xl font-medium text-white opacity-40">
                El Gran Viaje
              </h1>
            </div>
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
    </>
  );
};
