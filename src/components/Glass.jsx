import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useState } from "react";
import * as THREE from "three";

const Glass = React.forwardRef((props, ref) => {
  const { camera } = useThree();
  const { nodes, materials } = useGLTF("/glass.glb");
  const [vec] = useState(() => new THREE.Vector3());

  // useFrame((state) => {
  //   state.camera.position.lerp(
  //     vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14),
  //     0.05
  //   );
  //   state.camera.lookAt(0, 0, 0);
  // });
  // console.log("camera value ", camera);
  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        geometry={nodes.bottle.geometry}
        material={materials.glass}
        position={[-0.001, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={16.69}
      />
      <mesh
        geometry={nodes["bottle-cap"].geometry}
        material={materials.plastic}
        position={[-0.001, 1.576, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={16.69}
      />
      <mesh
        geometry={nodes["bottle-label"].geometry}
        material={materials.plastic}
        position={[-0.001, 1.576, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={16.69}
      />
    </group>
  );
});

useGLTF.preload("/glass.glb");

export default Glass;
