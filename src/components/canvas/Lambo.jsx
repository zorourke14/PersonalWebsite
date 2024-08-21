import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Lambos = ({ isMobile }) => {
  const lambo = useGLTF('desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1.2} position={[10, 10, 10]} />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={12}
        castShadow
        
      />
      <directionalLight
        position={[10, 10, 10]}
        intensity={10.5}
        castShadow
      />
      <primitive
        object = {lambo.scene}
        scale = {isMobile ? .7 : .75}
        position = {isMobile ? [0, -3, -2.2]: [-1, -2.78, 0]}
        
      />
    </mesh>
  )
}

const LamboCanvas = ( ) => {
  const [isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', 
      handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', 
        handleMediaQueryChange);
    };
  }, [])


  return (
    <Canvas
      frameLoop = "demand"
      shadows 
      camera={{position: [20, 3, 5], fov: 25}}
      gl= {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback = {<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Lambos isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default LamboCanvas;