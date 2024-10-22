import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/three';

function Explore({selectedPart}) {
  // const gltf = useLoader(GLTFLoader, '/img/bg3.glb');
  const gltf = useLoader(GLTFLoader, '/img/scene.gltf');
  const [rotation, setRotation] = useState([-1.5,-2,-1.7]);

  const [props, setProps] = useSpring(() => ({
    rotation: [-1.5,-2,-1.7],
    position: [0,-10,0],
    config: { tension: 250, friction: 75 },
  }));

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // useEffect(() => {
  //   gltf.scene.traverse((child) => {
  //     console.log('child--', child);
  //     if (child.isMesh) {
  //       console.log('materialll', child.material); // Проверка материалов в консоли
  //     }
  //   });
  // }, [gltf]);

  // useEffect(() => {
  //   gltf.scene.traverse((child) => {
  //     if (child.isMesh) {
  //       if (child.material.map) {
  //         // Принудительно обновляем текстуру
  //         child.material.map.needsUpdate = true;
  //         // Принудительно обновляем сам материал
  //         child.material.needsUpdate = true;
  //       }
  //     }
  //   });
  // }, [gltf]);

  useEffect(() => {
    if (selectedPart) {
      setProps({rotation: [-0.2,-0.5,-0.4]})
      // setProps({rotation: [
      //   randomIntFromInterval(-1, -1.03),
      //   randomIntFromInterval(-0.6, -0.68),
      //   randomIntFromInterval(-1, -1.07),
      // ], position: [0, -40, 0]})
    }
  }, [selectedPart])

  return (
    <animated.group 
      // position={props.position} 
      // rotation={[-1,-0.8,-1]}
      // rotation={props.rotation}
      // rotation={[-3,-3.14,-3.14]} 
    >
      <primitive object={gltf.scene} />

      {/* {diskRef.current && (
        <animated.primitive 
          object={diskRef.current} 
          position={diskSpringProps.position}
          scale={[1, 0.1, 1]}
        />
      )} */}
    </animated.group>
  )
}

export default Explore;

// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { EffectComposer, Bloom, Glitch } from '@react-three/postprocessing';
// import { BlendFunction } from 'postprocessing';

// function AnimatedBlob({ position, color }) {
//   const mesh = useRef();

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();
//     mesh.current.position.x = position[0] + Math.sin(time * 0.5) * 2;
//     mesh.current.position.y = position[1] + Math.cos(time * 0.5) * 2;
//     mesh.current.scale.x = 1 + Math.sin(time * 1.5) * 0.3;
//     mesh.current.scale.y = 1 + Math.cos(time * 1.5) * 0.3;
//   });

//   return (
//     <mesh ref={mesh} position={position}>
//       <sphereGeometry args={[1.5, 32, 32]} />
//       <meshStandardMaterial color={color} transparent opacity={0.3} roughness={0.9} />
//     </mesh>
//   );
// }

// const Child = () => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <AnimatedBlob position={[0, 1, -1]} color="blue" />
//       <AnimatedBlob position={[6, -4, 0]} color="red" />
//       <AnimatedBlob position={[-4, -4, -4]} color="green" />
//     </>
//   );
// };

// const Background = () => {

//   return (
//     <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '100%' }} camera={{ position: [0, 0, 10], fov: 75 }}>
//       <Child />
//       <EffectComposer>
//         <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
//         <Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} />
//       </EffectComposer>
//     </Canvas>
//   );
// };

// export default Background;





