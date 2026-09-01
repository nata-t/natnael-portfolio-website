"use client";

import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "react-use";

gsap.registerPlugin(ScrollTrigger);

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
import turborepoIcon from "@/assets/icons/turborepo.png";
import framerMotionIcon from "@/assets/icons/framer-motion.png";
import tanstack from "@/assets/icons/tanstack.png";
// Backend Development icons
import nodejsIcon from "@/assets/icons/nodejs.png";
import nestjsIcon from "@/assets/icons/nest-js.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import prismaIcon from "@/assets/icons/prisma.png";
import postgresIcon from "@/assets/icons/postgres.png";
import mysqlIcon from "@/assets/icons/mysql.svg";
import mongodbIcon from "@/assets/icons/mongoDB.svg";
import firebaseIcon from "@/assets/icons/firebase.svg";
import betterAuthIcon from "@/assets/icons/better-auth.png";
import trpcIcon from "@/assets/icons/trpc.png";
import redisIcon from "@/assets/icons/redis.png";
import golangIcon from "@/assets/icons/golang.png";
import ginIcon from "@/assets/icons/gin.png";
// DevOps icons
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import monorepoIcon from "@/assets/icons/monorepo.png";
import githubActionsIcon from "@/assets/icons/github-actions.png";
import linuxIcon from "@/assets/icons/linux.svg";
import jenkinsIcon from "@/assets/icons/jenkins.png";

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

export default function Skills() {
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
          name: "Type Script",
          icon: typescriptIcon,
        },
        {
          name: "Java Script",
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
          name: "Turborepo",
          icon: turborepoIcon,
        },
        {
          name: "Framer Motion",
          icon: framerMotionIcon,
        },
        {
          name: "TanStack",
          icon: tanstack,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Golang",
          icon: golangIcon,
        },
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
          name: "Gin",
          icon: ginIcon,
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
        {
          name: "Better Auth",
          icon: betterAuthIcon,
        },
        {
          name: "TRPC",
          icon: trpcIcon,
        },
        {
          name: "Redis",
          icon: redisIcon,
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
        {
          name: "Jenkins",
          icon: jenkinsIcon,
        },
      ],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const categories = gsap.utils.toArray('.skill-category') as HTMLElement[];

    // Create a pinned timeline where each category card stacks on top of each other
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${categories.length * 800}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    categories.forEach((category, i) => {
      // Set initial positions
      gsap.set(category, {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        zIndex: i,
        yPercent: i === 0 ? 0 : 100,
        scale: 1,
        transformOrigin: "top center",
      });

      // Animate in from bottom (except first)
      if (i !== 0) {
        tl.to(category, {
          yPercent: 0,
          ease: "none",
        }, i);
      }

      // Animate out (scale down) the previous cards to create a stacked deck look
      if (i > 0) {
        tl.to(categories.slice(0, i), {
          scale: (index) => 1 - ((i - index) * 0.05),
          y: (index) => (i - index) * -20,
          ease: "none"
        }, i);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isMobile]);

  return (
    <section id="skills" className="w-full">
      {/* Mobile view: Standard flow */}
      {isMobile ? (
        <div className="py-20 px-4">
          <MotionDiv>
            <h2 className="mb-12 text-4xl font-bold tracking-tighter text-center">
              My Toolkit
            </h2>
          </MotionDiv>
          <div className="flex flex-col gap-12">
            {data.map((category, index) => (
              <div key={index} className="flex flex-col rounded-3xl bg-primary/5 p-6 border border-primary/10">
                <h3 className="mb-6 text-2xl font-medium text-primary tracking-wide text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-4 justify-items-center">
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} icon={skill.icon} name={skill.name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop view: 3D Stacking Cards */
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
          {data.map((category, index) => (
            <div
              key={index}
              className={`skill-category absolute top-0 left-0 right-0 h-screen w-full flex items-center justify-center p-12 lg:p-24 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]`}
              style={{
                backgroundColor: index % 3 === 0 ? 'hsl(var(--background))' : index % 3 === 1 ? 'hsl(var(--primary) / 0.05)' : 'hsl(var(--secondary) / 0.5)',
                borderTop: '1px solid hsl(var(--primary) / 0.1)'
              }}
            >
              <div className="flex flex-col h-full w-full max-w-7xl relative pt-20">
                {index === 0 && (
                  <div className="absolute -top-10 left-0">
                    <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-4">My Toolkit</h2>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl">
                      A scroll-driven journey through the technologies I use.
                    </p>
                  </div>
                )}

                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-4xl lg:text-6xl font-medium text-primary tracking-tight mb-16 opacity-50">
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 justify-items-start">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} icon={skill.icon} name={skill.name} large />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function SkillItem({ icon, name, large = false }: { icon: string | import("next/image").StaticImageData; name: string, large?: boolean }) {
  return (
    <div className={`group flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-4 hover:scale-110`}>
      <div className={`flex items-center justify-center rounded-2xl bg-background p-4 shadow-sm ring-1 ring-primary/10 transition-shadow duration-300 group-hover:shadow-lg group-hover:ring-primary/30 ${large ? 'h-24 w-24' : 'h-16 w-16'}`}>
        <Image
          src={icon}
          alt={name}
          width={large ? 48 : 32}
          height={large ? 48 : 32}
          className="object-contain"
        />
      </div>
      <p className={`font-medium text-muted-foreground group-hover:text-primary transition-colors ${large ? 'text-lg' : 'text-sm'}`}>
        {name}
      </p>
    </div>
  );
}
