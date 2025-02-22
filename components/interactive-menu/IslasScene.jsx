/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/Scene/escenaDePrueba2.gltf -o app/components/IslasScene.jsx -r public 
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function IslasScene(props) {
	const group = useRef();
	const isla1Ref = useRef();
	const { nodes, materials } = useGLTF(
		"/assets/models/Scene/escenaDePrueba2.gltf"
	);
	const { camera } = useThree();
	const [orbitEnabled, setOrbitEnabled] = useState(false);

	// useFrame para rotar el grupo isla1
	useFrame(() => {
		if (isla1Ref.current) {
			// isla1Ref.current.rotation.y += 0.01;
		}
	});

	// Simulación de transiciones
	useEffect(() => {
		const handleTransition = (transitionName) => {
			if (["Isla1", "Isla2", "Isla3", "Isla4"].includes(transitionName)) {
				setOrbitEnabled(true);
				// Aquí deberías ajustar la posición de la cámara al último punto de la transición
				// Ejemplo: camera.position.set(x, y, z);
			} else {
				setOrbitEnabled(false);
			}
		};

		// Simula una transición
		handleTransition("Isla1"); // Cambia esto según la transición actual
	}, [camera]);

	return (
		<>
			<group ref={group} {...props} dispose={null}>
				<group name="Scene">
					<group ref={isla1Ref}>
						<mesh
							name="baseFinalIsla1"
							geometry={nodes.baseFinalIsla1.geometry}
							material={materials.baseTexIsla1}
						/>
						<group name="koiFinalIsla1">
							<mesh
								name="koiFinalIsla1_1"
								geometry={nodes.koiFinalIsla1_1.geometry}
								material={materials.koiTexIsla1}
							/>
							<mesh
								name="koiFinalIsla1_2"
								geometry={nodes.koiFinalIsla1_2.geometry}
								material={materials.outlineTexIsla1}
							/>
						</group>
						<group name="piedrasFinalIsla1">
							<mesh
								name="piedrasFinalIsla1_1"
								geometry={nodes.piedrasFinalIsla1_1.geometry}
								material={materials.baseTexIsla1}
							/>
							<mesh
								name="piedrasFinalIsla1_2"
								geometry={nodes.piedrasFinalIsla1_2.geometry}
								material={materials.outlineTexIsla1}
							/>
						</group>
						<mesh
							name="planetaFinalIsla1"
							geometry={nodes.planetaFinalIsla1.geometry}
							material={materials.planetaTexIsla1}
						/>
						<group name="plantasFinalIsla1">
							<mesh
								name="plantasFinalIsla1001"
								geometry={nodes.plantasFinalIsla1001.geometry}
								material={materials.foliageTexIsla1}
							/>
							<mesh
								name="plantasFinalIsla1001_1"
								geometry={nodes.plantasFinalIsla1001_1.geometry}
								material={materials.baseTexIsla1}
							/>
							<mesh
								name="plantasFinalIsla1001_2"
								geometry={nodes.plantasFinalIsla1001_2.geometry}
								material={materials.outlineTexIsla1}
							/>
						</group>
						<group name="waterFinalIsla1">
							<mesh
								name="waterFinalIsla1_1"
								geometry={nodes.waterFinalIsla1_1.geometry}
								material={materials.waterTexIsla1}
							/>
							<mesh
								name="waterFinalIsla1_2"
								geometry={nodes.waterFinalIsla1_2.geometry}
								material={materials.outlineTexIsla1}
							/>
						</group>
					</group>
					<mesh
						name="accesoriosIsla2"
						geometry={nodes.accesoriosIsla2.geometry}
						material={materials.characterIsla2}
					/>
					<group name="bambooIsla2">
						<mesh
							name="Plane004"
							geometry={nodes.Plane004.geometry}
							material={materials.foliageIsla2}
						/>
						<mesh
							name="Plane004_1"
							geometry={nodes.Plane004_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<group name="baseIsla2">
						<mesh
							name="Plane047"
							geometry={nodes.Plane047.geometry}
							material={materials.textureIsla2}
						/>
						<mesh
							name="Plane047_1"
							geometry={nodes.Plane047_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<group name="clothesIsla2">
						<mesh
							name="RetopoFlow"
							geometry={nodes.RetopoFlow.geometry}
							material={materials.characterIsla2}
						/>
						<mesh
							name="RetopoFlow_1"
							geometry={nodes.RetopoFlow_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<mesh
						name="foliageIsla2"
						geometry={nodes.foliageIsla2.geometry}
						material={materials.foliageIsla2}
					/>
					<group name="hairIsla2">
						<mesh
							name="RetopoFlow002"
							geometry={nodes.RetopoFlow002.geometry}
							material={materials.characterIsla2}
						/>
						<mesh
							name="RetopoFlow002_1"
							geometry={nodes.RetopoFlow002_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<mesh
						name="humoIsla2"
						geometry={nodes.humoIsla2.geometry}
						material={materials.foliageIsla2}
					/>
					<group name="maderaIsla2">
						<mesh
							name="Plane008"
							geometry={nodes.Plane008.geometry}
							material={materials.textureIsla2}
						/>
						<mesh
							name="Plane008_1"
							geometry={nodes.Plane008_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<group name="paredIsla2">
						<mesh
							name="Plane009"
							geometry={nodes.Plane009.geometry}
							material={materials.textureIsla2}
						/>
						<mesh
							name="Plane009_1"
							geometry={nodes.Plane009_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<mesh
						name="planetIsla2"
						geometry={nodes.planetIsla2.geometry}
						material={materials.planetIsla2}
					/>
					<group name="rocksIsla2">
						<mesh
							name="Sphere_1"
							geometry={nodes.Sphere_1.geometry}
							material={materials.textureIsla2}
						/>
						<mesh
							name="Sphere_2"
							geometry={nodes.Sphere_2.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<group name="teaIsla2">
						<mesh
							name="Circle002"
							geometry={nodes.Circle002.geometry}
							material={materials.foliageIsla2}
						/>
						<mesh
							name="Circle002_1"
							geometry={nodes.Circle002_1.geometry}
							material={materials.outlineIsla2}
						/>
					</group>
					<mesh
						name="accesoriosIsla3"
						geometry={nodes.accesoriosIsla3.geometry}
						material={materials.character}
					/>
					<group name="baseIsla3">
						<mesh
							name="Circle004"
							geometry={nodes.Circle004.geometry}
							material={materials["Material.001"]}
						/>
						<mesh
							name="Circle004_1"
							geometry={nodes.Circle004_1.geometry}
							material={materials.outline}
						/>
					</group>
					<group name="clothesIsla3">
						<mesh
							name="Circle003_1"
							geometry={nodes.Circle003_1.geometry}
							material={materials.clothesIsla3}
						/>
						<mesh
							name="Circle003_2"
							geometry={nodes.Circle003_2.geometry}
							material={materials.outlineIsla3}
						/>
					</group>
					<group name="cuerpoIsla3">
						<mesh
							name="Body_(merged)baked006"
							geometry={nodes["Body_(merged)baked006"].geometry}
							material={materials.character}
						/>
						<mesh
							name="Body_(merged)baked006_1"
							geometry={nodes["Body_(merged)baked006_1"].geometry}
							material={materials.outlineIsla3}
						/>
					</group>
					<group name="grassIsla3">
						<mesh
							name="Circle_1"
							geometry={nodes.Circle_1.geometry}
							material={materials.grass}
						/>
						<mesh
							name="Circle_2"
							geometry={nodes.Circle_2.geometry}
							material={materials.outlineIsla3}
						/>
					</group>
					<group name="hairIsla3">
						<mesh
							name="RetopoFlow007"
							geometry={nodes.RetopoFlow007.geometry}
							material={materials.character}
						/>
						<mesh
							name="RetopoFlow007_1"
							geometry={nodes.RetopoFlow007_1.geometry}
							material={materials.outline}
						/>
					</group>
					<group name="leavesIsla3">
						<mesh
							name="Plane016"
							geometry={nodes.Plane016.geometry}
							material={materials.hojasIsla3}
						/>
						<mesh
							name="Plane016_1"
							geometry={nodes.Plane016_1.geometry}
							material={materials.grass}
						/>
					</group>
					<mesh
						name="lightsIsla3"
						geometry={nodes.lightsIsla3.geometry}
						material={materials.Light}
					/>
					<group name="mushroomIsla3">
						<mesh
							name="Circle005"
							geometry={nodes.Circle005.geometry}
							material={materials.treeIsla3}
						/>
						<mesh
							name="Circle005_1"
							geometry={nodes.Circle005_1.geometry}
							material={materials.outline}
						/>
					</group>
					<mesh
						name="planetaIsla3"
						geometry={nodes.planetaIsla3.geometry}
						material={materials.planetIsla3}
					/>
					<group name="rocksIsla3">
						<mesh
							name="Cube002"
							geometry={nodes.Cube002.geometry}
							material={materials.rocks}
						/>
						<mesh
							name="Cube002_1"
							geometry={nodes.Cube002_1.geometry}
							material={materials.outlineIsla3}
						/>
					</group>
					<group name="treeIsla3">
						<mesh
							name="Plane001"
							geometry={nodes.Plane001.geometry}
							material={materials.treeIsla3}
						/>
						<mesh
							name="Plane001_1"
							geometry={nodes.Plane001_1.geometry}
							material={materials.outlineIsla3}
						/>
					</group>
					<mesh
						name="waterIsla3"
						geometry={nodes.waterIsla3.geometry}
						material={materials.water}
					/>
					<mesh
						name="acceorios001"
						geometry={nodes.acceorios001.geometry}
						material={materials.characterIsla4Tex}
					/>
					<group name="camista001">
						<mesh
							name="Face_(merged)(Clone)baked015"
							geometry={nodes["Face_(merged)(Clone)baked015"].geometry}
							material={materials.camisetaIsla4Tex}
						/>
						<mesh
							name="Face_(merged)(Clone)baked015_1"
							geometry={nodes["Face_(merged)(Clone)baked015_1"].geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="capaIsla4001">
						<mesh
							name="Face_(merged)(Clone)baked017"
							geometry={nodes["Face_(merged)(Clone)baked017"].geometry}
							material={materials.capaIsla4Tex}
						/>
						<mesh
							name="Face_(merged)(Clone)baked017_1"
							geometry={nodes["Face_(merged)(Clone)baked017_1"].geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<mesh
						name="Circle"
						geometry={nodes.Circle.geometry}
						material={materials.cafe}
					/>
					<group name="Circle003">
						<mesh
							name="Circle006"
							geometry={nodes.Circle006.geometry}
							material={materials.farolIsla4Tex}
						/>
						<mesh
							name="Circle006_1"
							geometry={nodes.Circle006_1.geometry}
							material={materials["outline.001"]}
						/>
						<mesh
							name="Circle006_2"
							geometry={nodes.Circle006_2.geometry}
							material={materials.coral}
						/>
						<mesh
							name="Circle006_3"
							geometry={nodes.Circle006_3.geometry}
							material={materials.coral2Isla4tex}
						/>
						<mesh
							name="Circle006_4"
							geometry={nodes.Circle006_4.geometry}
							material={materials.coral3Isla4Tex}
						/>
						<mesh
							name="Circle006_5"
							geometry={nodes.Circle006_5.geometry}
							material={materials.fishIsla4Tex}
						/>
						<mesh
							name="Circle006_6"
							geometry={nodes.Circle006_6.geometry}
							material={materials.weeds}
						/>
					</group>
					<group name="Cube">
						<mesh
							name="Cube001_1"
							geometry={nodes.Cube001_1.geometry}
							material={materials["baseIsla4.001"]}
						/>
						<mesh
							name="Cube001_2"
							geometry={nodes.Cube001_2.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="Cube001">
						<mesh
							name="Cube035"
							geometry={nodes.Cube035.geometry}
							material={materials["baseIsla4.001"]}
						/>
						<mesh
							name="Cube035_1"
							geometry={nodes.Cube035_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<mesh
						name="Cylinder"
						geometry={nodes.Cylinder.geometry}
						material={materials.lightIsla4}
					/>
					<mesh
						name="Cylinder001"
						geometry={nodes.Cylinder001.geometry}
						material={materials.lightIsla4}
					/>
					<group name="Fish1">
						<mesh
							name="Plane021"
							geometry={nodes.Plane021.geometry}
							material={materials.fishIsla4Tex}
						/>
						<mesh
							name="Plane021_1"
							geometry={nodes.Plane021_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="Fish1001">
						<mesh
							name="Plane073"
							geometry={nodes.Plane073.geometry}
							material={materials.fishIsla4Tex}
						/>
						<mesh
							name="Plane073_1"
							geometry={nodes.Plane073_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="Fish1002">
						<mesh
							name="Plane074"
							geometry={nodes.Plane074.geometry}
							material={materials.fishIsla4Tex}
						/>
						<mesh
							name="Plane074_1"
							geometry={nodes.Plane074_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="Fish2">
						<mesh
							name="Plane022"
							geometry={nodes.Plane022.geometry}
							material={materials.fishIsla4Tex}
						/>
						<mesh
							name="Plane022_1"
							geometry={nodes.Plane022_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="Fish3">
						<mesh
							name="Plane036"
							geometry={nodes.Plane036.geometry}
							material={materials.fishIsla4Tex}
						/>
						<mesh
							name="Plane036_1"
							geometry={nodes.Plane036_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="fullBody001">
						<mesh
							name="Face_(merged)(Clone)baked014"
							geometry={nodes["Face_(merged)(Clone)baked014"].geometry}
							material={materials.characterIsla4Tex}
						/>
						<mesh
							name="Face_(merged)(Clone)baked014_1"
							geometry={nodes["Face_(merged)(Clone)baked014_1"].geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="hair001">
						<mesh
							name="RetopoFlow001"
							geometry={nodes.RetopoFlow001.geometry}
							material={materials.characterIsla4Tex}
						/>
						<mesh
							name="RetopoFlow001_1"
							geometry={nodes.RetopoFlow001_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="pantalon001">
						<mesh
							name="Face_(merged)(Clone)baked016"
							geometry={nodes["Face_(merged)(Clone)baked016"].geometry}
							material={materials.pantalonIsla4Tex}
						/>
						<mesh
							name="Face_(merged)(Clone)baked016_1"
							geometry={nodes["Face_(merged)(Clone)baked016_1"].geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<mesh
						name="Plane"
						geometry={nodes.Plane.geometry}
						material={materials.baseIsla4}
					/>
					<group name="Plane002">
						<mesh
							name="Plane003_1"
							geometry={nodes.Plane003_1.geometry}
							material={materials.waterIsla4}
						/>
						<mesh
							name="Plane003_2"
							geometry={nodes.Plane003_2.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<mesh
						name="Plane003"
						geometry={nodes.Plane003.geometry}
						material={materials.cafe}
					/>
					<group name="Sombrero001">
						<mesh
							name="Circle007"
							geometry={nodes.Circle007.geometry}
							material={materials.sombreroIsla4Tex}
						/>
						<mesh
							name="Circle007_1"
							geometry={nodes.Circle007_1.geometry}
							material={materials.cintasIsla4}
						/>
						<mesh
							name="Circle007_2"
							geometry={nodes.Circle007_2.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<mesh
						name="Sphere"
						geometry={nodes.Sphere.geometry}
						material={materials.fondo}
					/>
					<group name="weed1f">
						<mesh
							name="Plane025"
							geometry={nodes.Plane025.geometry}
							material={materials.weeds}
						/>
						<mesh
							name="Plane025_1"
							geometry={nodes.Plane025_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
					<group name="weed1f001">
						<mesh
							name="Plane027"
							geometry={nodes.Plane027.geometry}
							material={materials.weeds}
						/>
						<mesh
							name="Plane027_1"
							geometry={nodes.Plane027_1.geometry}
							material={materials["outline.001"]}
						/>
					</group>
				</group>
			</group>
			{orbitEnabled && (
				<OrbitControls
					enableZoom={false} // Deshabilita el zoom
					enablePan={false} // Deshabilita el pan
					// maxPolarAngle={Math.PI / 2} // Limita el ángulo máximo a 90 grados
					// minPolarAngle={Math.PI / 2} // Limita el ángulo mínimo a 90 grados
				/>
			)}
		</>
	);
}

useGLTF.preload("/assets/models/Scene/escenaDePrueba2.gltf");
