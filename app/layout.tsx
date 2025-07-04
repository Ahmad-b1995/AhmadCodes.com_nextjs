import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ahmad Bagheri - Senior Full Stack Developer",
  description: "7 years of experience as a senior full-stack developer specializing in building scalable ERP web solutions. Expert in Next.js, TypeScript, Django, and GraphQL across cryptocurrency, e-commerce, and enterprise applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="scroll-smooth leading-relaxed text-slate-600 selection:bg-primary-100 selection:text-primary-900
         mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
