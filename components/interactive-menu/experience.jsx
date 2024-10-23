"use client";
import React, { useRef, useState } from "react";
// import { IslasScene } from "./IslasScene";
import { editable as e } from "@theatre/r3f";
import { IslasScene2 } from "./IslasScene2";
import { useFrame, useLoader } from "@react-three/fiber";
import { BackSide, TextureLoader } from "three";
import { PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random";

export const Experience = () => {
	// Cargar la textura de la imagen
	const texture = useLoader(TextureLoader, "/assets/images/background4.png");

	return (
		<>
			<ambientLight intensity={0.5} />
			<e.group theatreKey="IslasScene">
				<IslasScene2 />
			</e.group>
			{/* Crear un plano grande detrás de la escena */}
			{/* <mesh position={[0, 0, 20]}>
				<sphereGeometry args={[130, 130]} />
				<meshBasicMaterial
					map={texture}
					transparent={true}
					opacity={0.5}
					side={BackSide}
				/>
			</mesh> */}
			<Stars />
		</>
	);
};

function Stars(props) {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(15000), { radius: 90 })
	);
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 300;
		ref.current.rotation.y -= delta / 300;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}
				{...props}
			>
				<PointMaterial
					transparent
					color="#ffa0e0"
					size={0.4}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}
