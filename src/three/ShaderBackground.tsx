"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  void main() {
    vec2 st = vUv;

    // Create a subtle fluid gradient effect
    float d = distance(st, uMouse);
    float glow = 0.05 / (d + 0.05);

    vec3 color1 = vec3(0.05, 0.05, 0.1);
    vec3 color2 = vec3(0.15, 0.1, 0.2);

    vec3 mixedColor = mix(color1, color2, sin(uTime * 0.2 + st.x * 3.0 + st.y * 3.0) * 0.5 + 0.5);

    // Add mouse interaction glow
    mixedColor += vec3(0.2, 0.3, 0.5) * glow * 0.5;

    gl_FragColor = vec4(mixedColor, 1.0);
  }
`;

function BackgroundPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom uniform to hold mouse and time
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) }
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;

      // Interpolate mouse movement smoothly
      const mx = (state.pointer.x + 1) / 2;
      const my = (state.pointer.y + 1) / 2; // inverted y since UV is bottom-up typically but we just want an effect

      materialRef.current.uniforms.uMouse.value.x = MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.x,
        mx,
        0.05
      );
      materialRef.current.uniforms.uMouse.value.y = MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.y,
        my,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden opacity-40">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false }}
        dpr={[1, 1.5]} // optimize pixel ratio
      >
        <BackgroundPlane />
      </Canvas>
    </div>
  );
}
