"use client";

import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Subtle fade and scale up effect for the entire section using ScrollTrigger
    gsap.fromTo(
      containerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="flex w-full flex-col overflow-hidden py-20 lg:px-10"
    >
      <MotionDiv>
        <h2 className="mb-16 text-3xl font-bold tracking-tight md:text-5xl text-center">
          My Toolkit
        </h2>
      </MotionDiv>

      <div
        ref={containerRef}
        className="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {data.map((item, index) => (
          <div key={index} className="flex flex-col rounded-3xl bg-primary/5 p-8 border border-primary/10 transition-colors hover:border-primary/20">
            <h3 className="mb-8 text-2xl font-medium text-primary tracking-wide border-b border-primary/20 pb-4 text-center md:text-left">
              {item.title}
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {item.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: string; name: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-110">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background p-3 shadow-sm ring-1 ring-primary/10 transition-shadow duration-300 group-hover:shadow-md group-hover:ring-primary/30">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
        {name}
      </p>
    </div>
  );
}
