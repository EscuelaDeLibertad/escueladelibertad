const OutlineMaterialPorCurso = ({ haComprado, material }) => {
  return haComprado ? (
    <meshStandardMaterial attach="material" {...material.clone()} />
  ) : (
    <meshStandardMaterial visible={false} />
  );
};

export default OutlineMaterialPorCurso;
