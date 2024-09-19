import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Trophy = (props) => {
    const trophy = useGLTF("./trophy/scene.gltf");
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
            <primitive object={trophy.scene} scale={2.5} position={[0, -2.75, 0]} />
        </mesh>
    );
};

const TrophyCanvas = () => {

    return (
        <Canvas>
            <ambientLight />
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} autoRotate />
                <Trophy />
            </Suspense>
            <Environment preset='lobby' />

            <Preload all />
        </Canvas>
    );
};

export default TrophyCanvas;