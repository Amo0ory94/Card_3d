import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { RepeatWrapping } from 'three';

function FloatingGrid() {

    const texture = useTexture('./texture/grid-texture.png');
 
    useEffect((state, delta) =>{
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;
        texture.anisotropy = 4;
        texture.repeat.set(30,30);
        texture.offset.set(0,0);
    },[texture])

    useFrame((state, delta) =>{
        let t = -state.clock.getElapsedTime() * 0.68;
        texture.offset.set(0,t);
    })
  return (
   <mesh rotation-x={-Math.PI * 0.5 } position={[0, 0.425,0]}>
    <planeGeometry args={[35,35]}/>
    <meshBasicMaterial 
        color={[0.5,1,1]}
        opacity={0.016}
        map={texture}
        alphaMap={texture}
        transparent={true}
    />
   </mesh>
  )
}

export default FloatingGrid