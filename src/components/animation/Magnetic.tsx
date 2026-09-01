"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useCursor } from "@/context/CursorContext";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export default function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const { setActiveType } = useCursor();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const child = childRef.current;
    if (!wrapper || !child) return;

    // Check if we are on a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const xTo = gsap.quickTo(child, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(child, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Calculate position relative to the static wrapper to avoid jitter loop
      const { height, width, left, top } = wrapper.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      setActiveType("default");
    };

    const handleMouseEnter = () => {
      setActiveType("magnetic");
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);
    wrapper.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [strength, setActiveType]);

  // Wrap the child element so the event listener applies to the static bounding box
  return (
    <div ref={wrapperRef} className="inline-block relative">
      {React.cloneElement(children, { ref: childRef })}
    </div>
  );
}
