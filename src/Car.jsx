import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useControls } from 'leva'
// import { useControls } from 'leva'
import { Suspense, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
 
const Car = () => {
    const {scene, nodes} = useGLTF('./models/Car_Models/free_ai_based_conceptcar_050_public_domain_cc0/scene.gltf')
    // const model = useLoader(GLTFLoader, './models/Car_Models/bugatti_chiron_last_unit/scene.gltf')

    // const {rotation} = useControls({rotation:{x:0,y:0,z:0}});
    console.log('scene')
    // console.log(scene.children[0].children[0].children[0].children[0])
    let test = scene.children[0].children[0].children[0];
    console.log(nodes)

    // console.log( nodes['Object_23'])
    useEffect(() =>{
        scene.scale.set(1.5,1.5,1.5)
        scene.position.set(0,-0.035,0)
        // scene.rotation.set(0,1.60,0)
  
        scene.traverse((object) =>{
             if(object.type === 'Mesh'  ){
                 object.castShadow = true;
                 object.receiveShadow = true;
                 object.material.envMapIntensity = 20
             }
        })
    })
    useFrame((state, delta) =>{
        let t = state.clock.getElapsedTime();
        let group = scene.children[0].children[0].children[0];
        nodes['rim_235001'].rotation.x = t * 2
        nodes['rim_235001_chrome_0'].rotation.x = t * 2
        
        // nodes['tire_001_R17001_rubber_tires_0'].rotation.x = t * 2
        // nodes['tire_001_R17001_tire_protector_0'].rotation.x = t * 2

        nodes['rim_235002'].rotation.x = t * 2
        nodes['rim_235002_chrome_0'].rotation.x = t * 2

        nodes['rim_235003'].rotation.x = t * 2
        nodes['rim_235003_chrome_0'].rotation.x = t * 2

        nodes['rim_235004'].rotation.x = t * 2
        nodes['rim_235004_chrome_0'].rotation.x = t * 2

        nodes['tire_001_R17001'].rotation.x = t * 2
        nodes['tire_001_R17002'].rotation.x = t * 2
        nodes['tire_001_R17003'].rotation.x = t * 2
        nodes['tire_001_R17004'].rotation.x = t * 2
        // nodes['rim_235003_rims_0'].rotation.x = t * 2
        // nodes['rim_235004'].rotation.x = t * 2
        // nodes['rim_235004_chrome_0'].rotation.x = t * 2
        // nodes['rim_235004_rims_0'].rotation.x = t * 2
        // group.children[2].rotation.x = t * 2
        // group.children[4].rotation.x = t * 2
        // group.children[6].rotation.x = t * 2
        // nodes['Object_20_Tire_0'].rotation.x = t * 2
        // nodes['Object_23'].rotation.x = t * 2
        // nodes['Object_23'].up = t * 2
        // nodes['Object_23'].quaternion.x = t * 2
    })
  return (
    <Suspense fallback={null}>
        <primitive object={scene}/>
    </Suspense>
  )
}

export default Car
