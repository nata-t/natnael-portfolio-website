import { useTexture } from "@react-three/drei";
import { useState, useMemo } from "react";
import * as THREE from "three";

// Import icons statically
import reactIcon from "@/assets/icons/react.png";
import nextIcon from "@/assets/icons/next-js.png";
import tsIcon from "@/assets/icons/typescript.png";
import jsIcon from "@/assets/icons/javascript.png";
import nodeIcon from "@/assets/icons/nodejs.png";
import htmlIcon from "@/assets/icons/html5.png";
import tailwindIcon from "@/assets/icons/tailwindcss.png";
import prismaIcon from "@/assets/icons/prisma.png";
import postgresIcon from "@/assets/icons/postgres.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import linuxIcon from "@/assets/icons/linux.svg";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import csharpIcon from "@/assets/icons/csharp.svg";
import vueIcon from "@/assets/icons/vue.png";
import nuxtIcon from "@/assets/icons/nuxt.svg";
import nestIcon from "@/assets/icons/nest-js.png";
import expressIcon from "@/assets/icons/express-js.png";
import mongoIcon from "@/assets/icons/mongoDB.svg";
import redisIcon from "@/assets/icons/redis.png";
import framerIcon from "@/assets/icons/framer-motion.png";
import viteIcon from "@/assets/icons/vite.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import ubuntuIcon from "@/assets/icons/ubuntu.svg";

const iconUrls = [
  reactIcon,
  nextIcon,
  tsIcon,
  jsIcon,
  nodeIcon,
  htmlIcon,
  tailwindIcon,
  prismaIcon,
  postgresIcon,
  dockerIcon,
  gitIcon,
  githubIcon,
  linuxIcon,
  pythonIcon,
  javaIcon,
  csharpIcon,
  vueIcon,
  nuxtIcon,
  nestIcon,
  expressIcon,
  mongoIcon,
  redisIcon,
  framerIcon,
  viteIcon,
  vscodeIcon,
  ubuntuIcon,
];

export function useCubeTextures() {
  // Load all textures
  const textures = useTexture(iconUrls.map((icon) => icon.src || icon));

  // Configure textures
  useMemo(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
    });
  }, [textures]);

  // Initial assignment for 6 faces
  const [activeIndices, setActiveIndices] = useState<number[]>(() => {
    const indices: number[] = [];
    for (let i = 0; i < 6; i++) {
      indices.push(i % textures.length);
    }
    return indices;
  });

  const handleFaceChange = (visibleFaceIndex: number) => {
    // Determine hidden face (opposite to visible)
    // BoxGeometry: 0:+x, 1:-x, 2:+y, 3:-y, 4:+z, 5:-z
    // Pairs: (0,1), (2,3), (4,5)
    const oppositeMap = [1, 0, 3, 2, 5, 4];
    const hiddenFaceIndex = oppositeMap[visibleFaceIndex];

    if (hiddenFaceIndex === undefined) return;

    setActiveIndices((current) => {
      const newIndices = [...current];

      // Pick a new texture that is NOT currently displayed
      let newTextureIndex = -1;
      let attempts = 0;
      while (attempts < 50) {
        const r = Math.floor(Math.random() * textures.length);
        if (!current.includes(r)) {
          newTextureIndex = r;
          break;
        }
        attempts++;
      }

      // If we found a new one, swap it
      if (newTextureIndex !== -1) {
        newIndices[hiddenFaceIndex] = newTextureIndex;
      }

      return newIndices;
    });
  };

  const activeTextures = activeIndices.map((i) => textures[i]);

  return { activeTextures, activeIndices, handleFaceChange };
}
