import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";
import CanvasSection from "../three/canvas";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p className="leading-loose">
              Hello, I&apos;m Natnael Tadele, a passionate{" "}
              <b>Full-Stack Web Developer</b> based in Addis Ababa, Ethiopia. I
              graduated with a degree in Computer Science in July 2024.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p className="leading-loose">
              With about three years of professional web development experience,
              I have worked extensively with various libraries, frameworks, and
              tools. I am particularly passionate about UI/UX design using Figma
              and full-stack development. I love creating elegant solutions and
              learning new technologies to enhance my development skills.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p className="leading-loose">
              My journey in development has been driven by my love for creating
              impactful applications. I enjoy the entire development process,
              from designing intuitive user interfaces to implementing robust
              backend solutions. I am constantly seeking opportunities to grow
              and contribute to meaningful projects that can make a difference
              in people&apos;s lives.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="flex h-[420px] flex-col items-center justify-center lg:order-2 lg:w-1/3">
        {/* <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpeg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv> */}
        <MotionDiv delayOffset={0.4}>
          {/* <img
            src="/photo.jpeg"
            alt="photo"
            /> */}
          <div className="h-[350px] w-[350px] min-w-[300px] rounded-xl transition-all">
            <CanvasSection />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
