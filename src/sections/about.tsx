"use client";

import MotionDiv from "@/components/motion-div";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const DownloadCVAlt = dynamic(() => import("@/components/download-cv-alt"), { ssr: false });

export default function About() {
  const textRef1 = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);
  const textRef3 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const refs = [textRef1, textRef2, textRef3];

    refs.forEach((ref) => {
      if (!ref.current) return;
      const split = new SplitType(ref.current, { types: "words" });

      if (split.words) {
        gsap.fromTo(
          split.words,
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-8 w-full text-left text-3xl font-bold tracking-tight md:text-5xl">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-8 text-xl md:text-2xl">
          <p ref={textRef1} className="leading-relaxed font-light text-muted-foreground">
            Hello, I&apos;m Natnael Tadele, a passionate{" "}
            <b className="text-primary font-medium">Full-Stack Web Developer</b> based in Addis Ababa, Ethiopia. I
            graduated with a degree in Computer Science in July 2024.
          </p>
          <p ref={textRef2} className="leading-relaxed font-light text-muted-foreground">
            With about three years of professional web development experience,
            I have worked extensively with various libraries, frameworks, and
            tools. I am particularly passionate about UI/UX design using Figma
            and full-stack development. I love creating elegant solutions and
            learning new technologies to enhance my development skills.
          </p>
          <p ref={textRef3} className="leading-relaxed font-light text-muted-foreground">
            My journey in development has been driven by my love for creating
            impactful applications. I enjoy the entire development process,
            from designing intuitive user interfaces to implementing robust
            backend solutions. I am constantly seeking opportunities to grow
            and contribute to meaningful projects that can make a difference
            in people&apos;s lives.
          </p>
        </article>
      </div>
      <div className="flex h-[520px] flex-col items-center justify-center lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4} className="h-full w-full flex items-center justify-center">
          <DownloadCVAlt />
        </MotionDiv>

        {/* <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpeg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv> */}
       {/* <MotionDiv delayOffset={0.4}>
           <img
            src="/photo.jpeg"
            alt="photo"
            /> 
          <div className="h-[350px] w-[350px] min-w-[300px] rounded-xl transition-all">
            <CanvasSection />
          </div>
        </MotionDiv>*/}
      </div>
    </section>
  );
}
