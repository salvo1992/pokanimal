import React from 'react';
import { usePlane } from '@react-three/cannon';
import { Plane } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  const texture = useLoader(TextureLoader, '/textures/ground.jpg');

  return (
    <Plane ref={ref} args={[1000, 1000]} receiveShadow>
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
};

export default Ground;

