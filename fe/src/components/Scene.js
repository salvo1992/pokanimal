import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Ground from './Ground';
import PokemonModel from './PokemonModel';
import Building from './Building';
import Tree from './Tree';
import River from './River';
import Path from './Path';
import './Scene.css';

function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 10, 20], fov: 60 }}>
      <Sky
        distance={450000}
        sunPosition={[100, 20, 100]}
      />
      <ambientLight intensity={0.5} />
      <directionalLight 
        castShadow
        position={[10, 10, 10]} 
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, 5, 5]} intensity={0.5} />
      <OrbitControls />
      <Physics>
        <Ground />
        <PokemonModel modelPath="/models/chandelure.glb" position={[0, 0, 0]} />

        {/* Aggiungi Alberi Sparsi */}
        <Tree position={[5, 2.5, 5]} />
        <Tree position={[-5, 2.5, 5]} />
        <Tree position={[5, 2.5, -5]} />
        <Tree position={[-5, 2.5, -5]} />
        <Tree position={[10, 2.5, 10]} />
        <Tree position={[-10, 2.5, 10]} />
        <Tree position={[10, 2.5, -10]} />
        <Tree position={[-10, 2.5, -10]} />

        {/* Fiume più grande e realistico */}
        <River position={[0, 0.1, 20]} size={[1000, 1, 20]} />

        {/* Percorsi più grandi */}
        <Path position={[0, 0.1, 0]} size={[1000, 0.2, 4]} />
        <Path position={[500, 0.1, 500]} size={[4, 0.2, 1000]} />
        <Path position={[-500, 0.1, 500]} size={[4, 0.2, 1000]} />
        <Path position={[-500, 0.1, -500]} size={[1000, 0.2, 4]} />

        {/* Distribuzione dei Palazzi */}
        <Building position={[50, 5, 50]} />
        <Building position={[-50, 5, 50]} />
        <Building position={[50, 5, -50]} />
        <Building position={[-50, 5, -50]} />
        <Building position={[100, 5, 100]} />
        <Building position={[-100, 5, 100]} />
        <Building position={[100, 5, -100]} />
        <Building position={[-100, 5, -100]} />
      </Physics>
    </Canvas>
  );
}

export default Scene;












