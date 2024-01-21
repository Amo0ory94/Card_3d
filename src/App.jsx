import { Suspense, useState } from 'react'
 
import './App.css'
import { Canvas } from '@react-three/fiber'
import CarShow from './CarShow'

function App() {
 
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  ) 
}

export default App
