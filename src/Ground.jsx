import { MeshReflectorMaterial, useTexture , useGLTF} from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import {  LinearSRGBColorSpace, RepeatWrapping, TextureLoader } from 'three'
function Ground() {
    const [rough, normal] = useLoader(TextureLoader,[
        './texture/rough_plasterbrick_05_rough_2k.jpg',
        './texture/rough_plasterbrick_05_nor_gl_2k.jpg'
        ])
    
 
    useEffect(() =>{
        [rough, normal].forEach((t) =>{
            t.wrapS = RepeatWrapping
            t.wrapT= RepeatWrapping
            t.repeat.set(5,5)
        })
        normal.colorSpace = LinearSRGBColorSpace
    },[normal,rough])
    
    useFrame((state, delta) =>{
        let t = -state.clock.getElapsedTime() * 0.128;
        rough.offset.set(0,t);
        normal.offset.set(0,t);
    })

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
        <planeGeometry args={[30,30]}/>
       
        <MeshReflectorMaterial
            normalMap={normal}
            roughnessMap={rough}
            envMapIntensity={0}
            dithering={true}
            color={[0.015,0.015,0.015]}
            roughness={0.7}
            blur={[1000,400]}
            mixBlur={30}
            mixStrength={80}
            mixContrast={1}
            resolution={1024}
            mirror={0}
            depthScale={0.01}
            minDepthThreshold={0.9}
            maxDepthThreshold={1}
            depthToBlurRatioBias={0.25}
            debug={0}
            reflectorOffset={0.2}
        />
    </mesh>
  )
}

export default Ground