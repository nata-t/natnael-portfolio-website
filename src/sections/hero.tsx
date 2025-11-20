import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Memoji from "@/components/memoji";
import SpacemanCanvas from "@/components/Spaceman";

import Hero3DModel from "@/components/hero-3d-model";
import { useRef } from "react";
export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Natnael Tadele! 👋</MotionText>
      </h1>
      {/* <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <Memoji />
        </MotionDiv>
      </div> */}

      {/* 3d model */}
      {/* <div className="">
        <MotionDiv delayOffset={0.4}>
          <Hero3DModel
            scale={1.5}
            // initialPosition={[0, -Math.PI / 50, 0]}
            disableVerticalRotation={true}
            disableHorizontalRotation={true}
          />
        </MotionDiv>
      </div> */}
      {/* <div className="h-60">
        <SpacemanCanvas />
      </div> */}
      <h1 className="mt-8">
        <MotionDiv delayOffset={0.8}>Web Developer 👨‍💻</MotionDiv>
      </h1>

      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            A passionate<b> ✨ TypeScript Full-Stack </b>developer dedicated to
            crafting innovative solutions.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
