"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

export function useTextReveal(delay: number = 0) {
  const textRef = useRef<HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into characters
    const text = new SplitType(textRef.current, { types: "lines,words,chars" });

    // Animate characters
    if (text.chars) {
      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: "power3.out",
          delay,
        }
      );
    }

    // Cleanup SplitType on unmount
    return () => {
      text.revert();
    };
  }, [delay]);

  return textRef;
}
