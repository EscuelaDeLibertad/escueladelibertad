"use client";
import { useEffect, useRef, useState } from "react";
import { UI } from "./UI";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./experience";

import { getProject } from "@theatre/core";
import { PerspectiveCamera, SheetProvider } from "@theatre/r3f";

import r3fExtension from "@theatre/r3f/dist/extension";
import studio from "@theatre/studio";

import { editable as e } from "@theatre/r3f";

import projectState from "./assets/InteractiveMenu.json";
import { EmissiveProvider } from "./EmissiveContext";
import { Loader } from "@react-three/drei";

studio.initialize();
studio.extend(r3fExtension);
studio.ui.hide();

const project = getProject("InteractiveMenu", {
  state: projectState,
});

const mainSheet = project.sheet("MainFinal");

const transitions = {
  Home: [0, 6],
  Isla1: [6, 10], //Cuando los frames no son enteros se debe poner de la sig forma [6, 12 + 16 / 30]
  InicioIsla1: [10, 14],
  Isla2: [14, 18],
  InicioIsla2: [18, 22],
  Isla3: [22, 26],
  InicioIsla3: [26, 30],
  Isla4: [30, 34],
  InicioIsla4: [34, 38],
  Isla5: [38, 42],
  InicioIsla5: [42, 46],
  Isla6: [46, 50],
  InicioIsla6: [50, 54],
  Isla7: [54, 58],
  InicioIsla7: [58, 62],
  Isla8: [62, 66],
  InicioIsla8: [66, 70],
  Isla9: [70, 74],
  InicioIsla9: [74, 78],
  Isla10: [78, 82],
  InicioIsla10: [82, 86],
  Isla11: [86, 90],
  InicioIsla11: [90, 94],
  Isla12: [94, 98],
  InicioIsla12: [98, 102],
  Isla13: [102, 106],
  InicioIsla13: [106, 110],
};

export const InteractiveMenu = () => {
  const [currentScreen, setCurrentScreen] = useState("Intro");
  const [targetScreen, setTargetScreen] = useState("Home");
  const [isLoading, setIsLoading] = useState(true);

  const cameraTagetRef = useRef();
  const isSetup = useRef(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    project.ready.then(() => {
      if (currentScreen === targetScreen) {
        return;
      }
      if (isSetup.current && currentScreen === "Intro") {
        // En desarrollo Strict Mode triggerea ek useEffect 2 veces asi que generamos esta referencia para evitar eso
        return;
      }
      isSetup.current = true;
      const transition = transitions[targetScreen];
      if (!transition) {
        return;
      }
      mainSheet.sequence
        .play({
          range: transition,
        })
        .then(() => setCurrentScreen(targetScreen));
    });
  }, [targetScreen]);

  return (
    <EmissiveProvider>
      <section className="w-full h-full bg-gradient-to-t from-[#09143c] to-gray-900">
        <UI
          currentScreen={currentScreen}
          onChangeScreen={setTargetScreen}
          isAnimating={currentScreen !== targetScreen}
        />
        <Canvas
          camera={{
            position: [0, 0, 0],
            fov: 30,
            near: 1,
            far: 1000,
          }}
          gl={{
            preserveDrawingBuffer: true,
          }}
        >
          <SheetProvider sheet={mainSheet}>
            <PerspectiveCamera
              position={[0, 0, 0]}
              fov={30}
              near={0.1}
              far={1000}
              makeDefault
              theatreKey="Camera"
              lookAt={cameraTagetRef}
            />
            <e.mesh
              theatreKey="Camera Target"
              visible="editor"
              ref={cameraTagetRef}
            >
              <octahedronGeometry args={[0.1, 0]} />
              <meshPhongMaterial color="yellow" />
            </e.mesh>
            <Experience />
          </SheetProvider>
        </Canvas>
        {!isLoading && (
          <Loader
            containerStyles={{ background: "rgba(9, 20, 60, 0.3)" }}
            innerStyles={{ background: "#09143c" }}
            barStyles={{ background: "#ffffff" }}
            dataStyles={{ color: "#ffffff", fontSize: "14px" }}
            dataInterpolation={(p) => `Cargando ${p.toFixed(2)}%`}
          />
        )}
      </section>
    </EmissiveProvider>
  );
};
