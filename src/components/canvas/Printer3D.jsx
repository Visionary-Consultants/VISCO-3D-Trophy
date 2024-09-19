import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Printer3D = (props) => {
    const printer = useGLTF("./3dPrinter/scene.gltf");
    const mesh = useRef();

    return (
        <mesh href={mesh} props={props}>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <spotLight
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive object={printer.scene} scale={0.05} position={[0, -2, 0]} rotation={[0, Math.PI / 0.55, 0]} />
        </mesh>
    );
};

const Printer3dCanvas = () => {

    return (
        <Canvas>
            <ambientLight />
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} />
                <Printer3D />
            </Suspense>
            <Environment preset='sunset' />

            <Preload all />
        </Canvas>
    );
};

export default Printer3dCanvas;