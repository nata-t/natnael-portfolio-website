import { useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useCubeAnimation(onFaceChange: (faceIndex: number) => void) {
  const cubeRef = useRef<THREE.Mesh>(null!);

  useGSAP(
    () => {
      if (!cubeRef.current) return;

      const tl = gsap.timeline({ repeat: -1 });
      const duration = 1.0;
      const pause = 0.5;

      // --- GEOMETRY DEFINITIONS ---

      // Face Normals (in local space)
      // 0: Right (+x), 1: Left (-x), 2: Top (+y), 3: Bottom (-y), 4: Front (+z), 5: Back (-z)
      const faces = [
        new THREE.Vector3(1, 0, 0), // 0
        new THREE.Vector3(-1, 0, 0), // 1
        new THREE.Vector3(0, 1, 0), // 2
        new THREE.Vector3(0, -1, 0), // 3
        new THREE.Vector3(0, 0, 1), // 4
        new THREE.Vector3(0, 0, -1), // 5
      ];

      // Ideal Quaternions for each face to be "Upright" facing camera (+Z)
      const idealQuaternions = [
        new THREE.Quaternion().setFromEuler(
          new THREE.Euler(0, -Math.PI / 2, 0),
        ), // 0: Right -> Rotate Y -90
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0)), // 1: Left -> Rotate Y +90
        new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2, 0, 0)), // 2: Top -> Rotate X +90
        new THREE.Quaternion().setFromEuler(
          new THREE.Euler(-Math.PI / 2, 0, 0),
        ), // 3: Bottom -> Rotate X -90
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0)), // 4: Front -> Identity
        new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0)), // 5: Back -> Rotate Y 180
      ];

      // Corners (normalized vectors)
      const corners: THREE.Vector3[] = [];
      for (let x of [-1, 1]) {
        for (let y of [-1, 1]) {
          for (let z of [-1, 1]) {
            corners.push(new THREE.Vector3(x, y, z).normalize());
          }
        }
      }

      // --- STATE ---
      let currentFaceIndex = 4; // Start at Front (+z)

      // Helper to get random item
      const pickRandom = <T>(arr: T[]): T =>
        arr[Math.floor(Math.random() * arr.length)];

      // Helper to find corners adjacent to a face
      const getAdjacentCorners = (faceIdx: number) => {
        const faceNormal = faces[faceIdx];
        return corners.filter((c) => c.dot(faceNormal) > 0.5);
      };

      // Helper to find faces adjacent to a corner
      const getAdjacentFaces = (corner: THREE.Vector3) => {
        return faces
          .map((n, i) => ({ n, i }))
          .filter(({ n }) => n.dot(corner) > 0.5)
          .map(({ i }) => i);
      };

      // --- ANIMATION LOOP ---

      const animateToCorner = () => {
        const validCorners = getAdjacentCorners(currentFaceIndex);
        const targetCornerLocal = pickRandom(validCorners);

        // Calculate target rotation for the corner
        // Start from the PERFECT current face orientation (to avoid drift)
        const qCurrentIdeal = idealQuaternions[currentFaceIndex].clone();

        // Where is the corner pointing when we are at the ideal face orientation?
        const vCornerWorld = targetCornerLocal
          .clone()
          .applyQuaternion(qCurrentIdeal);

        // We want to rotate so vCornerWorld points to +Z (Camera)
        const qDelta = new THREE.Quaternion().setFromUnitVectors(
          vCornerWorld,
          new THREE.Vector3(0, 0, 1),
        );
        const qNext = qDelta.multiply(qCurrentIdeal);

        const proxy = { t: 0 };
        // We start animation from the ACTUAL current rotation (which might be slightly off due to float errors, but slerp handles it)
        const qStart = cubeRef.current.quaternion.clone();

        gsap.to(proxy, {
          t: 1,
          duration: duration,
          ease: "power2.inOut",
          onUpdate: () => {
            cubeRef.current.quaternion.slerpQuaternions(qStart, qNext, proxy.t);
          },
          onComplete: () => {
            gsap.delayedCall(pause, () => animateToFace(targetCornerLocal));
          },
        });
      };

      const animateToFace = (currentCornerLocal: THREE.Vector3) => {
        const validFaces = getAdjacentFaces(currentCornerLocal);
        const nextFaces = validFaces.filter((f) => f !== currentFaceIndex);
        const nextFaceIndex = pickRandom(
          nextFaces.length > 0 ? nextFaces : validFaces,
        );

        // Target is simply the Ideal Quaternion for the next face
        // This forces the cube to be upright
        const qNext = idealQuaternions[nextFaceIndex];

        const proxy = { t: 0 };
        const qStart = cubeRef.current.quaternion.clone();

        gsap.to(proxy, {
          t: 1,
          duration: duration,
          ease: "power2.inOut",
          onUpdate: () => {
            cubeRef.current.quaternion.slerpQuaternions(qStart, qNext, proxy.t);
          },
          onComplete: () => {
            currentFaceIndex = nextFaceIndex;
            onFaceChange(currentFaceIndex);
            gsap.delayedCall(pause, animateToCorner);
          },
        });
      };

      // Start the loop
      // Ensure we start at the ideal orientation for the initial face
      cubeRef.current.quaternion.copy(idealQuaternions[currentFaceIndex]);
      gsap.delayedCall(pause, animateToCorner);
    },
    { scope: cubeRef },
  );

  return cubeRef;
}
