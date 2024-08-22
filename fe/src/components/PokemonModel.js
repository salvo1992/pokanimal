import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const PokemonModel = ({ modelPath, ...props }) => {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();
  const { camera } = useThree();
  const [position, setPosition] = useState([0, 0, 0]);

  // Gestione dell'input da tastiera per il movimento
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          setPosition((prev) => [prev[0], prev[1], prev[2] - 1]);
          break;
        case 'ArrowDown':
          setPosition((prev) => [prev[0], prev[1], prev[2] + 1]);
          break;
        case 'ArrowLeft':
          setPosition((prev) => [prev[0] - 1, prev[1], prev[2]]);
          break;
        case 'ArrowRight':
          setPosition((prev) => [prev[0] + 1, prev[1], prev[2]]);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useFrame(() => {
    ref.current.position.set(...position);
    camera.position.set(position[0], position[1] + 20, position[2] + 50); // Segue il personaggio
    camera.lookAt(position[0], position[1], position[2]);
  });

  return <primitive object={scene} ref={ref} {...props} />;
};

export default PokemonModel;



