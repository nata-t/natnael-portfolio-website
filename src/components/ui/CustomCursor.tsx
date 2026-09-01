"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { activeType } = useCursor();

  useEffect(() => {
    if (!cursorRef.current) return;

    // Check if we are on a touch device, if so hide the custom cursor completely
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursorRef.current.style.display = 'none';
      return;
    }

    // Initialize position off-screen
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm transition-all duration-300 ease-out",
        {
          "h-4 w-4": activeType === "default",
          "h-16 w-16 bg-primary/10": activeType === "magnetic",
          "h-24 w-24 bg-primary/80 text-primary-foreground": activeType === "view",
          "opacity-0": activeType === "hidden",
        }
      )}
    >
      {activeType === "view" && <span className="text-sm font-bold uppercase tracking-wider">View</span>}
    </div>
  );
}
