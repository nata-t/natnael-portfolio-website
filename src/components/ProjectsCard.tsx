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
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    source: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="flex h-full w-full flex-col border-2 transition-all duration-300 hover:shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-grow flex-col gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles =
                {
                  "Next.js": "bg-teal-100 text-teal-800",
                  Nextjs: "bg-teal-100 text-teal-800",
                  Freelancing: "bg-yellow-100 text-yellow-800",
                  "Shadcn UI": "bg-blue-100 text-blue-800",
                  "Shadcn Ui": "bg-blue-100 text-blue-800",
                  Typescript: "bg-red-100 text-red-800",
                  MySQL: "bg-orange-100 text-orange-800",
                  Zustand: "bg-purple-100 text-purple-800",
                  Supabase: "bg-emerald-100 text-emerald-800",
                  Npx: "bg-indigo-100 text-indigo-800",
                  Library: "bg-pink-100 text-pink-800",
                  Zod: "bg-cyan-100 text-cyan-800",
                  "React Hook Form": "bg-violet-100 text-violet-800",
                  Vue: "bg-green-100 text-green-800",
                  NestJS: "bg-red-100 text-red-800",
                  PostgreSQL: "bg-blue-100 text-blue-800",
                  Prisma: "bg-purple-100 text-purple-800",
                  Paina: "bg-yellow-100 text-yellow-800",
                  Figma: "bg-pink-100 text-pink-800",
                  Express: "bg-gray-100 text-gray-800",
                  PrimeVue: "bg-green-100 text-green-800",
                  React: "bg-blue-100 text-blue-800",
                  "React Query": "bg-red-100 text-red-800",
                  "Socket.IO": "bg-violet-100 text-violet-800",
                  GSAP: "bg-orange-100 text-orange-800",
                  Vuex: "bg-green-100 text-green-800",
                  "TanStack Router": "bg-indigo-100 text-indigo-800",
                  "TanStack Table": "bg-indigo-200 text-indigo-800",
                }[tag] || "bg-gray-100 text-gray-800";

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

        <CardFooter className="flex items-start gap-4 pt-2">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "group w-fit transition-all hover:translate-y-[-2px] hover:shadow-md",
            )}
          >
            Visit Project
            <ArrowUpRight className="ml-1 hidden h-4 w-4 -translate-x-2 transition-all duration-200 group-hover:block group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          <Link
            href={value.source}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "sm",
              }),
              "group w-fit transition-all hover:translate-y-[-2px] hover:shadow-md",
            )}
          >
            Source
            <ArrowUpRight className="ml-1 hidden h-4 w-4 -translate-x-2 transition-all duration-200 group-hover:block group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
