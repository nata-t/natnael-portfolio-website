import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";

// Web Development icons
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import vueIcon from "@/assets/icons/vue.png";
import nuxtIcon from "@/assets/icons/nuxt.svg";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import pnpmIcon from "@/assets/icons/pnpm.png";
import viteIcon from "@/assets/icons/vite.png";
import aspnetIcon from "@/assets/icons/net.svg";
import nxIcon from "@/assets/icons/Nx.png";

// Backend Development icons
import nodejsIcon from "@/assets/icons/nodejs.png";
import nestjsIcon from "@/assets/icons/nest-js.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import prismaIcon from "@/assets/icons/prisma.png";
import postgresIcon from "@/assets/icons/postgres.png";
import mysqlIcon from "@/assets/icons/mysql.svg";
import mongodbIcon from "@/assets/icons/mongoDB.svg";
import firebaseIcon from "@/assets/icons/firebase.svg";

// DevOps icons
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import monorepoIcon from "@/assets/icons/monorepo.png";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import linuxIcon from "@/assets/icons/linux.svg";

// Programming Language icons
import typescriptIcon from "@/assets/icons/typescript.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import javaIcon from "@/assets/icons/java.png";
import csharpIcon from "@/assets/icons/csharp.svg";

// Tools & Environment icons
import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import macosIcon from "@/assets/icons/macos.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import arcIcon from "@/assets/icons/arc.png";
import warpIcon from "@/assets/icons/warp.webp";
import insomniaIcon from "@/assets/icons/insomnia.png";
import postmanIcon from "@/assets/icons/postman.svg";
import davinciResolveIcon from "@/assets/icons/davinci-resolve.png";
import lightroomIcon from "@/assets/icons/lightroom.png";
import ExpoIcon from "@/assets/icons/expo.png";

export default function skills() {
  // Skills data organized by categories
  const data = [
    {
      title: "Web Development",
      skills: [
        {
          name: "React.js",
          icon: reactIcon,
        },
        {
          name: "Next.js",
          icon: nextjsIcon,
        },
        {
          name: "Vue.js",
          icon: vueIcon,
        },
        {
          name: "Nuxt.js",
          icon: nuxtIcon,
        },

        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },

        {
          name: "shadcn/ui",
          icon: shadcnuiIcon,
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
        },
        {
          name: "Vite",
          icon: viteIcon,
        },
        {
          name: "Nx",
          icon: nxIcon,
        },
        {
          name: "ASP.NET",
          icon: aspnetIcon,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Nest.js",
          icon: nestjsIcon,
        },
        {
          name: "Express.js",
          icon: expressjsIcon,
        },
        {
          name: "Node.js",
          icon: nodejsIcon,
        },
        {
          name: "Prisma ORM",
          icon: prismaIcon,
        },
        {
          name: "PostgreSQL",
          icon: postgresIcon,
        },
        {
          name: "MySQL",
          icon: mysqlIcon,
        },
        {
          name: "MongoDB",
          icon: mongodbIcon,
        },
        {
          name: "Firebase",
          icon: firebaseIcon,
        },
      ],
    },

    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub",
          icon: githubIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
        {
          name: "Monorepo",
          icon: monorepoIcon,
        },
        {
          name: "Docker",
          icon: dockerIcon,
        },
        {
          name: "Linux",
          icon: linuxIcon,
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "TypeScript",
          icon: typescriptIcon,
        },
        {
          name: "JavaScript",
          icon: javascriptIcon,
        },
        {
          name: "Java",
          icon: javaIcon,
        },
        {
          name: "C#",
          icon: csharpIcon,
        },
      ],
    },
    {
      title: "Tools & Environment",
      skills: [
        {
          name: "Ubuntu",
          icon: ubuntuIcon,
        },
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "Insomnia",
          icon: insomniaIcon,
        },
        {
          name: "Warp Terminal",
          icon: warpIcon,
        },
        {
          name: "Postman",
          icon: postmanIcon,
        },
      ],
    },
  ];

  return (
    // Skills section container
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      {/* Section heading with animation */}
      <MotionDiv>
        <h2 className="mb-4 md:mb-12">My Skills</h2>
      </MotionDiv>

      {/* Skill categories container */}
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:mb-14 md:px-2">
              {/* Category title */}
              <h3 className="mb-8">{item.title}</h3>

              {/* Animated list of skills */}
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

/**
 * Individual skill card component
 * @param icon - Path to the skill icon
 * @param name - Name of the skill
 */
function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
