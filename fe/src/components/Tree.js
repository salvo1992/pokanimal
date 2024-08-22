import React from 'react';
import { useCylinder } from '@react-three/cannon';

const Tree = ({ position }) => {
  const [ref] = useCylinder(() => ({ position }));

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 5, 32]} />
        <meshStandardMaterial color="brown" />
      </mesh>
      <mesh position={[0, 7, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
};

export default Tree;

