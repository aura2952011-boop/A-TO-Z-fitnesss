import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, MeshWobbleMaterial, Text } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

const FloatingSphere = () => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[-2, 1, 0]}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#333"
                    speed={3}
                    distort={0.4}
                    radius={1}
                />
            </mesh>
        </Float>
    );
};

const FloatingBox = () => {
    const meshRef = useRef();
    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    });

    return (
        <Float speed={3} rotationIntensity={2} floatIntensity={1}>
            <mesh ref={meshRef} position={[2, -1, 0]}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <MeshWobbleMaterial
                    color="#ffffff"
                    factor={0.6}
                    speed={2}
                />
            </mesh>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />

                <FloatingSphere />
                <FloatingBox />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
