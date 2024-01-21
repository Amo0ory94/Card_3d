import { useFrame } from '@react-three/fiber'
import React, { Fragment, useRef, useState } from 'react'
import { Vector3 } from 'three'


function Box({color}) {
  const box = useRef()
  const [xRotateSpead] = useState(() => Math.random())
  const [yRotateSpead] = useState(() => Math.random())
  const [scale] =  useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05)
  
  const resetPosition = () =>{
    let v = new Vector3(Math.random() * 2 -1, Math.random() * 2.5 + 0.1, (Math.random() * 2 -1) * 15);
    if(v.x < 0) v.x -= 1.75
    if(v.x > 0) v.x += 1.75
    return v;
  }

  const [position, setPosition] = useState(resetPosition())

  useFrame((state, delta) =>{
     box.current.position.set(position.x, position.y, position.z)
     box.current.rotation.x += delta * xRotateSpead
     box.current.rotation.y += delta * yRotateSpead

  },[xRotateSpead,yRotateSpead, position])
  return (
    <mesh ref={box} scale={scale} castShadow>
      <boxGeometry args={[1,1,1]}/>
      <meshBasicMaterial color={color} envMapIntensity={0.15}/>
    </mesh>
  )
}

const Boxes = () =>{

  const [arr] = useState(() =>{
    let a = [];
    for(let i = 0; i < 10; i ++) a.push(0);
    return a
  })
 
  return(
    <Fragment>
      {
        arr &&  arr.map((e, i) =>{
        return(
            <Box 
              key={i}
              color={i % 2 === 0 ? [0.4,0.4,0.1]: [0.05,0.15,0.4] }
            />
          )
      })
    }
    </Fragment>
  )
}
export default Boxes