import { useRef, useMemo } from "react";
import type React from "react";
import { useCubeAnimation } from "./useCubeAnimation";
import { useCubeTextures } from "./useCubeTextures";
import { useBounceAnimation } from "./useBounceAnimation";
import { iconColors } from "../config/iconColors";
import * as THREE from "three";
import type { Group, Mesh, Texture } from "three";

interface TechCubeProps {
  bounceEnabled?: boolean;
  bounceSpeed?: number;
  bounceSquash?: number;
}

export default function TechCube({
  bounceEnabled = true,
  bounceSpeed = 1,
  bounceSquash = 0.1,
}: TechCubeProps) {
  const groupRef = useRef<Group>(null);
  const shadowRef = useRef<Mesh>(null);

  const { activeTextures, activeIndices, handleFaceChange } = useCubeTextures();

  // Wrap handleFaceChange to also update shadow color
  const onFaceChange = (faceIndex: number) => {
    handleFaceChange(faceIndex);

    // Update shadow color
    if (shadowRef.current) {
      const iconIndex = activeIndices[faceIndex];
      const color = iconColors[iconIndex] || "#000000";
      (shadowRef.current.material as THREE.MeshBasicMaterial).color.set(color);
    }
  };

  const cubeRef = useCubeAnimation(onFaceChange);

  useBounceAnimation(groupRef, {
    enabled: bounceEnabled,
    speed: bounceSpeed,
    height: 1.2,
    squashAmount: bounceSquash,
    shadowRef: shadowRef,
  });

  // Create a simple circular shadow texture
  const shadowTexture: Texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  return (
    <group>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <group ref={groupRef as any}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <mesh ref={cubeRef as any}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          {activeTextures.map((texture, index) => (
            <meshStandardMaterial
              key={index}
              attach={`material-${index}`}
              map={texture}
              color="white"
              roughness={0.2}
              metalness={0.1}
              transparent
            />
          ))}
        </mesh>
      </group>
      {/* Shadow */}
      <mesh
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={shadowRef as any}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3.5, 0]}
      >
        <planeGeometry args={[1.5, 0.5]} />
        <meshBasicMaterial
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          map={shadowTexture as any}
          transparent
          opacity={0.1}
          color="black" // Initial color
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
