"use client";
import React, { useRef, useState } from "react";

import { editable as e } from "@theatre/r3f";

import { useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { DracoConstellation } from "./dracoConstellation";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <e.group theatreKey="IslasScene" scale={[0.1, 0.1, 0.1]}>
        <DracoConstellation />
      </e.group>
      <Stars />
    </>
  );
};

function Stars(props) {
  const ref = useRef();
  const colors = ["#023e8a", "#ffbf00", "#ffffff"];

  const [positions] = useState(() => {
    // Create a fixed-size array with a smaller number of points
    const count = 5000;
    const positions = new Float32Array(count * 3);

    // Manually populate with valid values
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Modified distribution to reduce central concentration
      // Use cube root of random to push points outward
      const radiusFactor = Math.cbrt(Math.random());
      const radius = 120 * radiusFactor;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  });

  // Create color array based on the new positions
  const [colorArray] = useState(() => {
    const count = positions.length / 3;
    const colorArray = new Float32Array(positions.length);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];

      // Default values in case parsing fails
      let r = 0,
        g = 0,
        b = 1;

      try {
        r = parseInt(color.slice(1, 3), 16) / 255;
        g = parseInt(color.slice(3, 5), 16) / 255;
        b = parseInt(color.slice(5, 7), 16) / 255;
      } catch (e) {
        // Use default values if parsing fails
      }

      colorArray[i3] = r;
      colorArray[i3 + 1] = g;
      colorArray[i3 + 2] = b;
    }

    return colorArray;
  });

  // Safer animation with null check
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 300;
      ref.current.rotation.y -= delta / 300;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
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
