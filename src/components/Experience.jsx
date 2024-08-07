import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Overlay from "./Overlay.jsx";

function Experience() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [
            -0.7048058313931937, 1.196140302329552, 14.733101010013257,
          ],
          fov: 25,
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          intensity={2}
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        <directionalLight
          intensity={2}
          position={[5, 10, 15]}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        {/* <rectAreaLight
          intensity={5}
          position={[0, 0, 5]}
          width={100}
          height={100}
        /> */}
        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
        <Environment preset="dawn" />
        <Overlay />
      </Canvas>
    </div>
  );
}

export default Experience;
