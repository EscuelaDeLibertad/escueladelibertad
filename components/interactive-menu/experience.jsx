"use client";
import React, { useRef, useState } from "react";

import { editable as e } from "@theatre/r3f";

import { useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random";
import { DracoConstellation } from "./dracoConstellation";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={2.5} />
      {/* <OrbitControls /> */}
      <e.group theatreKey="IslasScene" scale={[0.1, 0.1, 0.1]}>
        {/* <IslasScene2 /> */}
        <DracoConstellation />
      </e.group>
      <Stars />
    </>
  );
};

function Stars(props) {
  const ref = useRef();
  const colors = ["#023e8a", "#ffbf00", "#ffffff"];
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 120 })
  );
  const [colorArray] = useState(() => {
    const colorArray = new Float32Array(sphere.length);
    for (let i = 0; i < sphere.length; i += 3) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      colorArray[i] = parseInt(color.slice(1, 3), 16) / 255;
      colorArray[i + 1] = parseInt(color.slice(3, 5), 16) / 255;
      colorArray[i + 2] = parseInt(color.slice(5, 7), 16) / 255;
    }
    return colorArray;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 300;
    ref.current.rotation.y -= delta / 300;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        colors={colorArray}
        stride={3}
        frustumCulled={true}
        {...props}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.3}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={2}
        />
      </Points>
    </group>
  );
}
