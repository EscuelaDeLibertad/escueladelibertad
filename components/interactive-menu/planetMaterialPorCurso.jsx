import { DoubleSide } from "three";
import { useEmissive } from "./EmissiveContext";

const PlanetMaterialPorCurso = ({ haComprado, material, color, island }) => {
  const { emissiveIntensity, activeIsland } = useEmissive();
  return haComprado ? (
    <meshStandardMaterial
      attach="material"
      {...material.clone()}
      emissive="white"
      emissiveIntensity={activeIsland === `${island}` ? emissiveIntensity : 0}
      side={DoubleSide}
    />
  ) : (
    <meshStandardMaterial
      attach="material"
      {...material.clone()}
      side={DoubleSide}
      wireframe={true}
    />
  );
};

export default PlanetMaterialPorCurso;
