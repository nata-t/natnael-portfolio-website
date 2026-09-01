"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import GostAnimation from "@/assets/ghost-animation.gif";
import { useCursor } from "@/context/CursorContext";
import gsap from "gsap";
import { useRef, useEffect } from "react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    linkDisabled: boolean;
    source: string;
    sourceDisabled: boolean;
    wip: boolean;
    slug?: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  const { setActiveType } = useCursor();
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Derive slug from title if not explicitly provided
  const slug = value.slug || value.title.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    if (!cardRef.current) return;

    // Setup hover reveal animation using a subtle scale/fade technique
    const el = cardRef.current;

    const hoverTl = gsap.timeline({ paused: true });

    hoverTl.to(el, {
      y: -10,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      duration: 0.4,
      ease: "power3.out"
    });

    const handleMouseEnter = () => {
      hoverTl.play();
      setActiveType("view");
    };

    const handleMouseLeave = () => {
      hoverTl.reverse();
      setActiveType("default");
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [setActiveType]);

  return (
    <div
      className="max-w-[32%] max-lg:max-w-full relative group"
      ref={cardRef}
    >
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-10" />
      <Card className="flex h-full w-full flex-col border-2 overflow-hidden transition-colors hover:border-primary/50" data-flip-id={`project-${slug}`}>
        <CardHeader className="pb-2 relative z-20 pointer-events-none">
          <div className="flex items-center justify-between gap-2">
            <CardTitle ref={titleRef} className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
              {value.title}
            </CardTitle>
            {value.wip && (
              <Badge
                variant="secondary"
                className="flex w-16 shrink-0 items-center justify-center bg-black px-0 text-white hover:bg-black hover:text-white"
              >
                <img
                  src={GostAnimation.src ?? GostAnimation}
                  alt="ghost"
                  className="h-6 w-6"
                />
                WIP
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex flex-grow flex-col gap-4 relative z-20 pointer-events-none">
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles =
                {
                  "Next.js":
                    "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
                  Nextjs:
                    "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
                  Freelancing:
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                  "Shadcn UI":
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                  "Shadcn Ui":
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                  Typescript:
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                  TanStack:
                    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
                  MySQL:
                    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                  Zustand:
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                  Supabase:
                    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
                  Npx: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
                  Library:
                    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                  Zod: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
                  "React Hook Form":
                    "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
                  Vue: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                  NestJS:
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                  PostgreSQL:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                  Prisma:
                    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                  Paina:
                    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                  Figma:
                    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                  Express:
                    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
                  PrimeVue:
                    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                  React:
                    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                  "React Query":
                    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
                  "Socket.IO":
                    "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
                  GSAP: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                  Vuex: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                  "TanStack Router":
                    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
                  "TanStack Table":
                    "bg-indigo-200 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
                }[tag] ||
                "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";

              return (
                <span
                  key={index}
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tagStyles}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="flex items-start gap-4 pt-2 relative z-20 pointer-events-none opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-sm font-semibold text-primary underline underline-offset-4 flex items-center gap-1">
            Read Case Study <ArrowUpRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCards;
