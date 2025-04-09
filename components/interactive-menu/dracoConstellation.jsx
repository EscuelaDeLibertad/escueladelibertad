import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import PlanetMaterialPorCurso from "./planetMaterialPorCurso";
import MeshMaterialPorCurso from "./meshMaterialPorCurso";
import OutlineMaterialPorCurso from "./outlineMaterialPorCurso";

export function DracoConstellation(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/gltf/gltf/dracoConstellation.gltf"
  );
  const { actions } = useAnimations(animations, group);

  const colorIsla = "rgba(146, 180, 174, 20%)";

  const [haCompradoCurso1, setHaCompradoCurso1] = useState(false);
  const [haCompradoCurso2, setHaCompradoCurso2] = useState(true);
  const [haCompradoCurso3, setHaCompradoCurso3] = useState(false);
  const [haCompradoCurso4, setHaCompradoCurso4] = useState(false);
  const [haCompradoCurso5, setHaCompradoCurso5] = useState(false);
  const [haCompradoCurso6, setHaCompradoCurso6] = useState(false);
  const [haCompradoCurso7, setHaCompradoCurso7] = useState(false);
  const [haCompradoCurso8, setHaCompradoCurso8] = useState(false);
  const [haCompradoCurso9, setHaCompradoCurso9] = useState(false);
  const [haCompradoCurso10, setHaCompradoCurso10] = useState(false);
  const [haCompradoCurso11, setHaCompradoCurso11] = useState(false);
  const [haCompradoCurso12, setHaCompradoCurso12] = useState(false);

  const isla1Ref = useRef();
  const isla2Ref = useRef();
  const isla3Ref = useRef();
  const isla4Ref = useRef();
  const isla5Ref = useRef();
  const isla6Ref = useRef();
  const isla7Ref = useRef();
  const isla8Ref = useRef();
  const isla9Ref = useRef();
  const isla10Ref = useRef();
  const isla11Ref = useRef();
  const isla11RefPortal1 = useRef();
  const isla11RefPortal2 = useRef();
  const isla12Ref = useRef();
  const isla12RefPortal1 = useRef();
  const isla13Ref = useRef();

  const planetaIsla1Ref = useRef();
  const planetaIsla2Ref = useRef();
  const planetaIsla3Ref = useRef();
  const planetaIsla4Ref = useRef();
  const planetaIsla5Ref = useRef();
  const planetaIsla6Ref = useRef();
  const planetaIsla7Ref = useRef();
  const planetaIsla8Ref = useRef();
  const planetaIsla9Ref = useRef();
  const planetaIsla10Ref = useRef();
  const planetaIsla11Ref = useRef();
  const planetaIsla12Ref = useRef();
  const planetaIsla13Ref = useRef();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animaciones
  useEffect(() => {
    actions["dragonShipIsla13Action"].play();
    actions["lightIsla10Action.002"].play();
    actions["paisajesIsla6Action.002"].play();
    actions["starsIsla10Action.002"].play();
  }, []);

  // Mouse Tray
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

  // Movimiento Islas
  useFrame(() => {
    if (
      isla1Ref.current ||
      isla2Ref.current ||
      isla3Ref.current ||
      isla4Ref.current ||
      isla5Ref.current ||
      isla6Ref.current ||
      isla7Ref.current ||
      isla8Ref.current ||
      isla9Ref.current ||
      isla10Ref.current ||
      isla11Ref.current ||
      isla12Ref.current ||
      isla13Ref.current
    ) {
      // Sensibilidad de la rotación
      const rotationSpeedX = 2;

      if (isla1Ref.current) {
        isla1Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla2Ref.current) {
        isla2Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla3Ref.current) {
        isla3Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla4Ref.current) {
        isla4Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla5Ref.current) {
        isla5Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla6Ref.current) {
        isla6Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla7Ref.current) {
        isla7Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla8Ref.current) {
        isla8Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla9Ref.current) {
        isla9Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla10Ref.current) {
        isla10Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla11Ref.current) {
        isla11Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla11RefPortal1.current) {
        isla11RefPortal1.current.position.set(255.236, 635.942, 0.004);
        isla11RefPortal1.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla11RefPortal2.current) {
        isla11RefPortal2.current.position.set(255.236, 635.942, 0.004);
        isla11RefPortal2.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla12Ref.current) {
        isla12Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
      if (isla13Ref.current) {
        isla13Ref.current.rotation.y = mousePosition.x * rotationSpeedX;
      }
    }

    if (planetaIsla1Ref.current) {
      planetaIsla1Ref.current.rotation.y += 0.0007;
      planetaIsla2Ref.current.rotation.y += 0.0007;
      planetaIsla3Ref.current.rotation.y += 0.0007;
      planetaIsla4Ref.current.rotation.y += 0.0007;
      planetaIsla5Ref.current.rotation.y += 0.0007;
      planetaIsla6Ref.current.rotation.y += 0.0007;
      planetaIsla7Ref.current.rotation.y += 0.0007;
      planetaIsla8Ref.current.rotation.y += 0.0007;
      planetaIsla9Ref.current.rotation.y += 0.0007;
      planetaIsla10Ref.current.rotation.y += 0.0007;
      planetaIsla11Ref.current.rotation.y += 0.0007;
      planetaIsla12Ref.current.rotation.y += 0.0007;
      planetaIsla13Ref.current.rotation.y += 0.0007;
    }

    if (isla12RefPortal1.current) {
      // isla12RefPortal1.current.rotation.set(0.014, 0.418, -0.031);
      isla12RefPortal1.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        {/* Isla1 */}
        <group ref={planetaIsla1Ref} position={[-465.363, 46.52, 0.39]}>
          <mesh
            name="planetaIsla1"
            geometry={nodes.planetaIsla1.geometry}
            position={[0, 0, 0]}
            scale={[1.858, 1.89, 1.858]}
          >
            <PlanetMaterialPorCurso
              haComprado={haCompradoCurso1}
              activeIsland="isla1"
              material={materials.planetaTexIsla1}
            />
          </mesh>
        </group>
        <group ref={isla1Ref} position={[-465.694, 47.287, 0.269]}>
          <group name="baseIsla1" position={[0, 0, 0]}>
            <mesh name="baseIsla1_1" geometry={nodes.baseIsla1_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.baseIsla1Mat}
                color={colorIsla}
              />
            </mesh>

            <mesh name="baseIsla1_2" geometry={nodes.baseIsla1_2.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.waterIsla1Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="baseIsla1_3" geometry={nodes.baseIsla1_3.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.koiTexIsla1}
                color={colorIsla}
              />
            </mesh>
            <mesh name="baseIsla1_4" geometry={nodes.baseIsla1_4.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.outlineIsla1Mat}
              />
            </mesh>
          </group>
          <group name="plantasIsla1" position={[0.057, -0.015, -0.339]}>
            <mesh
              name="plantasIsla1_1"
              geometry={nodes.plantasIsla1_1.geometry}
            >
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.foliageIsla1Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh
              name="plantasIsla1_2"
              geometry={nodes.plantasIsla1_2.geometry}
            >
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.baseIsla1Mat}
                color={colorIsla}
              />
            </mesh>
          </group>
          <group name="water2Isla1" position={[0.09, 0.206, 0.158]}>
            <mesh name="water2Isla1_1" geometry={nodes.water2Isla1_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.waterIsla1Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="water2Isla1_2" geometry={nodes.water2Isla1_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.outline2Isla1Mat}
              />
            </mesh>
          </group>
          <group name="water3Isla1" position={[0.082, 0.383, 0.063]}>
            <mesh name="water3Isla1_1" geometry={nodes.water3Isla1_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.waterIsla1Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="water3Isla1_2" geometry={nodes.water3Isla1_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.outline2Isla1Mat}
              />
            </mesh>
          </group>
          <group name="waterIsla1" position={[0.1, -0.116, 0.208]}>
            <mesh name="waterIsla" geometry={nodes.waterIsla.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.waterIsla1Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="waterIsla_1" geometry={nodes.waterIsla_1.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso1}
                material={materials.outline2Isla1Mat}
              />
            </mesh>
          </group>
        </group>

        {/* Isla2 */}
        <group ref={planetaIsla2Ref} position={[-401.123, 266.874, 101.406]}>
          <mesh
            name="planetIsla2"
            geometry={nodes.planetIsla2.geometry}
            position={[0, 0, 0]}
            scale={2.476}
          >
            <PlanetMaterialPorCurso
              haComprado={haCompradoCurso2}
              activeIsland="isla2"
              material={materials.planetIsla2Mat}
            />
          </mesh>
        </group>
        <group ref={isla2Ref} position={[-400.949, 266.377, 100.272]}>
          <mesh
            name="accesoriosIsla2"
            geometry={nodes.accesoriosIsla2.geometry}
            position={[-0.042, 0.558, -0.418]}
          >
            <MeshMaterialPorCurso
              haComprado={haCompradoCurso2}
              material={materials.characterIsla2}
              color={colorIsla}
            />
          </mesh>
          <group name="bambooIsla2" position={[0.737, 0.29, 0.4]}>
            <mesh name="bambooIsla2_1" geometry={nodes.bambooIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.foliageIsla2Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="bambooIsla2_2" geometry={nodes.bambooIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
          <group name="baseIsla2" position={[0, 0, 0]}>
            <mesh name="baseIsla2_1" geometry={nodes.baseIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.baseIsla2}
                color={colorIsla}
              />
            </mesh>
            <mesh name="baseIsla2_2" geometry={nodes.baseIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
          <group name="clothesIsla2" position={[-0.045, 0.423, -0.422]}>
            <mesh
              name="clothesIsla2_1"
              geometry={nodes.clothesIsla2_1.geometry}
            >
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.characterIsla2}
                color={colorIsla}
              />
            </mesh>
            <mesh
              name="clothesIsla2_2"
              geometry={nodes.clothesIsla2_2.geometry}
            >
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
          <mesh
            name="foliageIsla2"
            geometry={nodes.foliageIsla2.geometry}
            position={[-0.212, 0.169, 0.272]}
          >
            <MeshMaterialPorCurso
              haComprado={haCompradoCurso2}
              material={materials.foliageIsla2Mat}
              color={colorIsla}
            />
          </mesh>
          <group name="hairIsla2" position={[-0.041, 0.588, -0.438]}>
            <mesh name="hairIsla2_1" geometry={nodes.hairIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.characterIsla2}
                color={colorIsla}
              />
            </mesh>
            <mesh name="hairIsla2_2" geometry={nodes.hairIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
          <mesh
            name="humoIsla2"
            geometry={nodes.humoIsla2.geometry}
            position={[-0.186, 0.451, -0.415]}
          >
            <MeshMaterialPorCurso
              haComprado={haCompradoCurso2}
              material={materials.foliageIsla2Mat}
              color={colorIsla}
            />
          </mesh>
          <group name="maderaIsla2" position={[0.25, 0.592, -0.765]}>
            <mesh name="maderaIsla2_1" geometry={nodes.maderaIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.baseIsla2}
                color={colorIsla}
              />
            </mesh>
            <mesh name="maderaIsla2_2" geometry={nodes.maderaIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
          <group name="paredIsla2" position={[0.271, 0.796, -0.85]}>
            <mesh name="paredIsla2_1" geometry={nodes.paredIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.baseIsla2}
                color={colorIsla}
              />
            </mesh>
            <mesh name="paredIsla2_2" geometry={nodes.paredIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>

          <group name="rocksIsla2" position={[0.083, 0.197, 0.297]}>
            <mesh name="rocksIsla2_1" geometry={nodes.rocksIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.baseIsla2}
                color={colorIsla}
              />
            </mesh>
            <mesh name="rocksIsla2_2" geometry={nodes.rocksIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
          <group name="teaIsla2" position={[-0.075, 0.409, -0.529]}>
            <mesh name="teaIsla2_1" geometry={nodes.teaIsla2_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.foliageIsla2Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="teaIsla2_2" geometry={nodes.teaIsla2_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso2}
                material={materials.outlineIsla2Mat}
              />
            </mesh>
          </group>
        </group>

        {/* Isla3 */}
        <group ref={planetaIsla3Ref} position={[-238.729, 434.493, -141.666]}>
          <mesh
            name="planetaIsla3"
            geometry={nodes.planetaIsla3.geometry}
            position={[0, 0, 0]}
            scale={2.495}
          >
            <PlanetMaterialPorCurso
              haComprado={haCompradoCurso3}
              activeIsland="isla3"
              material={materials.planetIsla3}
            />
          </mesh>
        </group>
        <group ref={isla3Ref} position={[-238.579, 434.436, -141.514]}>
          <mesh
            name="accesoriosIsla3"
            geometry={nodes.accesoriosIsla3.geometry}
            position={[0.314, 1.257, -0.855]}
          >
            <MeshMaterialPorCurso
              haComprado={haCompradoCurso3}
              material={materials.characterIsla3Mat}
              color={colorIsla}
            />
          </mesh>
          <group name="clothesIsla3" position={[0, 0, 0]}>
            <mesh
              name="clothesIsla3_1"
              geometry={nodes.clothesIsla3_1.geometry}
            >
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.clothesIsla3}
                color={colorIsla}
              />
            </mesh>
            <mesh
              name="clothesIsla3_2"
              geometry={nodes.clothesIsla3_2.geometry}
            >
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.outlineIsla3Mat}
              />
            </mesh>
          </group>
          <group name="cuerpoIsla3" position={[0, 0.168, 0.01]}>
            <mesh name="cuerpoIsla3_1" geometry={nodes.cuerpoIsla3_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.characterIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="cuerpoIsla3_2" geometry={nodes.cuerpoIsla3_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.outlineIsla3Mat}
              />
            </mesh>
          </group>
          <group name="grassIsla3" position={[0.077, 0.326, -0.699]}>
            <mesh name="grassIsla3_1" geometry={nodes.grassIsla3_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.grassIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="grassIsla3_2" geometry={nodes.grassIsla3_2.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.treeIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="grassIsla3_3" geometry={nodes.grassIsla3_3.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.rocksIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="grassIsla3_4" geometry={nodes.grassIsla3_4.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.pedestalIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="grassIsla3_5" geometry={nodes.grassIsla3_5.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.outlineIsla3Mat}
              />
            </mesh>
          </group>
          <group name="leavesIsla3" position={[0.314, 1.257, -0.855]}>
            <mesh name="leavesIsla3_1" geometry={nodes.leavesIsla3_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.hojasIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="leavesIsla3_2" geometry={nodes.leavesIsla3_2.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.grassIsla3Mat}
                color={colorIsla}
              />
            </mesh>
          </group>
          <mesh
            name="lightsIsla3"
            geometry={nodes.lightsIsla3.geometry}
            position={[-0.062, 0.505, -0.355]}
          >
            <MeshMaterialPorCurso
              haComprado={haCompradoCurso3}
              material={materials.lightIsla3Mat}
              color={colorIsla}
            />
          </mesh>
          <mesh
            name="waterIsla3"
            geometry={nodes.waterIsla3.geometry}
            position={[0, -0.474, 0.692]}
          >
            <MeshMaterialPorCurso
              haComprado={haCompradoCurso3}
              material={materials.waterIsla3Mat}
              color={colorIsla}
            />
          </mesh>
          <group name="hairIsla3" position={[0.001, 0.343, -0.017]}>
            <mesh name="hairIsla3_1" geometry={nodes.hairIsla3_1.geometry}>
              <MeshMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.characterIsla3Mat}
                color={colorIsla}
              />
            </mesh>
            <mesh name="hairIsla3_2" geometry={nodes.hairIsla3_2.geometry}>
              <OutlineMaterialPorCurso
                haComprado={haCompradoCurso3}
                material={materials.outline}
              />
            </mesh>
          </group>
        </group>

        {/* Isla4 */}
        <group ref={planetaIsla4Ref} position={[-131.3, 455.913, 0.001]}>
          <mesh
            name="planetaIsla4"
            geometry={nodes.planetaIsla4.geometry}
            material={materials.planetaIsla4Mat}
            position={[0, 0, 0]}
            scale={[2.489, 2.488, 2.489]}
          />
        </group>
        <group ref={isla4Ref} position={[-130.784, 456.819, 0.323]}>
          <group name="accesoriosIsla4" position={[0.006, 0.006, 0.037]}>
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
          <group name="clothesIsla4" position={[0, -0.14, 0]}>
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
          <group name="fishIsla4" position={[-0.991, -1.172, -0.066]}>
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
          <group name="foliageIsla4" position={[-0.382, -1.096, -0.468]}>
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
          <mesh
            name="lightIsla4"
            geometry={nodes.lightIsla4.geometry}
            material={materials.lightIsla3Mat}
            position={[-1.024, 0.745, -0.919]}
          />
          <group name="terrainIsla4" position={[-0.562, -0.613, -0.94]}>
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
          <group name="waterIsla4" position={[-0.667, -0.999, -0.178]}>
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
        </group>

        {/* Isla5 */}
        <group ref={planetaIsla5Ref} position={[-44.814, 399.177, -141.837]}>
          <mesh
            name="planetaIsla5"
            geometry={nodes.planetaIsla5.geometry}
            material={materials.planetaIsla5Mat}
            position={[0, 0, 0]}
            scale={2.276}
          />
        </group>
        <group ref={isla5Ref} position={[-44.997, 400.952, -142.278]}>
          <group name="clothesIsla5" position={[0.077, -0.032, 0.506]}>
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
          <group name="crystalIsla5" position={[-0.01, 0.616, 0.901]}>
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
            position={[-0.002, 0.406, 0.91]}
          />
          <mesh
            name="foliageIsla5"
            geometry={nodes.foliageIsla5.geometry}
            material={materials.foliageIsla2Mat}
            position={[0.019, -0.457, 0.783]}
          />
          <mesh
            name="hojasIsla5"
            geometry={nodes.hojasIsla5.geometry}
            material={materials.hojasIsla3Mat}
            position={[-0.114, 1.582, 0.783]}
          />
          <group name="terrainIsla5" position={[0, 0, 0]}>
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
          <group name="treeIsla5" position={[-0.293, 0.247, 0.729]}>
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
        </group>

        {/* Isla6 */}
        <group
          ref={isla6Ref}
          name="boxIsla6"
          position={[169.152, 223.484, 0.175]}
        >
          <pointLight position={[0, 6, 3]} intensity={2} color="#ffffff" />
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
        <group name="paisajesIsla6" position={[169.162, 223.201, 0.025]}>
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
            position={[0.153, 0.15, 0.077]}
            rotation={[0, -0.038, 0]}
          />
          <group
            name="charactersIsla6"
            position={[-0.135, -0.051, -0.099]}
            rotation={[0, -0.038, 0]}
          >
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
          ref={planetaIsla6Ref}
          geometry={nodes.planetIsla6.geometry}
          material={materials.planetIsla6Mat}
          position={[169.027, 222.877, 0]}
          scale={1.788}
        />

        {/* Isla7 */}
        <group ref={planetaIsla7Ref} position={[255.605, 77.1, 131.597]}>
          <mesh
            name="planetIsla7"
            geometry={nodes.planetIsla7.geometry}
            material={materials.planetIsla7Mat}
            position={[0, 0, 0]}
            scale={1.791}
          />
        </group>
        <group ref={isla7Ref} position={[255.729, 77.107, 131.623]}>
          <group name="acceoriesIsla7" position={[-0.044, 0.254, -0.382]}>
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
          <group name="baseIsla7" position={[0, 0, 0]}>
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
          <group name="casaIsla7" position={[-0.044, 1.024, -0.398]}>
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
          <group name="characterIsla7" position={[-0.046, 0.391, -0.167]}>
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
          <group name="foliagesla7" position={[-0.152, 0.349, -0.092]}>
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

          <group name="troncosIsla7" position={[0.024, 0.884, -0.288]}>
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
          <group name="ventanaIsla7" position={[0.044, 0.449, -0.935]}>
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
        </group>

        {/* Isla8 */}
        <group ref={planetaIsla8Ref} position={[461.375, 13.28, -169.478]}>
          <mesh
            name="planetaIsla8"
            geometry={nodes.planetaIsla8.geometry}
            material={materials.planetaIsla8Mat}
            position={[0, 0, 0]}
            scale={1.788}
          />
        </group>
        <group ref={isla8Ref} position={[461.375, 13.28, -169.478]}>
          <group name="ballIsla8" position={[0.529, 0.402, 0.002]}>
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
            position={[-0.224, 0.546, -0.027]}
          />
          <mesh
            name="dust2Isla8"
            geometry={nodes.dust2Isla8.geometry}
            material={materials.dustIsla8Mat}
            position={[0.521, 0.702, 0.002]}
          />

          <group name="soulIsla8" position={[0.548, 0.882, 0.009]}>
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
            position={[0.522, 0.702, 0.002]}
          />
          <mesh
            name="sphere2Isla8"
            geometry={nodes.sphere2Isla8.geometry}
            material={materials.terrain2Isla8Mat}
            position={[0.522, 0.702, 0.002]}
          />
          <group name="terrainIsla8" position={[-0.448, 0.264, 0.003]}>
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
        </group>

        {/* Isla9 */}
        <group ref={planetaIsla9Ref} position={[400.989, 316.837, 158.804]}>
          <mesh
            name="planetaIsla9"
            geometry={nodes.planetaIsla9.geometry}
            material={materials.planetaIsla9Mat}
            position={[0, 0, 0]}
            scale={1.785}
          />
        </group>
        <group ref={isla9Ref} position={[400.989, 316.837, 158.804]}>
          <group name="baseIsla9" position={[-0.1, -0.04, 0.301]}>
            <pointLight
              position={[-0.1, 6, 1.3]}
              intensity={0.8}
              color="#ffffff"
            />
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
          <group name="dragon1Isla9" position={[0.279, 0.851, -0.664]}>
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
          <group name="dragon2Isla9" position={[-0.148, 2.233, 0.687]}>
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
          <group name="nube1Isla9" position={[0.075, 1.111, 0.586]}>
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
            position={[-0.19, 0.67, -0.199]}
          />
        </group>

        {/* Isla10 */}
        <group ref={planetaIsla10Ref} position={[378.724, 549.043, 0]}>
          <mesh
            name="planetaIsla10"
            geometry={nodes.planetaIsla10.geometry}
            material={materials.planetaIsla10Mat}
            position={[0, 0, 0]}
            scale={1.785}
          />
        </group>
        <group ref={isla10Ref} position={[378.724, 549.043, 0]}>
          <group
            name="charactersIsla10"
            position={[0.131, -0.513, 0.034]}
            rotation={[0, -1.421, 0]}
          >
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
            position={[-0.014, 1.378, -0.01]}
          />
          <group name="hojasIsla10" position={[0.15, 0.097, -0.014]}>
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
            position={[0.179, 0.288, 0.005]}
          />

          <group name="terrainIsla10" position={[0.213, -1.094, 0.178]}>
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
          <group name="treeIsla10" position={[0.137, -0.094, 0.002]}>
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
        </group>

        <mesh
          name="starsIsla10"
          geometry={nodes.starsIsla10.geometry}
          material={materials.starsIsla10Mat}
          position={[378.886, 549.27, -0.018]}
        />

        {/* Isla11 */}
        <group ref={planetaIsla11Ref} position={[255.236, 635.942, 0.004]}>
          <mesh
            name="planetaIsla11"
            geometry={nodes.planetaIsla11.geometry}
            material={materials.planetIsla11Mat}
            position={[0, 0, 0]}
            scale={[1.785, 1.799, 1.785]}
          />
        </group>
        <group ref={isla11Ref} position={[255.236, 635.942, 0.004]}>
          <group name="baseIsla11" position={[-0.093, -0.96, 0.066]}>
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
            position={[-0.08, 0.075, 0.368]}
          />
          <group name="floor1Isla11" position={[-0.143, -0.524, 1.357]}>
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
          <group name="floor2Isla11" position={[-0.043, -0.376, 0.845]}>
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
            position={[-0.103, -0.782, 0.157]}
          />
          <mesh
            name="hojasIsla11"
            geometry={nodes.hojasIsla11.geometry}
            material={materials.hojasIsla11Mat}
            position={[0.033, 0.178, -0.521]}
          />
          <group name="piedrasIsla11" position={[-0.055, -0.721, -0.046]}>
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
        </group>
        <mesh
          name="portal1Isla11"
          ref={isla11RefPortal1}
          geometry={nodes.portal1Isla11.geometry}
          material={materials.portal1Isla11Mat}
          position={[255.15, 635.985, -0.329]}
        />
        <mesh
          name="portal2Isla11"
          ref={isla11RefPortal2}
          geometry={nodes.portal2Isla11.geometry}
          material={materials.portal2Isla11Mat}
          position={[255.064, 636.062, 0.841]}
          scale={1.17}
        />

        {/* Isla12 */}
        <group ref={planetaIsla12Ref} position={[431.711, 672.313, 0.365]}>
          <mesh
            name="planetaIsla12"
            geometry={nodes.planetaIsla12.geometry}
            material={materials.planetIsla12Mat}
            position={[0, 0, 0]}
            scale={[1.816, 1.787, 1.816]}
          />
        </group>
        <group ref={isla12Ref} position={[431.711, 672.313, 0.365]}>
          <group name="characterIsla12" position={[-0.126, 0.773, -0.307]}>
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
            position={[-0.618, 1.121, 0.135]}
          />
          <group name="floorIsla12" position={[-0.4, 0.413, 0.04]}>
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
            position={[-0.511, 0.852, 0.313]}
          />
          <mesh
            name="stairsIsla12"
            geometry={nodes.stairsIsla12.geometry}
            material={materials.stairsIsla12Mat}
            position={[-0.643, 0.322, 0.245]}
          />
          <mesh
            name="portal1Isla12"
            ref={isla12RefPortal1}
            geometry={nodes.portal1Isla12.geometry}
            material={materials.portalIsla12Mat}
            position={[-0.18, 0.968, -1.305]}
            rotation={[0.014, 0.418, -0.031]}
          />
          <mesh
            name="portal2Isla12"
            geometry={nodes.portal2Isla12.geometry}
            material={materials.fogIsla12Mat}
            position={[-0.19, 0.964, -1.323]}
            rotation={[0.627, 0.372, -0.263]}
          />
          <mesh
            name="portal3Isla12"
            geometry={nodes.portal3Isla12.geometry}
            material={materials.fogIsla12Mat}
            position={[-0.162, 1.005, -1.288]}
            rotation={[0.63, 0.381, -0.282]}
          />
        </group>

        {/* Isla13 */}
        <group ref={planetaIsla13Ref} position={[317.233, 759.986, 0.284]}>
          <mesh
            name="planetaIsla13"
            geometry={nodes.planetaIsla13.geometry}
            material={materials.planetIsla13Mat}
            position={[0, 0, 0]}
            scale={[0.566, 0.567, 0.566]}
          />
        </group>
        <group ref={isla13Ref} position={[317.233, 759.986, 0.284]}>
          <group
            name="arbolesIsla13"
            position={[-0.206, 0.092, -0.317]} // 317.027-317.233, 760.078-759.986, -0.033-0.284
            scale={0.441}
          >
            <mesh
              name="arbolesIsla13_1"
              geometry={nodes.arbolesIsla13_1.geometry}
              material={materials["rockIsla12Mat.001"]}
            />
            <mesh
              name="arbolesIsla13_2"
              geometry={nodes.arbolesIsla13_2.geometry}
              material={materials["treeIsla12Mat.001"]}
            />
          </group>
          <directionalLight
            position={[0, 5, 0]}
            intensity={2.6}
            color="#ffffff"
          />
          <group
            name="baseIsla13"
            position={[-0.54, -0.367, -0.658]} // 316.693-317.233, 759.619-759.986, -0.374-0.284
            scale={0.441}
          >
            <mesh
              name="baseIsla13_1"
              geometry={nodes.baseIsla13_1.geometry}
              material={materials.goldIsland13Mat}
            />
            <mesh
              name="baseIsla13_2"
              geometry={nodes.baseIsla13_2.geometry}
              material={materials.crystalIsland13Mat}
            />
            <mesh
              name="baseIsla13_3"
              geometry={nodes.baseIsla13_3.geometry}
              material={materials.outlineIsla13Mat}
            />
          </group>
          <group
            name="grassIsla13"
            position={[-0.501, -0.045, -0.184]} // 316.732-317.233, 759.941-759.986, 0.1-0.284
            scale={0.441}
          >
            <mesh
              name="grassIsla13_1"
              geometry={nodes.grassIsla13_1.geometry}
              material={materials.grassIsla13Mat}
            />
            <mesh
              name="grassIsla13_2"
              geometry={nodes.grassIsla13_2.geometry}
              material={materials.bridges}
            />
            <mesh
              name="grassIsla13_3"
              geometry={nodes.grassIsla13_3.geometry}
              material={materials.outlineIsla13Mat}
            />
            <mesh
              name="grassIsla13_4"
              geometry={nodes.grassIsla13_4.geometry}
              material={materials["terrain2Isla5Mat.004"]}
            />
            <mesh
              name="grassIsla13_5"
              geometry={nodes.grassIsla13_5.geometry}
              material={materials.portalIsla11Mat}
            />
            <mesh
              name="grassIsla13_6"
              geometry={nodes.grassIsla13_6.geometry}
              material={materials.grassglass}
            />
            <mesh
              name="grassIsla13_7"
              geometry={nodes.grassIsla13_7.geometry}
              material={materials["box1Isla6Mat.001"]}
            />
          </group>
          <mesh
            name="island1"
            geometry={nodes.island1.geometry}
            material={materials["koiTexIsla1.001"]}
            position={[-1.494, -0.135, 1.515]} // 315.739-317.233, 759.851-759.986, 1.799-0.284
            scale={0.441}
          />
          <group
            name="island2"
            position={[1.195, -0.288, 0.02]} // 318.428-317.233, 759.698-759.986, 0.304-0.284
            scale={0.441}
          >
            <mesh
              name="island2_1"
              geometry={nodes.island2_1.geometry}
              material={materials["baseIsla2.001"]}
            />
            <mesh
              name="island2_2"
              geometry={nodes.island2_2.geometry}
              material={materials["outlineIsla2Mat.001"]}
            />
            <mesh
              name="island2_3"
              geometry={nodes.island2_3.geometry}
              material={materials["accesorios1Isla7Mat.002"]}
            />
            <mesh
              name="island2_4"
              geometry={nodes.island2_4.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="island2_5"
              geometry={nodes.island2_5.geometry}
              material={materials["rockIsla12Mat.001"]}
            />
          </group>
          <group
            name="island3"
            position={[-1.186, -0.025, 0.493]} // 316.047-317.233, 759.961-759.986, 0.777-0.284
            scale={0.441}
          >
            <mesh
              name="island3_1"
              geometry={nodes.island3_1.geometry}
              material={materials["treeIsla3Mat.002"]}
            />
            <mesh
              name="island3_2"
              geometry={nodes.island3_2.geometry}
              material={materials["hojasIsla3Mat.002"]}
            />
          </group>
          <mesh
            name="island4"
            geometry={nodes.island4.geometry}
            material={materials["terrainIsla4Mat.001"]}
            position={[0.52, -0.158, 2.101]} // 317.753-317.233, 759.828-759.986, 2.385-0.284
            scale={0.441}
          />
          <group
            name="island5"
            position={[0.971, 0.556, -2.342]} // 318.204-317.233, 760.542-759.986, -2.058-0.284
            scale={0.441}
          >
            <mesh
              name="island5_1"
              geometry={nodes.island5_1.geometry}
              material={materials["terrain1Isla5MAt.001"]}
            />
            <mesh
              name="island5_2"
              geometry={nodes.island5_2.geometry}
              material={materials["terrain2Isla5Mat.004"]}
            />
            <mesh
              name="island5_3"
              geometry={nodes.island5_3.geometry}
              material={materials.treeIsla5Tex}
            />
            <mesh
              name="island5_4"
              geometry={nodes.island5_4.geometry}
              material={materials.treeIsla5Mat}
            />
          </group>
          <group
            name="island6"
            position={[-2.411, 0.024, -0.405]} // 314.822-317.233, 760.01-759.986, -0.121-0.284
            scale={0.441}
          >
            <mesh
              name="island6_1"
              geometry={nodes.island6_1.geometry}
              material={materials["box1Isla6Mat.001"]}
            />
            <mesh
              name="island6_2"
              geometry={nodes.island6_2.geometry}
              material={materials["goldIsla6Mat.001"]}
            />
            <mesh
              name="island6_3"
              geometry={nodes.island6_3.geometry}
              material={materials["box2Isla6Mat.001"]}
            />
            <mesh
              name="island6_4"
              geometry={nodes.island6_4.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            name="island7"
            position={[-0.663, 0.01, 1.501]} // 316.57-317.233, 759.996-759.986, 1.785-0.284
            scale={0.441}
          >
            <mesh
              name="island7_1"
              geometry={nodes.island7_1.geometry}
              material={materials["terrain2Isla5Mat.004"]}
            />
            <mesh
              name="island7_2"
              geometry={nodes.island7_2.geometry}
              material={materials["accesorios1Isla7Mat.002"]}
            />
            <mesh
              name="island7_3"
              geometry={nodes.island7_3.geometry}
              material={materials["accesorios2Isla7Mat.001"]}
            />
            <mesh
              name="island7_4"
              geometry={nodes.island7_4.geometry}
              material={materials["terrain2Isla5Mat.005"]}
            />
          </group>
          <group
            name="island8"
            position={[-2.261, 0.156, 0.687]} // 314.972-317.233, 760.142-759.986, 0.971-0.284
            scale={0.441}
          >
            <mesh
              name="island8_1"
              geometry={nodes.island8_1.geometry}
              material={materials["outline2Isla8Mat.001"]}
            />
            <mesh
              name="island8_2"
              geometry={nodes.island8_2.geometry}
              material={materials["terrain2Isla8Mat.001"]}
            />
            <mesh
              name="island8_3"
              geometry={nodes.island8_3.geometry}
              material={materials["planetaIsla8Mat.001"]}
            />
          </group>
          <group
            name="island9"
            position={[-2.165, 0.194, -1.308]} // 315.068-317.233, 760.18-759.986, -1.024-0.284
            scale={0.441}
          >
            <mesh
              name="island9_1"
              geometry={nodes.island9_1.geometry}
              material={materials["starsIsla9Mat.001"]}
            />
            <mesh
              name="island9_2"
              geometry={nodes.island9_2.geometry}
              material={materials["dragon1Isla9MAt.001"]}
            />
            <mesh
              name="island9_3"
              geometry={nodes.island9_3.geometry}
              material={materials["dragon2Isla9Mat.002"]}
            />
          </group>
          <group
            name="island10"
            position={[0.336, -0.22, -1.507]} // 317.569-317.233, 759.766-759.986, -1.223-0.284
            scale={0.441}
          >
            <mesh
              name="Island10"
              geometry={nodes.Island10.geometry}
              material={materials["hojasIsla10Mat.001"]}
            />
            <mesh
              name="Island10_1"
              geometry={nodes.Island10_1.geometry}
              material={materials["lightIsla10Mat.001"]}
            />
            <mesh
              name="Island10_2"
              geometry={nodes.Island10_2.geometry}
              material={materials["starsIsla10Mat.001"]}
            />
            <mesh
              name="Island10_3"
              geometry={nodes.Island10_3.geometry}
              material={materials["treeIsla10Mat.001"]}
            />
          </group>
          <group
            name="island11"
            position={[1.747, -0.169, -1.14]} // 318.98-317.233, 759.817-759.986, -0.856-0.284
            scale={0.441}
          >
            <mesh
              name="island11_1"
              geometry={nodes.island11_1.geometry}
              material={materials["portal1Isla11Mat.001"]}
            />
            <mesh
              name="island11_2"
              geometry={nodes.island11_2.geometry}
              material={materials["hojasIsla11Mat.001"]}
            />
            <mesh
              name="island11_3"
              geometry={nodes.island11_3.geometry}
              material={materials["terrainIsla11Mat.002"]}
            />
            <mesh
              name="island11_4"
              geometry={nodes.island11_4.geometry}
              material={materials["portal2Isla11Mat.001"]}
            />
          </group>
          <group
            name="island12"
            position={[-0.682, 0.385, -2.213]} // 316.551-317.233, 760.371-759.986, -1.929-0.284
            scale={0.441}
          >
            <mesh
              name="island12_1"
              geometry={nodes.island12_1.geometry}
              material={materials["rockIsla12Mat.001"]}
            />
            <mesh
              name="island12_2"
              geometry={nodes.island12_2.geometry}
              material={materials["portalIsla12Mat.001"]}
            />
            <mesh
              name="island12_3"
              geometry={nodes.island12_3.geometry}
              material={materials.portalIsla11Mat}
            />
          </group>
        </group>
        <group
          name="dragonShipIsla13"
          position={[316.949, 760.385, -0.001]}
          scale={0.441}
        >
          <mesh
            name="dragonShipIsla13_1"
            geometry={nodes.dragonShipIsla13_1.geometry}
            material={materials.goldDSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_2"
            geometry={nodes.dragonShipIsla13_2.geometry}
            material={materials.lightDSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_3"
            geometry={nodes.dragonShipIsla13_3.geometry}
            material={materials.redDSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_4"
            geometry={nodes.dragonShipIsla13_4.geometry}
            material={materials.redlDSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_5"
            geometry={nodes.dragonShipIsla13_5.geometry}
            material={materials.orangeDSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_6"
            geometry={nodes.dragonShipIsla13_6.geometry}
            material={materials.metal1DSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_7"
            geometry={nodes.dragonShipIsla13_7.geometry}
            material={materials.metal2DSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_8"
            geometry={nodes.dragonShipIsla13_8.geometry}
            material={materials.blue1DSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_9"
            geometry={nodes.dragonShipIsla13_9.geometry}
            material={materials.blue2DSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_10"
            geometry={nodes.dragonShipIsla13_10.geometry}
            material={materials.yellowDSIsla13Mat}
          />
          <mesh
            name="dragonShipIsla13_11"
            geometry={nodes.dragonShipIsla13_11.geometry}
            material={materials.yellow2DSISla13Mat}
          />
        </group>
        <mesh
          name="linesDraco"
          geometry={nodes.linesDraco.geometry}
          material={materials.Material}
          position={[376.495, 716.458, -0.175]} // 376.495-317.233, 716.458-759.986, -0.175-0.284
          rotation={[1.219, -0.647, -1.781]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/gltf/gltf/dracoConstellation.gltf");
