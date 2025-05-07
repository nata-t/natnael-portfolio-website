import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GridBackground from "@/components/grid-background";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Natnael Tadele | Personal",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Natnael Tadele", url: "https://github.com/nata-t" }],
  description: "Natnael Tadele's personal portfolio website",
  openGraph: {
    title: "Natnael Tadele | Personal",
    description: "Natnael Tadele's personal portfolio website",
    images: [
      {
        url: "/photo-dwight.jpg",
        alt: "Natnael Tadele's Portrait",
        width: 640,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <GridBackground />
        <main className="container overflow-x-hidden lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
