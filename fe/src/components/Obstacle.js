import React from 'react';
import { useBox } from '@react-three/cannon';

const Obstacle = ({ position, size }) => {
  const [ref] = useBox(() => ({ position, ...size }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[size.width, size.height, size.depth]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Obstacle;


