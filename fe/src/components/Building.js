import React from 'react';
import { useBox } from '@react-three/cannon';

const Building = ({ position }) => {
  const [ref] = useBox(() => ({ position }));

  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[5, 10, 5]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Building;
;
