import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Fragment } from "react";
import Ground from "./Ground";
import { useControls } from "leva";
import Car from "./Car";
import Rings from "./Rings";
import Boxes from "./Boxes";
import { Bloom, ChromaticAberration, EffectComposer } from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution ,BlendFunction} from 'postprocessing'
import FloatingGrid from "./FloatingGrid";

function CarShow() {
  const { positionA, positionB } = useControls({
    positionA: { x: -5, y: 5, z: 0 },
    positionB: { x: 5, y: 5, z: 0 },
  });
  return (
    <Fragment>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => {
          <Fragment>
            <Environment map={texture} />
            <Car />
          </Fragment>
        }}
      </CubeCamera>
      <Car />
      <Rings />
      <Boxes/>
      <color args={['white']} attach={"background"} />
      <directionalLight
        color={"white"}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[-5.0, 5, -5.0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <directionalLight
        color={"white"}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[4.0, 8.6, -18.0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
        <FloatingGrid/>
      {/* 
      <EffectComposer>
       <Bloom
        blendFunction={BlendFunction.ADD}  
        intensity={0.3}  
        kernelSize={1}  
        luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        height={300}
        width={300}
        
        />
        <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} // blend mode
            offset={[0.0005, 0.0012]} // color offset
    /> 
    </EffectComposer>
*/}
    </Fragment>
  );
}

export default CarShow;
