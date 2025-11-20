type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkDisabled: boolean;
  source: string;
  sourceDisabled: boolean;
  wip: boolean;
};

export const portfolioConfig: { projects: Project[] } = {
  // Projects Information
  projects: [
    {
      title: "Ethiopian Shipping And Logistics",
      description:
        "The ESL Website Development Project digitizes customer and internal operations with unified client, staff, and admin dashboards, enabling online service requests, shipment tracking, workflow management, and improved efficiency across Ethiopia’s logistics system.",
      tags: [
        "React",
        "TanStack",
        "Shadcn UI",
        "Tailwind CSS",
        "Zod",
        "Framer Motion",
      ],
      link: "http://116.202.87.235:3007",
      linkDisabled: false,
      source: "https://github.com/nata-t",
      sourceDisabled: true,
      wip: true,
    },
    {
      title: "Babogaya maritime and Logisics Academy",
      description:
        "The Babogaya Maritime and Logistics Academy website digitizes maritime education with student, instructor, and admin dashboards, supporting course delivery, assessments, announcements, and performance tracking for improved learning and streamlined academic management.",
      tags: [
        "React",
        "TanStack",
        "Shadcn UI",
        "Tailwind CSS",
        "Zod",
        "Framer Motion",
      ],
      link: "http://116.202.87.235:3001",
      linkDisabled: false,
      source: "https://github.com/nata-t",
      sourceDisabled: true,
      wip: true,
    },
    {
      title: "Koket Investment",
      description:
        "Developed a modern, user-friendly website for Koket Investment, showcasing their design and build, digital solutions, and trading services while reflecting their innovation, excellence, and commitment to empowering clients and communities.",
      tags: [
        "React",
        "TanStack",
        "Shadcn UI",
        "Tailwind CSS",
        "Zod",
        "Framer Motion",
        "Monorepo",
        "Turborepo",
      ],
      link: "https://koketinvestment.com/",
      linkDisabled: false,
      source: "https://github.com/nata-t",
      sourceDisabled: true,
      wip: false,
    },
    {
      title: "Jewelry Shop – Management Dashboard",
      description:
        "A dual-purpose platform with a landing page for customers and a dashboard for store management. Focused on UI/UX and frontend design.",
      tags: ["Vue", "GSAP", "Vuex", "PrimeVue", "Figma"],
      link: "http://164.160.187.146:5161/",
      linkDisabled: false,
      source: "https://github.com/nata-t/jewelry-shop.git",
      sourceDisabled: false,
      wip: false,
    },
    {
      title: "Finot Hulentenawi Lemat",
      description:
        "Developed a professional website for Finot Hulentenawi Lemat (FHL), a nonprofit organization dedicated to inclusive, sustainable development and supporting marginalized groups—especially women, girls, and children—through community-focused programs and interventions.",
      tags: ["React", "Shadcn UI", "Figma", "Zod", "Tailwind CSS"],
      link: "https://github.com/nata-t",
      linkDisabled: true,
      source: "https://github.com/nata-t/finot-lulentenawi-lemat.git",
      sourceDisabled: false,
      wip: false,
    },
    {
      title: "Boss Burger – ERP Management System",
      description:
        "An ERP system built for Boss Burger to manage staff roles, handle orders and expenses, validate mobile payments via transaction scraping, and support real-time updates via WebSockets.",
      tags: ["React", "React Query", "Express", "Prisma", "Socket.IO", "MySQL"],
      link: "https://github.com/nata-t",
      linkDisabled: true,
      source: "https://github.com/nata-t",
      sourceDisabled: false,
      wip: false,
    },

    {
      title: "School Management System – Cloud-Based Solution",
      description:
        "A full-featured school system with dashboards for teachers, students, and admins. Includes messaging, scheduling, payment, and registration functionalities.",
      tags: [
        "React",
        "Shadcn UI",
        "React Query",
        "TanStack Router",
        "TanStack Table",
        "Zod",
      ],
      link: "http://164.160.187.146:5181/",
      linkDisabled: false,
      source: "https://github.com/nata-t",
      sourceDisabled: true,
      wip: false,
    },
    {
      title: "Omnispace – Publisher’s Content Management App",
      description:
        "A platform where publishers can submit writings, manage content, and customize their profiles. Includes an admin dashboard for oversight.",
      tags: ["Vue", "Express", "PostgreSQL", "Prisma", "PrimeVue"],
      link: "https://github.com/nata-t",
      linkDisabled: true,
      source:
        "https://github.com/nata-t/omnispace-publisher-s-app-admin-dashboard-back-end.git",
      sourceDisabled: false,
      wip: false,
    },
    {
      title: "Gibiye – Campus-Based E-commerce Platform",
      description:
        "Gibiye is an e-commerce platform built to connect university communities with on-campus businesses, offering localized products and services.",
      tags: ["Vue", "Express", "PostgreSQL", "Prisma", "Paina", "PrimeVue"],
      link: "https://github.com/nata-t",
      linkDisabled: true,
      source: "https://github.com/nata-t/gibiye-updated-front.git",
      sourceDisabled: false,
      wip: false,
    },

    {
      title: "Personal Portfolio – Developer Showcase",
      description:
        "A modern, responsive personal portfolio website to showcase my work, projects, and skills.",
      tags: ["Next.js", "Shadcn UI", "Tailwind CSS", "Framer Motion"],
      link: "#",
      linkDisabled: false,
      source: "https://github.com/nata-t/natnael-portfolio-website.git",
      sourceDisabled: false,
      wip: false,
    },
  ],
};
