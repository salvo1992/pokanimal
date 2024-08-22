import React from 'react';
import { useBox } from '@react-three/cannon';

const Path = ({ position, size }) => {
  const [ref] = useBox(() => ({ position }));

  return (
    <mesh ref={ref} position={position} receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color="tan" />
    </mesh>
  );
};

export default Path;

