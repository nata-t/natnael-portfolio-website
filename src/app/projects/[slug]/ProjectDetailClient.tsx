"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { portfolioConfig } from "@/config/portfolio.config";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTextReveal } from "@/lib/useTextReveal";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useCursor } from "@/context/CursorContext";
import { useTransition } from "@/context/TransitionContext";

gsap.registerPlugin(Flip);

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const { setActiveType } = useCursor();

  // Find project by matching derived slug
  const projectIndex = portfolioConfig.projects.findIndex(p => {
    const pSlug = p.title.toLowerCase().replace(/\s+/g, '-');
    return pSlug === slug || (p as { slug?: string }).slug === slug;
  });

  const project = portfolioConfig.projects[projectIndex];

  // Navigation for next project
  const nextProject = portfolioConfig.projects[(projectIndex + 1) % portfolioConfig.projects.length];
  const nextSlug = (nextProject as { slug?: string })?.slug || nextProject?.title.toLowerCase().replace(/\s+/g, '-');

  const { activeTransitionId, flipState, clearTransition } = useTransition();
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useTextReveal(0.1);
  const heroRef = useRef<HTMLDivElement>(null);
  const flipCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project || !flipCardRef.current) return;

    const transitionId = `project-${slug}`;

    // Orchestrate Flip transition if navigating from grid and we have the captured state
    if (activeTransitionId === transitionId && flipState) {
      // We animate the flip card container on this page to match the previous page's element
      Flip.from(flipState as Flip.FlipState, {
        targets: flipCardRef.current,
        duration: 0.8,
        ease: "power3.inOut",
        absolute: true,
        onComplete: () => {
          clearTransition();
          // Fade in hero content after flip completes
          gsap.fromTo(
            heroRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
          );
        }
      });
    } else {
      // Standard entry if navigated directly
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
  }, [project, slug, activeTransitionId, flipState, clearTransition]);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Button onClick={() => router.push("/")} variant="outline">
          Return Home
        </Button>
      </div>
    );
  }

  // Placeholder images for the gallery since we don't have real ones in config
  const mockImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
  ];

  return (
    <article className="min-h-screen pb-20 pt-32">
      {/* Back Button */}
      <div className="container mx-auto mb-12 px-4 lg:px-28">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          onMouseEnter={() => setActiveType("magnetic")}
          onMouseLeave={() => setActiveType("default")}
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 lg:px-28" ref={headerRef}>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
              {tag}
            </Badge>
          ))}
        </div>

        <div ref={flipCardRef} data-flip-id={`project-${slug}`} className="mb-8">
          <h1
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            {project.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {!project.linkDisabled && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <Button magnetic className="group">
                Live Site
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
          {!project.sourceDisabled && (
            <Link href={project.source} target="_blank" rel="noopener noreferrer">
              <Button magnetic variant="outline" className="group">
                Source Code
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </header>

      {/* Hero Image / Video Placeholder */}
      <div
        ref={heroRef}
        className="mx-auto w-full max-w-[1400px] px-4 md:px-8 lg:px-12 mb-24"
      >
        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted/20 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
          <img
            src={mockImages[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Context / Overview */}
      <section className="container mx-auto px-4 lg:px-28 mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Context & Overview
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </section>

      {/* Gallery Component */}
      <ProjectGallery images={mockImages} />

      {/* Next Project Nav */}
      {nextProject && (
        <section className="container mx-auto px-4 lg:px-28 mt-32 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Up Next
          </p>
          <Link
            href={`/projects/${nextSlug}`}
            className="group inline-block"
            onMouseEnter={() => setActiveType("view")}
            onMouseLeave={() => setActiveType("default")}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter transition-colors group-hover:text-primary">
              {nextProject.title}
            </h2>
          </Link>
        </section>
      )}
    </article>
  );
}
