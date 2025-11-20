"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Bounds,
} from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

interface ModelProps {
  url: string;
  scale?: number;
  initialPosition?: [number, number, number];
  disableVerticalRotation?: boolean;
  disableHorizontalRotation?: boolean;
}

function Model({
  url,
  scale = 1,
  initialPosition = [0, 0, 0],
  disableVerticalRotation = false,
  disableHorizontalRotation = false,
}: ModelProps) {
  const { scene } = useGLTF(url);
  const modelRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const isInitialized = useRef(false);
  const baseRotation = useRef<[number, number, number]>([...initialPosition]);

  // Set initial rotation when scene is loaded
  useEffect(() => {
    if (scene && !isInitialized.current) {
      scene.rotation.set(
        initialPosition[0],
        initialPosition[1],
        initialPosition[2],
      );
      baseRotation.current = [...initialPosition];
      isInitialized.current = true;
    }
  }, [scene, initialPosition]);

  // Sync model rotation with camera orbit and lock axes
  useFrame(() => {
    if (modelRef.current && scene && camera) {
      // Get camera's spherical coordinates relative to origin
      const spherical = new THREE.Spherical();
      const cameraPos = camera.position.clone();
      spherical.setFromVector3(cameraPos);

      // Convert camera orbit to model rotation
      // Theta (azimuth) controls Y rotation (horizontal spinning)
      // Phi (polar) controls X rotation (vertical tilting)

      if (!disableHorizontalRotation) {
        // Allow Y rotation based on camera azimuth
        modelRef.current.rotation.y = baseRotation.current[1] - spherical.theta;
      } else {
        // Lock Y rotation to initial
        modelRef.current.rotation.y = baseRotation.current[1];
      }

      if (!disableVerticalRotation) {
        // Allow X rotation based on camera polar angle
        modelRef.current.rotation.x =
          baseRotation.current[0] + (Math.PI / 2 - spherical.phi);
      } else {
        // Lock X rotation to initial
        modelRef.current.rotation.x = baseRotation.current[0];
      }

      // Always lock Z rotation to initial
      modelRef.current.rotation.z = baseRotation.current[2];
    }
  });

  return (
    <Bounds fit clip observe margin={1.5}>
      <primitive
        ref={modelRef}
        object={scene}
        scale={scale}
        position={[0, 0, 0]}
      />
    </Bounds>
  );
}

interface Hero3DModelProps {
  scale?: number;
  className?: string;
  disableVerticalRotation?: boolean;
  disableHorizontalRotation?: boolean;
  initialPosition?: [number, number, number]; // [rotationX, rotationY, rotationZ] in radians
}

export default function Hero3DModel({
  scale = 1,
  className,
  disableVerticalRotation = false,
  disableHorizontalRotation = false,
  initialPosition = [0, 0, 0],
}: Hero3DModelProps) {
  return (
    <div
      className={`h-[400px] w-full md:h-[500px] md:w-[500px] ${className || ""}`}
      style={{ overflow: "visible" }}
    >
      <Canvas
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Model
          url="/spaceman.glb"
          scale={scale}
          initialPosition={initialPosition}
          disableVerticalRotation={disableVerticalRotation}
          disableHorizontalRotation={disableHorizontalRotation}
        />
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
