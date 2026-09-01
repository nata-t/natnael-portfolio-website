"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !galleryRef.current || images.length <= 1) return;

    // Only apply horizontal scroll logic on larger screens
    if (window.innerWidth < 768) return;

    const pinWrap = galleryRef.current;
    const pinWrapWidth = pinWrap.offsetWidth;
    const horizontalScrollLength = pinWrapWidth - window.innerWidth + 200; // Add padding

    if (horizontalScrollLength > 0) {
      gsap.to(pinWrap, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${horizontalScrollLength}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-primary/5 py-20">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-2xl font-bold md:text-4xl">Gallery</h3>
      </div>

      <div
        ref={galleryRef}
        className="flex w-max gap-8 px-8 md:px-[10vw]"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative h-[40vh] w-[80vw] overflow-hidden rounded-xl md:h-[60vh] md:w-[60vw]"
          >
            <div className="absolute inset-0 bg-muted/20 animate-pulse" />
            <img
              src={src}
              alt={`Project screenshot ${i + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
