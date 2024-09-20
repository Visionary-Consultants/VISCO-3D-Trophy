import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, Point, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random"
import { MathUtils } from 'three'


const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));
    const positions = Array.from({ length: 10 }, (i) => [
        MathUtils.randFloatSpread(8),
        MathUtils.randFloatSpread(8),
        MathUtils.randFloatSpread(8),
    ])

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

function PointEvent({ index, ...props }) {
    const [hovered, setHover] = useState(false)
    const [clicked, setClick] = useState(false)
    return (
        <Point
            {...props}
            color={clicked ? 'lightblue' : hovered ? 'hotpink' : 'orange'}
            onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
            onPointerOut={(e) => setHover(false)}
            onClick={(e) => (e.stopPropagation(), setClick((state) => !state))}></Point>
    )
};

const StarsCanvas = () => {

    return (
        <div className='w-full absolute h-auto inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;