"use client";

import { Canvas } from "@react-three/fiber";
import TechCube from "./TechCube";
import Lights from "./Lights";
import { Suspense } from "react";

function CanvasSection() {
  return (
    <div id="canvas-container" className="h-full w-full">
      <Canvas>
        <Suspense fallback={null}>
          <Lights />
          <TechCube />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CanvasSection;
