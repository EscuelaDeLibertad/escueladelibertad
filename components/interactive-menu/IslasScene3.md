import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useAuth } from "@clerk/nextjs";
import { useEmissive } from "./EmissiveContext";
import { useFrame } from "@react-three/fiber";

export function IslasScene3(props) {
  const [haCompradoCurso1, setHaCompradoCurso1] = useState(false);
  const [haCompradoCurso2, setHaCompradoCurso2] = useState(false);
  const [haCompradoCurso3, setHaCompradoCurso3] = useState(false);
  const [haCompradoCurso4, setHaCompradoCurso4] = useState(false);
  const { userId } = useAuth();

  const group = useRef();
  const isla1Ref = useRef();
  const isla2Ref = useRef();
  const isla3Ref = useRef();
  const isla4Ref = useRef();

  const planetaFinalIsla1Ref = useRef();
  const planetaFinalIsla2Ref = useRef();
  const planetaFinalIsla3Ref = useRef();
  const planetaFinalIsla4Ref = useRef();

  const { emissiveIntensity, activeIsland } = useEmissive();

  const { nodes, materials, animations } = useGLTF(
    "/assets/models/dracoConstellation/GLTF/dracoConstellation.gltf"
  );
  const { actions } = useAnimations(animations, group);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect = (() => {}, []);

  useEffect(() => {
    const verifyPurchases = async () => {
      if (!userId) return;

      const courseIds = [
        "881228e9-889b-4633-bdcb-95980ad46fc3",
        "24885a44-42c3-4b0f-9d77-32db0ca81b55",
        "1f984877-8128-4156-b0b5-be8a3dde7221",
        "2a88e27f-0168-453c-9497-f5f6b746b7a3",
      ];

      try {
        const response = await fetch("/api/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, courseIds }),
        });

        if (!response.ok) {
          throw new Error("Error al verificar las compras");
        }

        const data = await response.json();
        setHaCompradoCurso1(data[courseIds[0]]);
        setHaCompradoCurso2(data[courseIds[1]]);
        setHaCompradoCurso3(data[courseIds[2]]);
        setHaCompradoCurso4(data[courseIds[3]]);

        // console.log("Estado de compras:", data);
      } catch (error) {
        console.error("Error al verificar las compras:", error);
      }
    };

    verifyPurchases();
  }, [userId]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  //   useFrame(() => {
  //     if (
  //       isla1Ref.current ||
  //       isla2Ref.current ||
  //       isla3Ref.current ||
  //       isla4Ref.current
  //     ) {
  //       // Sensibilidad de la rotación
  //       const rotationSpeed = 3.5;

  //       isla1Ref.current.rotation.y = mousePosition.x * rotationSpeed;
  //       isla2Ref.current.rotation.y = mousePosition.x * rotationSpeed;
  //       isla3Ref.current.rotation.y = mousePosition.x * rotationSpeed;
  //       isla4Ref.current.rotation.y = mousePosition.x * rotationSpeed;
  //     }

  //     if (planetaFinalIsla1Ref.current) {
  //       planetaFinalIsla1Ref.current.rotation.y += 0.0007;
  //       planetaFinalIsla2Ref.current.rotation.y += 0.0007;
  //       planetaFinalIsla3Ref.current.rotation.y += 0.0007;
  //       planetaFinalIsla4Ref.current.rotation.y += 0.0007;
  //     }
  //   });

  return (
    <group ref={group} {...props} dispose={null} scale={0.2}>
      <group name="Scene">
        <group name="baseIsla1" position={[285.202, 293.193, 0]}>
          <mesh
            name="baseIsla1_1"
            geometry={nodes.baseIsla1_1.geometry}
            material={materials.baseIsla1Mat}
          />
          <mesh
            name="baseIsla1_2"
            geometry={nodes.baseIsla1_2.geometry}
            material={materials.waterIsla1Mat}
          />
          <mesh
            name="baseIsla1_3"
            geometry={nodes.baseIsla1_3.geometry}
            material={materials.koiTexIsla1}
          />
          <mesh
            name="baseIsla1_4"
            geometry={nodes.baseIsla1_4.geometry}
            material={materials.outlineIsla1Mat}
          />
        </group>
        <mesh
          name="planetaIsla1"
          geometry={nodes.planetaIsla1.geometry}
          material={materials.planetaTexIsla1}
          position={[285.202, 293.193, 0]}
          scale={0.743}
        />
        <group name="plantasIsla1" position={[285.202, 293.193, 0]}>
          <mesh
            name="plantasIsla1_1"
            geometry={nodes.plantasIsla1_1.geometry}
            material={materials.foliageIsla1Mat}
          />
          <mesh
            name="plantasIsla1_2"
            geometry={nodes.plantasIsla1_2.geometry}
            material={materials.baseIsla1Mat}
          />
        </group>
        <group name="water2Isla1" position={[285.202, 293.193, 0]}>
          <mesh
            name="water2Isla1_1"
            geometry={nodes.water2Isla1_1.geometry}
            material={materials.waterIsla1Mat}
          />
          <mesh
            name="water2Isla1_2"
            geometry={nodes.water2Isla1_2.geometry}
            material={materials.outline2Isla1Mat}
          />
        </group>
        <group name="water3Isla1" position={[285.202, 293.193, 0]}>
          <mesh
            name="water3Isla1_1"
            geometry={nodes.water3Isla1_1.geometry}
            material={materials.waterIsla1Mat}
          />
          <mesh
            name="water3Isla1_2"
            geometry={nodes.water3Isla1_2.geometry}
            material={materials.outline2Isla1Mat}
          />
        </group>
        <group name="waterIsla1" position={[285.202, 293.193, 0]}>
          <mesh
            name="waterIsla"
            geometry={nodes.waterIsla.geometry}
            material={materials.waterIsla1Mat}
          />
          <mesh
            name="waterIsla_1"
            geometry={nodes.waterIsla_1.geometry}
            material={materials.outline2Isla1Mat}
          />
        </group>
        <mesh
          name="accesoriosIsla2"
          geometry={nodes.accesoriosIsla2.geometry}
          material={materials.characterIsla2}
          position={[242.574, 200.2, 0.001]}
        />
        <group name="bambooIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="bambooIsla2_1"
            geometry={nodes.bambooIsla2_1.geometry}
            material={materials.foliageIsla2Mat}
          />
          <mesh
            name="bambooIsla2_2"
            geometry={nodes.bambooIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <group name="baseIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="baseIsla2_1"
            geometry={nodes.baseIsla2_1.geometry}
            material={materials.baseIsla2}
          />
          <mesh
            name="baseIsla2_2"
            geometry={nodes.baseIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <group name="clothesIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="clothesIsla2_1"
            geometry={nodes.clothesIsla2_1.geometry}
            material={materials.characterIsla2}
          />
          <mesh
            name="clothesIsla2_2"
            geometry={nodes.clothesIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <mesh
          name="foliageIsla2"
          geometry={nodes.foliageIsla2.geometry}
          material={materials.foliageIsla2Mat}
          position={[242.574, 200.2, 0]}
        />
        <group name="hairIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="hairIsla2_1"
            geometry={nodes.hairIsla2_1.geometry}
            material={materials.characterIsla2}
          />
          <mesh
            name="hairIsla2_2"
            geometry={nodes.hairIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <mesh
          name="humoIsla2"
          geometry={nodes.humoIsla2.geometry}
          material={materials.foliageIsla2Mat}
          position={[242.574, 200.2, 0]}
        />
        <group name="maderaIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="maderaIsla2_1"
            geometry={nodes.maderaIsla2_1.geometry}
            material={materials.baseIsla2}
          />
          <mesh
            name="maderaIsla2_2"
            geometry={nodes.maderaIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <group name="paredIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="paredIsla2_1"
            geometry={nodes.paredIsla2_1.geometry}
            material={materials.baseIsla2}
          />
          <mesh
            name="paredIsla2_2"
            geometry={nodes.paredIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <mesh
          name="planetIsla2"
          geometry={nodes.planetIsla2.geometry}
          material={materials.planetIsla2Mat}
          position={[242.574, 200.2, 0]}
        />
        <group name="rocksIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="rocksIsla2_1"
            geometry={nodes.rocksIsla2_1.geometry}
            material={materials.baseIsla2}
          />
          <mesh
            name="rocksIsla2_2"
            geometry={nodes.rocksIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <group name="teaIsla2" position={[242.574, 200.2, 0]}>
          <mesh
            name="teaIsla2_1"
            geometry={nodes.teaIsla2_1.geometry}
            material={materials.foliageIsla2Mat}
          />
          <mesh
            name="teaIsla2_2"
            geometry={nodes.teaIsla2_2.geometry}
            material={materials.outlineIsla2Mat}
          />
        </group>
        <mesh
          name="accesoriosIsla3"
          geometry={nodes.accesoriosIsla3.geometry}
          material={materials.characterIsla3Mat}
          position={[148.202, 96.449, 0]}
        />
        <group name="clothesIsla3" position={[148.202, 96.449, 0]}>
          <mesh
            name="clothesIsla3_1"
            geometry={nodes.clothesIsla3_1.geometry}
            material={materials.clothesIsla3}
          />
          <mesh
            name="clothesIsla3_2"
            geometry={nodes.clothesIsla3_2.geometry}
            material={materials.outlineIsla3Mat}
          />
        </group>
        <group name="cuerpoIsla3" position={[148.202, 96.449, 0]}>
          <mesh
            name="cuerpoIsla3_1"
            geometry={nodes.cuerpoIsla3_1.geometry}
            material={materials.characterIsla3Mat}
          />
          <mesh
            name="cuerpoIsla3_2"
            geometry={nodes.cuerpoIsla3_2.geometry}
            material={materials.outlineIsla3Mat}
          />
        </group>
        <group name="grassIsla3" position={[148.202, 96.449, 0]}>
          <mesh
            name="grassIsla3_1"
            geometry={nodes.grassIsla3_1.geometry}
            material={materials.grassIsla3Mat}
          />
          <mesh
            name="grassIsla3_2"
            geometry={nodes.grassIsla3_2.geometry}
            material={materials.treeIsla3Mat}
          />
          <mesh
            name="grassIsla3_3"
            geometry={nodes.grassIsla3_3.geometry}
            material={materials.rocksIsla3Mat}
          />
          <mesh
            name="grassIsla3_4"
            geometry={nodes.grassIsla3_4.geometry}
            material={materials.pedestalIsla3Mat}
          />
          <mesh
            name="grassIsla3_5"
            geometry={nodes.grassIsla3_5.geometry}
            material={materials.outlineIsla3Mat}
          />
        </group>
        <group name="leavesIsla3" position={[148.202, 96.449, 0]}>
          <mesh
            name="leavesIsla3_1"
            geometry={nodes.leavesIsla3_1.geometry}
            material={materials.hojasIsla3Mat}
          />
          <mesh
            name="leavesIsla3_2"
            geometry={nodes.leavesIsla3_2.geometry}
            material={materials.grassIsla3Mat}
          />
        </group>
        <mesh
          name="lightsIsla3"
          geometry={nodes.lightsIsla3.geometry}
          material={materials.lightIsla3Mat}
          position={[148.202, 96.449, 0]}
        />
        <mesh
          name="planetaIsla3"
          geometry={nodes.planetaIsla3.geometry}
          material={materials.planetIsla3}
          position={[148.202, 96.449, 0]}
        />
        <mesh
          name="waterIsla3"
          geometry={nodes.waterIsla3.geometry}
          material={materials.waterIsla3Mat}
          position={[148.202, 96.449, 0]}
        />
        <group name="accesoriosIsla4" position={[96.194, 72.679, 0]}>
          <mesh
            name="accesoriosIsla4_1"
            geometry={nodes.accesoriosIsla4_1.geometry}
            material={materials.characterIsla3Mat}
          />
          <mesh
            name="accesoriosIsla4_2"
            geometry={nodes.accesoriosIsla4_2.geometry}
            material={materials.outlineIsla4Mat}
          />
        </group>
        <group name="clothesIsla4" position={[96.194, 72.679, 0]}>
          <mesh
            name="clothesIsla4_1"
            geometry={nodes.clothesIsla4_1.geometry}
            material={materials.clothesIsla4Mat}
          />
          <mesh
            name="clothesIsla4_2"
            geometry={nodes.clothesIsla4_2.geometry}
            material={materials.cintasIsla4Mat}
          />
          <mesh
            name="clothesIsla4_3"
            geometry={nodes.clothesIsla4_3.geometry}
            material={materials.outlineIsla4Mat}
          />
        </group>
        <group name="fishIsla4" position={[96.194, 72.679, 0]}>
          <mesh
            name="fishIsla4_1"
            geometry={nodes.fishIsla4_1.geometry}
            material={materials.fishIsla4Mat}
          />
          <mesh
            name="fishIsla4_2"
            geometry={nodes.fishIsla4_2.geometry}
            material={materials.outlineIsla4Mat}
          />
        </group>
        <group name="foliageIsla4" position={[96.194, 72.679, 0]}>
          <mesh
            name="foliageIsla4_1"
            geometry={nodes.foliageIsla4_1.geometry}
            material={materials.foliageIsla4Mat}
          />
          <mesh
            name="foliageIsla4_2"
            geometry={nodes.foliageIsla4_2.geometry}
            material={materials.outlineIsla4Mat}
          />
        </group>
        <group name="hairIsla3" position={[148.202, 96.449, 0]}>
          <mesh
            name="hairIsla3_1"
            geometry={nodes.hairIsla3_1.geometry}
            material={materials.characterIsla3Mat}
          />
          <mesh
            name="hairIsla3_2"
            geometry={nodes.hairIsla3_2.geometry}
            material={materials.outline}
          />
        </group>
        <mesh
          name="lightIsla4"
          geometry={nodes.lightIsla4.geometry}
          material={materials.lightIsla3Mat}
          position={[96.194, 72.679, 0]}
        />
        <mesh
          name="planetaIsla4"
          geometry={nodes.planetaIsla4.geometry}
          material={materials.planetaIsla4Mat}
          position={[96.194, 72.679, 0]}
        />
        <group name="terrainIsla4" position={[96.194, 72.679, 0]}>
          <mesh
            name="terrainIsla4_1"
            geometry={nodes.terrainIsla4_1.geometry}
            material={materials.terrainIsla4Mat}
          />
          <mesh
            name="terrainIsla4_2"
            geometry={nodes.terrainIsla4_2.geometry}
            material={materials.outlineIsla4Mat}
          />
        </group>
        <group name="waterIsla4" position={[96.194, 72.679, 0]}>
          <mesh
            name="waterIsla4_1"
            geometry={nodes.waterIsla4_1.geometry}
            material={materials.waterIsla4Mat}
          />
          <mesh
            name="waterIsla4_2"
            geometry={nodes.waterIsla4_2.geometry}
            material={materials.outlineIsla4Mat}
          />
        </group>
        <group name="clothesIsla5" position={[41.609, 142.694, 0]}>
          <mesh
            name="clothesIsla5_1"
            geometry={nodes.clothesIsla5_1.geometry}
            material={materials.clothesIsla5Mat}
          />
          <mesh
            name="clothesIsla5_2"
            geometry={nodes.clothesIsla5_2.geometry}
            material={materials.outlineIsla5Mat}
          />
        </group>
        <group name="crystalIsla5" position={[41.609, 142.694, 0]}>
          <mesh
            name="Circle002"
            geometry={nodes.Circle002.geometry}
            material={materials.terrain1Isla5MAt}
          />
          <mesh
            name="Circle002_1"
            geometry={nodes.Circle002_1.geometry}
            material={materials.crystalIsla5Mat}
          />
          <mesh
            name="Circle002_2"
            geometry={nodes.Circle002_2.geometry}
            material={materials.outlinewhiteIsla5Mat}
          />
          <mesh
            name="Circle002_3"
            geometry={nodes.Circle002_3.geometry}
            material={materials.outlineIsla5Mat}
          />
        </group>
        <mesh
          name="crystalLightIsla5"
          geometry={nodes.crystalLightIsla5.geometry}
          material={materials.lightIsla3Mat}
          position={[41.609, 142.694, 0]}
        />
        <mesh
          name="foliageIsla5"
          geometry={nodes.foliageIsla5.geometry}
          material={materials.foliageIsla2Mat}
          position={[41.609, 142.694, 0]}
        />
        <mesh
          name="hojasIsla5"
          geometry={nodes.hojasIsla5.geometry}
          material={materials.hojasIsla3Mat}
          position={[41.609, 142.694, 0]}
        />
        <mesh
          name="planetaIsla5"
          geometry={nodes.planetaIsla5.geometry}
          material={materials.planetaIsla5Mat}
          position={[41.609, 142.694, 0]}
          scale={1.166}
        />
        <group name="terrainIsla5" position={[41.609, 142.694, 0]}>
          <mesh
            name="terrainIsla5_1"
            geometry={nodes.terrainIsla5_1.geometry}
            material={materials.terrain1Isla5MAt}
          />
          <mesh
            name="terrainIsla5_2"
            geometry={nodes.terrainIsla5_2.geometry}
            material={materials.terrain2Isla5Mat}
          />
          <mesh
            name="terrainIsla5_3"
            geometry={nodes.terrainIsla5_3.geometry}
            material={materials.outlineIsla5Mat}
          />
        </group>
        <group name="treeIsla5" position={[41.609, 142.694, 0]}>
          <mesh
            name="treeIsla5_1"
            geometry={nodes.treeIsla5_1.geometry}
            material={materials.treeIsla3Mat}
          />
          <mesh
            name="treeIsla5_2"
            geometry={nodes.treeIsla5_2.geometry}
            material={materials.outlineIsla5Mat}
          />
        </group>
        <group name="boxIsla6" position={[-44.284, 267.817, 0.175]}>
          <mesh
            name="boxIsla6_1"
            geometry={nodes.boxIsla6_1.geometry}
            material={materials.box1Isla6Mat}
          />
          <mesh
            name="boxIsla6_2"
            geometry={nodes.boxIsla6_2.geometry}
            material={materials.goldIsla6Mat}
          />
          <mesh
            name="boxIsla6_3"
            geometry={nodes.boxIsla6_3.geometry}
            material={materials.box2Isla6Mat}
          />
          <mesh
            name="boxIsla6_4"
            geometry={nodes.boxIsla6_4.geometry}
            material={materials.outlineIsla6Mat}
          />
        </group>
        <group name="paisajesIsla6" position={[-44.257, 268.297, -0.039]}>
          <mesh
            name="paisajesIsla6_1"
            geometry={nodes.paisajesIsla6_1.geometry}
            material={materials.paisaje1Isla6Mat}
          />
          <mesh
            name="paisajesIsla6_2"
            geometry={nodes.paisajesIsla6_2.geometry}
            material={materials.paisaje2Isla6Mat}
          />
          <mesh
            name="paisajesIsla6_3"
            geometry={nodes.paisajesIsla6_3.geometry}
            material={materials.Paisaje3Isla6Mat}
          />
          <mesh
            name="paisajesIsla6_4"
            geometry={nodes.paisajesIsla6_4.geometry}
            material={materials.Paisaje4Isla6Mat}
          />
          <mesh
            name="paisajesIsla6_5"
            geometry={nodes.paisajesIsla6_5.geometry}
            material={materials.Paisaje5Isla6Mat}
          />
          <mesh
            name="paisajesIsla6_6"
            geometry={nodes.paisajesIsla6_6.geometry}
            material={materials["terrain2Isla5Mat.001"]}
          />
          <mesh
            name="paisajesIsla6_7"
            geometry={nodes.paisajesIsla6_7.geometry}
            material={materials.goldIsla6Mat}
          />
          <mesh
            name="paisajesIsla6_8"
            geometry={nodes.paisajesIsla6_8.geometry}
            material={materials.outlineIsla6Mat}
          />
          <mesh
            name="accesoriesIsla6"
            geometry={nodes.accesoriesIsla6.geometry}
            material={materials.characterIsla4Mat}
          />
          <group name="charactersIsla6">
            <mesh
              name="charactersIsla6_1"
              geometry={nodes.charactersIsla6_1.geometry}
              material={materials.characterIsla3Mat}
            />
            <mesh
              name="charactersIsla6_2"
              geometry={nodes.charactersIsla6_2.geometry}
              material={materials.clothes1Isla6Mat}
            />
            <mesh
              name="charactersIsla6_3"
              geometry={nodes.charactersIsla6_3.geometry}
              material={materials.clothes2Isla6Mat}
            />
            <mesh
              name="charactersIsla6_4"
              geometry={nodes.charactersIsla6_4.geometry}
              material={materials.Paisaje4Isla6Mat}
            />
            <mesh
              name="charactersIsla6_5"
              geometry={nodes.charactersIsla6_5.geometry}
              material={materials.Paisaje3Isla6Mat}
            />
            <mesh
              name="charactersIsla6_6"
              geometry={nodes.charactersIsla6_6.geometry}
              material={materials.dogmat}
            />
            <mesh
              name="charactersIsla6_7"
              geometry={nodes.charactersIsla6_7.geometry}
              material={materials.outlineIsla6Mat}
            />
          </group>
        </group>
        <mesh
          name="planetIsla6"
          geometry={nodes.planetIsla6.geometry}
          material={materials.planetIsla6Mat}
          position={[-44.281, 267.21, 0]}
        />
        <group name="acceoriesIsla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Circle024"
            geometry={nodes.Circle024.geometry}
            material={materials["accesorios1Isla7Mat.001"]}
          />
          <mesh
            name="Circle024_1"
            geometry={nodes.Circle024_1.geometry}
            material={materials.outlineIsla7Mat}
          />
        </group>
        <group name="baseIsla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Circle001"
            geometry={nodes.Circle001.geometry}
            material={materials.accesorios2Isla7Mat}
          />
          <mesh
            name="Circle001_1"
            geometry={nodes.Circle001_1.geometry}
            material={materials.tejaIsla7Mat}
          />
          <mesh
            name="Circle001_2"
            geometry={nodes.Circle001_2.geometry}
            material={materials["accesorios1Isla7Mat.001"]}
          />
          <mesh
            name="Circle001_3"
            geometry={nodes.Circle001_3.geometry}
            material={materials.outlineIsla7Mat}
          />
        </group>
        <group name="casaIsla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Plane046"
            geometry={nodes.Plane046.geometry}
            material={materials["terrain2Isla5Mat.003"]}
          />
          <mesh
            name="Plane046_1"
            geometry={nodes.Plane046_1.geometry}
            material={materials["accesorios1Isla7Mat.001"]}
          />
          <mesh
            name="Plane046_2"
            geometry={nodes.Plane046_2.geometry}
            material={materials.accesorios2Isla7Mat}
          />
          <mesh
            name="Plane046_3"
            geometry={nodes.Plane046_3.geometry}
            material={materials.outlineIsla7Mat}
          />
        </group>
        <group name="characterIsla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Circle004"
            geometry={nodes.Circle004.geometry}
            material={materials["clothes2Isla6Mat.001"]}
          />
          <mesh
            name="Circle004_1"
            geometry={nodes.Circle004_1.geometry}
            material={materials["characterIsla3Mat.001"]}
          />
          <mesh
            name="Circle004_2"
            geometry={nodes.Circle004_2.geometry}
            material={materials.outlineIsla7Mat}
          />
        </group>
        <group name="foliagesla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Plane009"
            geometry={nodes.Plane009.geometry}
            material={materials["hojasIsla3Mat.001"]}
          />
          <mesh
            name="Plane009_1"
            geometry={nodes.Plane009_1.geometry}
            material={materials["foliageIsla2Mat.001"]}
          />
        </group>
        <mesh
          name="planetIsla7"
          geometry={nodes.planetIsla7.geometry}
          material={materials.planetIsla7Mat}
          position={[-90.474, 306.199, 0]}
        />
        <group name="troncosIsla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Plane005"
            geometry={nodes.Plane005.geometry}
            material={materials["treeIsla3Mat.001"]}
          />
          <mesh
            name="Plane005_1"
            geometry={nodes.Plane005_1.geometry}
            material={materials.outlineIsla7Mat}
          />
        </group>
        <group name="ventanaIsla7" position={[-90.474, 306.199, 0]}>
          <mesh
            name="Circle016"
            geometry={nodes.Circle016.geometry}
            material={materials["terrain2Isla5Mat.003"]}
          />
          <mesh
            name="Circle016_1"
            geometry={nodes.Circle016_1.geometry}
            material={materials["accesorios1Isla7Mat.001"]}
          />
        </group>
        <group name="ballIsla8" position={[-140.538, 264.388, 0]}>
          <mesh
            name="ballIsla8_1"
            geometry={nodes.ballIsla8_1.geometry}
            material={materials.outlineIsla8Mat}
          />
          <mesh
            name="ballIsla8_2"
            geometry={nodes.ballIsla8_2.geometry}
            material={materials.outline2Isla8Mat}
          />
        </group>
        <mesh
          name="dust1Isla8"
          geometry={nodes.dust1Isla8.geometry}
          material={materials.dustIsla8Mat}
          position={[-140.538, 264.388, 0]}
        />
        <mesh
          name="dust2Isla8"
          geometry={nodes.dust2Isla8.geometry}
          material={materials.dustIsla8Mat}
          position={[-140.538, 264.388, 0]}
        />
        <mesh
          name="planetaIsla8"
          geometry={nodes.planetaIsla8.geometry}
          material={materials.planetaIsla8Mat}
          position={[-140.538, 264.388, 0]}
        />
        <group name="soulIsla8" position={[-140.538, 264.388, 0]}>
          <mesh
            name="soulIsla8_1"
            geometry={nodes.soulIsla8_1.geometry}
            material={materials.planetaIsla8Mat}
          />
          <mesh
            name="soulIsla8_2"
            geometry={nodes.soulIsla8_2.geometry}
            material={materials.outline2Isla8Mat}
          />
        </group>
        <mesh
          name="sphere1Isla8"
          geometry={nodes.sphere1Isla8.geometry}
          material={materials.outline2Isla8Mat}
          position={[-140.538, 264.388, 0]}
        />
        <mesh
          name="sphere2Isla8"
          geometry={nodes.sphere2Isla8.geometry}
          material={materials.terrain2Isla8Mat}
          position={[-140.538, 264.388, 0]}
        />
        <group name="terrainIsla8" position={[-140.538, 264.388, 0]}>
          <mesh
            name="terrainIsla8_1"
            geometry={nodes.terrainIsla8_1.geometry}
            material={materials.terrain1Isla8Mat}
          />
          <mesh
            name="terrainIsla8_2"
            geometry={nodes.terrainIsla8_2.geometry}
            material={materials["terrain2Isla5Mat.002"]}
          />
          <mesh
            name="terrainIsla8_3"
            geometry={nodes.terrainIsla8_3.geometry}
            material={materials.accesorios1Isla7Mat}
          />
          <mesh
            name="terrainIsla8_4"
            geometry={nodes.terrainIsla8_4.geometry}
            material={materials.lightIsla8Mat}
          />
          <mesh
            name="terrainIsla8_5"
            geometry={nodes.terrainIsla8_5.geometry}
            material={materials.terrain2Isla8Mat}
          />
          <mesh
            name="terrainIsla8_6"
            geometry={nodes.terrainIsla8_6.geometry}
            material={materials.characterIsla8Mat}
          />
          <mesh
            name="terrainIsla8_7"
            geometry={nodes.terrainIsla8_7.geometry}
            material={materials.outlineIsla8Mat}
          />
        </group>
        <group name="baseIsla9" position={[-220.822, 106.619, 0]}>
          <mesh
            name="baseIsla9_1"
            geometry={nodes.baseIsla9_1.geometry}
            material={materials.baseIsla9Mat}
          />
          <mesh
            name="baseIsla9_2"
            geometry={nodes.baseIsla9_2.geometry}
            material={materials.outline3Isla9Mat}
          />
        </group>
        <group name="dragon1Isla9" position={[-220.822, 106.619, 0]}>
          <mesh
            name="dragon1Isla9_1"
            geometry={nodes.dragon1Isla9_1.geometry}
            material={materials.dragon1Isla9MAt}
          />
          <mesh
            name="dragon1Isla9_2"
            geometry={nodes.dragon1Isla9_2.geometry}
            material={materials.outlineIsla9Mat}
          />
        </group>
        <group name="dragon2Isla9" position={[-220.822, 106.619, 0]}>
          <mesh
            name="dragon2Isla9_1"
            geometry={nodes.dragon2Isla9_1.geometry}
            material={materials["dragon2Isla9Mat.001"]}
          />
          <mesh
            name="dragon2Isla9_2"
            geometry={nodes.dragon2Isla9_2.geometry}
            material={materials.outlineIsla9Mat}
          />
        </group>
        <group name="nube1Isla9" position={[-220.822, 106.619, 0]}>
          <mesh
            name="nube7"
            geometry={nodes.nube7.geometry}
            material={materials.dragon2Isla9Mat}
          />
          <mesh
            name="nube7_1"
            geometry={nodes.nube7_1.geometry}
            material={materials.outline2Isla9Mat}
          />
        </group>
        <mesh
          name="nube2Isla9"
          geometry={nodes.nube2Isla9.geometry}
          material={materials.starsIsla9Mat}
          position={[-220.822, 106.619, 0]}
        />
        <mesh
          name="planetaIsla9"
          geometry={nodes.planetaIsla9.geometry}
          material={materials.planetaIsla9Mat}
          position={[-220.822, 106.619, 0]}
        />
        <group name="charactersIsla10" position={[-193.689, 74.095, 0]}>
          <mesh
            name="Face_(merged)(Clone)baked051"
            geometry={nodes["Face_(merged)(Clone)baked051"].geometry}
            material={materials.character1Isla10Mat}
          />
          <mesh
            name="Face_(merged)(Clone)baked051_1"
            geometry={nodes["Face_(merged)(Clone)baked051_1"].geometry}
            material={materials.outline1Isla10Mat}
          />
          <mesh
            name="Face_(merged)(Clone)baked051_2"
            geometry={nodes["Face_(merged)(Clone)baked051_2"].geometry}
            material={materials.character2Isla10Mat}
          />
          <mesh
            name="Face_(merged)(Clone)baked051_3"
            geometry={nodes["Face_(merged)(Clone)baked051_3"].geometry}
            material={materials.outline2Isla10Mat}
          />
        </group>
        <mesh
          name="hojas2sla10"
          geometry={nodes.hojas2sla10.geometry}
          material={materials.hojasIsla10Mat}
          position={[-193.689, 74.095, 0]}
        />
        <group name="hojasIsla10" position={[-193.689, 74.095, 0]}>
          <mesh
            name="Plane040"
            geometry={nodes.Plane040.geometry}
            material={materials.hojasIsla10Mat}
          />
          <mesh
            name="Plane040_1"
            geometry={nodes.Plane040_1.geometry}
            material={materials.outlineIsla10Mat}
          />
        </group>
        <mesh
          name="lightIsla10"
          geometry={nodes.lightIsla10.geometry}
          material={materials.lightIsla10Mat}
          position={[-193.689, 74.095, 0]}
        />
        <mesh
          name="planetaIsla10"
          geometry={nodes.planetaIsla10.geometry}
          material={materials.planetaIsla10Mat}
          position={[-193.689, 74.095, 0]}
        />
        <mesh
          name="starsIsla10"
          geometry={nodes.starsIsla10.geometry}
          material={materials.starsIsla10Mat}
          position={[-193.689, 74.095, 0]}
        />
        <group name="terrainIsla10" position={[-193.689, 74.095, 0]}>
          <mesh
            name="Plane001"
            geometry={nodes.Plane001.geometry}
            material={materials.terrainIsla10Mat}
          />
          <mesh
            name="Plane001_1"
            geometry={nodes.Plane001_1.geometry}
            material={materials.outlineIsla10Mat}
          />
        </group>
        <group name="treeIsla10" position={[-193.689, 74.095, 0]}>
          <mesh
            name="Plane011"
            geometry={nodes.Plane011.geometry}
            material={materials.treeIsla10Mat}
          />
          <mesh
            name="Plane011_1"
            geometry={nodes.Plane011_1.geometry}
            material={materials.outlineIsla10Mat}
          />
        </group>
        <group name="baseIsla11" position={[-246.557, 50.625, 0]}>
          <mesh
            name="baseIsla11_1"
            geometry={nodes.baseIsla11_1.geometry}
            material={materials.baseIsla11Mat}
          />
          <mesh
            name="baseIsla11_2"
            geometry={nodes.baseIsla11_2.geometry}
            material={materials.outlineIsla11Mat}
          />
        </group>
        <mesh
          name="characterIsla11"
          geometry={nodes.characterIsla11.geometry}
          material={materials["characterIsla3Mat.003"]}
          position={[-246.557, 50.625, 0]}
        />
        <group name="floor1Isla11" position={[-246.557, 50.729, 0]}>
          <mesh
            name="floor1Isla11_1"
            geometry={nodes.floor1Isla11_1.geometry}
            material={materials.terrainIsla11Mat}
          />
          <mesh
            name="floor1Isla11_2"
            geometry={nodes.floor1Isla11_2.geometry}
            material={materials.outlineIsla11Mat}
          />
        </group>
        <group name="floor2Isla11" position={[-246.557, 50.625, 0]}>
          <mesh
            name="floor2Isla11_1"
            geometry={nodes.floor2Isla11_1.geometry}
            material={materials.terrainIsla11Mat}
          />
          <mesh
            name="floor2Isla11_2"
            geometry={nodes.floor2Isla11_2.geometry}
            material={materials.outlineIsla11Mat}
          />
        </group>
        <mesh
          name="foliageIsla11"
          geometry={nodes.foliageIsla11.geometry}
          material={materials["foliageIsla1Mat.002"]}
          position={[-246.557, 50.625, 0]}
        />
        <mesh
          name="hojasIsla11"
          geometry={nodes.hojasIsla11.geometry}
          material={materials.hojasIsla11Mat}
          position={[-246.557, 50.625, 0]}
        />
        <group name="piedrasIsla11" position={[-246.557, 50.625, 0]}>
          <mesh
            name="piedrasIsla11_1"
            geometry={nodes.piedrasIsla11_1.geometry}
            material={materials.terrainIsla11Mat}
          />
          <mesh
            name="piedrasIsla11_2"
            geometry={nodes.piedrasIsla11_2.geometry}
            material={materials.outlineIsla11Mat}
          />
        </group>
        <mesh
          name="planetaIsla11"
          geometry={nodes.planetaIsla11.geometry}
          material={materials.planetIsla11Mat}
          position={[-246.557, 50.625, 0]}
        />
        <mesh
          name="portal1Isla11"
          geometry={nodes.portal1Isla11.geometry}
          material={materials.portal1Isla11Mat}
          position={[-246.549, 51.669, -0.329]}
        />
        <mesh
          name="portal2Isla11"
          geometry={nodes.portal2Isla11.geometry}
          material={materials.portal2Isla11Mat}
          position={[-246.636, 51.746, 0.841]}
          scale={1.17}
        />
        <group name="characterIsla12" position={[-216.036, 30.365, 0]}>
          <mesh
            name="characterIsla12_1"
            geometry={nodes.characterIsla12_1.geometry}
            material={materials["terrainIsla11Mat.001"]}
          />
          <mesh
            name="characterIsla12_2"
            geometry={nodes.characterIsla12_2.geometry}
            material={materials["characterIsla3Mat.004"]}
          />
          <mesh
            name="characterIsla12_3"
            geometry={nodes.characterIsla12_3.geometry}
            material={materials.outlineIsla12Mat}
          />
        </group>
        <mesh
          name="dragonIsla12"
          geometry={nodes.dragonIsla12.geometry}
          material={materials.dragonLightIsla12Mat}
          position={[-216.036, 30.365, 0]}
        />
        <group name="floorIsla12" position={[-216.036, 30.365, 0]}>
          <mesh
            name="floorIsla12_1"
            geometry={nodes.floorIsla12_1.geometry}
            material={materials.floorIsla12Mat}
          />
          <mesh
            name="floorIsla12_2"
            geometry={nodes.floorIsla12_2.geometry}
            material={materials["terrainIsla11Mat.001"]}
          />
          <mesh
            name="floorIsla12_3"
            geometry={nodes.floorIsla12_3.geometry}
            material={materials.rockIsla12Mat}
          />
          <mesh
            name="floorIsla12_4"
            geometry={nodes.floorIsla12_4.geometry}
            material={materials.treeIsla12Mat}
          />
          <mesh
            name="floorIsla12_5"
            geometry={nodes.floorIsla12_5.geometry}
            material={materials.outlineIsla12Mat}
          />
        </group>
        <mesh
          name="hojasIsla12"
          geometry={nodes.hojasIsla12.geometry}
          material={materials.treeIsla12Mat}
          position={[-216.036, 30.365, 0]}
        />
        <mesh
          name="planetaIsla12"
          geometry={nodes.planetaIsla12.geometry}
          material={materials.planetIsla12Mat}
          position={[-216.036, 30.365, 0]}
        />
        <mesh
          name="portal1Isla12"
          geometry={nodes.portal1Isla12.geometry}
          material={materials.portalIsla12Mat}
          position={[-215.883, 31.332, -0.951]}
          rotation={[0, 0.441, -0.001]}
        />
        <mesh
          name="portal2Isla12"
          geometry={nodes.portal2Isla12.geometry}
          material={materials.fogIsla12Mat}
          position={[-215.891, 31.328, -0.969]}
          rotation={[0, 0.453, 0.017]}
        />
        <mesh
          name="portal3Isla12"
          geometry={nodes.portal3Isla12.geometry}
          material={materials.fogIsla12Mat}
          position={[-215.899, 31.39, -0.928]}
          rotation={[0, 0.471, 0]}
        />
        <mesh
          name="stairsIsla12"
          geometry={nodes.stairsIsla12.geometry}
          material={materials.stairsIsla12Mat}
          position={[-216.036, 30.365, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  "/assets/models/dracoConstellation/GLTF/dracoConstellation.gltf"
);
