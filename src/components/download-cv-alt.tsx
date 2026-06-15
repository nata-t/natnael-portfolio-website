"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.4, 64]} />
        <MeshDistortMaterial
          color="#6366f1"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.7}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={1.5}
        maxPolarAngle={Math.PI / 2 + 0.1}
        minPolarAngle={Math.PI / 2 - 0.1}
      />
    </group>
  );
}

export default function DownloadCVAlt() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} className="relative h-full w-full min-w-[300px] flex items-center justify-center transition-all duration-500">
      <div className="absolute inset-0 z-0">
        {isInView && (
          <Canvas camera={{ position: [0, 0, 6.0], fov: 45 }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        )}
      </div>

      <div className="absolute z-10 flex flex-col items-center justify-center pointer-events-none p-6 text-center">
        <motion.h3 
          className="text-2xl font-bold text-white mb-6 drop-shadow-lg tracking-wide max-w-[250px]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Download My Full Resume
        </motion.h3>
        
        <motion.a
          href="/Natnael_Tadele_Technical_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-8 py-4 font-semibold text-white shadow-xl transition-colors hover:bg-white/20 border border-white/20 relative overflow-hidden group/btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
          
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="whitespace-nowrap">Download CV</span>
        </motion.a>
      </div>
    </div>
  );
}
