import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";
import * as THREE from "three";

interface UseBounceAnimationProps {
  enabled?: boolean;
  speed?: number;
  height?: number;
  squashAmount?: number;
  shadowRef?: RefObject<THREE.Mesh>;
}

export function useBounceAnimation(
  ref: RefObject<THREE.Object3D>,
  {
    enabled = true,
    speed = 1.0,
    height = 1.5,
    squashAmount = 0.15,
    shadowRef,
  }: UseBounceAnimationProps,
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      // Kill any existing bounce tweens
      gsap.killTweensOf(ref.current.position);
      gsap.killTweensOf(ref.current.scale);
      if (shadowRef?.current) {
        gsap.killTweensOf(shadowRef.current.scale);
        gsap.killTweensOf(shadowRef.current.material);
      }

      if (enabled) {
        const tl = gsap.timeline({ repeat: -1 });

        // Adjust duration based on speed
        const jumpDuration = 0.5 / speed;
        const fallDuration = 0.4 / speed;
        const squashDuration = 0.15 / speed;

        // Calculate scale factors
        const squashY = 1 - squashAmount;
        const squashXZ = 1 + squashAmount;
        const stretchY = 1 + squashAmount / 2;
        const stretchXZ = 1 - squashAmount / 2;

        // 1. Jump Up
        tl.to(
          ref.current.position,
          {
            y: height,
            duration: jumpDuration,
            ease: "circ.out",
          },
          "jump",
        );

        tl.to(
          ref.current.scale,
          {
            x: stretchXZ,
            y: stretchY,
            z: stretchXZ,
            duration: jumpDuration,
            ease: "power1.inOut",
          },
          "jump",
        );

        // Shadow shrinks and fades
        if (shadowRef?.current) {
          tl.to(
            shadowRef.current.scale,
            {
              x: 0.5,
              y: 0.5,
              z: 0.5,
              duration: jumpDuration,
              ease: "circ.out",
            },
            "jump",
          );
          tl.to(
            shadowRef.current.material,
            {
              opacity: 0.2,
              duration: jumpDuration,
              ease: "circ.out",
            },
            "jump",
          );
        }

        // 2. Fall Down
        tl.to(
          ref.current.position,
          {
            y: 0,
            duration: fallDuration,
            ease: "circ.in",
          },
          "fall",
        );

        tl.to(
          ref.current.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: fallDuration * 0.8,
            ease: "power1.inOut",
          },
          "fall",
        );

        // Shadow grows and darkens
        if (shadowRef?.current) {
          tl.to(
            shadowRef.current.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              duration: fallDuration,
              ease: "circ.in",
            },
            "fall",
          );
          tl.to(
            shadowRef.current.material,
            {
              opacity: 0.6,
              duration: fallDuration,
              ease: "circ.in",
            },
            "fall",
          );
        }

        // 3. Squash at bottom
        tl.to(
          ref.current.scale,
          {
            x: squashXZ,
            y: squashY,
            z: squashXZ,
            duration: squashDuration,
            ease: "power1.inOut",
          },
          "squash",
        );

        // Shadow spreads slightly
        if (shadowRef?.current) {
          tl.to(
            shadowRef.current.scale,
            {
              x: 1.1,
              y: 1.1,
              z: 1.1,
              duration: squashDuration,
              ease: "power1.inOut",
            },
            "squash",
          );
        }

        // 4. Recover from squash
        tl.to(
          ref.current.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            duration: squashDuration,
            ease: "power1.inOut",
          },
          "recover",
        );

        // Shadow recovers
        if (shadowRef?.current) {
          tl.to(
            shadowRef.current.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              duration: squashDuration,
              ease: "power1.inOut",
            },
            "recover",
          );
        }
      } else {
        // Reset if disabled
        gsap.to(ref.current.position, {
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(ref.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: "power2.out",
        });
        if (shadowRef?.current) {
          gsap.to(shadowRef.current.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(shadowRef.current.material, {
            opacity: 0.6,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      }
    },
    { scope: ref, dependencies: [enabled, speed, height, squashAmount] },
  );
}
