"use client";

import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";
import ShaderBackground from "@/three/ShaderBackground";
import { useTextReveal } from "@/lib/useTextReveal";
import { useCursor } from "@/context/CursorContext";

export default function Hero() {
  const headlineRef = useTextReveal(0.2);
  const sublineRef = useTextReveal(0.8);
  const { setActiveType } = useCursor();

  return (
    <section
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setActiveType("default")}
    >
      <ShaderBackground />

      <div className="z-10 flex flex-col items-center justify-center text-center">
        <h1
          ref={headlineRef}
          className="mb-6 text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          Hi, I&apos;m Natnael Tadele!
        </h1>

        <h2
          ref={sublineRef}
          className="mb-12 mt-4 text-2xl font-light text-muted-foreground sm:text-3xl md:text-4xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          Creative Developer 👨‍💻
        </h2>

        <div className="mt-8 flex w-full flex-col gap-4 text-center lg:w-[60%]">
          <MotionDiv delayOffset={1.2}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Welcome to my digital playground.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={1.4}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A passionate <b className="text-primary">✨ TYPESCRIPT and GOLANG full-stack </b> developer
              focused on immersive experiences and interactive web design.
            </p>
          </MotionDiv>
        </div>

        <div className="mt-12">
          <ContactList delayOffset={1.6} showWhenInView={false} />
        </div>
      </div>
    </section>
  );
}
