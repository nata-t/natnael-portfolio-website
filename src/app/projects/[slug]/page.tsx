import { portfolioConfig } from "@/config/portfolio.config";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return portfolioConfig.projects.map((project) => ({
    slug: (project as { slug?: string }).slug || project.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectDetailClient slug={params.slug} />;
}
