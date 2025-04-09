import { DoubleSide } from "three";

const MeshMaterialPorCurso = ({ haComprado, material, color }) => {
  return haComprado ? (
    <meshStandardMaterial
      attach="material"
      {...material.clone()}
      side={DoubleSide}
    />
  ) : (
    <meshStandardMaterial
      side={DoubleSide}
      wireframe={true}
      color={color}
      transparent={true}
      opacity={0.1}
    />
  );
};

export default MeshMaterialPorCurso;
