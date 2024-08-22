import React from 'react';
import { useBox } from '@react-three/cannon';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const River = ({ position, size }) => {
  const [ref] = useBox(() => ({ position }));
  const texture = useLoader(TextureLoader, '/textures/water1.jpg');

  return (
    <mesh ref={ref} position={position} receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default River;


