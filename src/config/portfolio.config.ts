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
      link: "https://esl.et",
      linkDisabled: false,
      source: "https://github.com/nata-t",
      sourceDisabled: true,
      wip: false,
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
      link: "https://bmla.esl.et/",
      linkDisabled: false,
      source: "https://github.com/nata-t",
      sourceDisabled: true,
      wip: false,
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
      title: "Customer Visit Management (CVM) – Smart Branch System",
      description:
        "Implemented a customer visit management platform for Commercial Bank of Ethiopia, digitizing branch operations through vendor software integration, custom API design, and infrastructure setup, currently live across 6 smart branches and the head office.",
      tags: [
        "Go",
        "Gin",
        "SQL Server",
        "SQL Reporting Services",
        "SSMS",
        "Windows Server",
        "API Design",
      ],
      link: "",
      linkDisabled: true,
      source: "",
      sourceDisabled: true,
      wip: true,
    },
    {
      title: "Voice Guidance – ATM Accessibility System",
      description:
        "Built a voice guidance system enabling ATM accessibility for visually impaired users, deployed across thousands of ATMs spanning 39 banks. Led vendor software integration, API design, and infrastructure setup to bring the system live at scale.",
      tags: ["Go", "Gin", "API Design"],
      link: "",
      linkDisabled: true,
      source: "",
      sourceDisabled: true,
      wip: true,
    },
    {
      title: "Minte & Geni – Wedding Website",
      description:
        "This is a simple full-stack wedding website I built for my sister’s wedding with a thank-you card download, guest photo sharing (uploads), a virtual sign/wish board, a gallery, Supabase storage, and Telegram bot integration.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "React Query",
        "GSAP",
        "Konva",
        "Express",
        "Supabase",
        "Telegram Bot",
      ],
      link: "https://minte-and-geni.vercel.app/",
      linkDisabled: false,
      source: "",
      sourceDisabled: true,
      wip: false,
    },
    {
      title: "The remedial tutorial – Telegram Bot",
      description:
        "A full-stack Telegram bot with a WebView (Telegram Web App) and long polling. Includes a registration form, admin approve/reject flow, and gated premium channels where users can join only after approval.",
      tags: [
        "React",
        "Shadcn UI",
        "TanStack React Form",
        "Express",
        "Supabase",
        "Telegram Bot",
      ],
      link: "https://t.me/the_remedial_tutorial_bot",
      linkDisabled: false,
      source: "",
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
  ],
};
