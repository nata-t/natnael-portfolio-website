import FramerWrapper from "@/components/animation/FramerWrapper";
import ProjectCards from "@/components/ProjectsCard";
import MotionDiv from "@/components/motion-div";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    // PROJECT PAGE
    <div
      id="projects"
      className="relative flex h-full w-full flex-col items-center gap-5 overflow-hidden"
    >
      <MotionDiv>
        <h2 className="mb-4  md:mb-12">My Projects</h2>
      </MotionDiv>
      <div className="flex flex-col gap-3 md:mb-8">
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins w-full text-lg text-primary max-sm:text-base">
            This section showcases a carefully curated selection of my technical
            projects and software development work. Each project demonstrates my
            commitment to delivering high-quality solutions, technical
            expertise, and innovative problem-solving approaches. I invite you
            to explore these implementations that reflect my professional growth
            and technical capabilities.
          </p>
        </FramerWrapper>
      </div>

      <div className=" flex w-full flex-row flex-wrap gap-3 max-lg:flex-col">
        {portfolioConfig.projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
