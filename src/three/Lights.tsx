import { useRef } from "react";
import type React from "react";
import { useFrame } from "@react-three/fiber";
import type { DirectionalLight } from "three";

export default function Lights() {
  const lightRef = useRef<DirectionalLight>(null);

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 5 + 5;
      lightRef.current.position.y = state.mouse.y * 5 + 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={lightRef as any}
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.5}
        color="#b0c4de"
      />
    </>
  );
}
