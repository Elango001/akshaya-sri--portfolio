import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshaya Sri B | Product Manager & AI Engineer",
  description:
    "Product portfolio of Akshaya Sri B: AI & Data Science background with shipped product experience across multimodal discovery (LocalLens AI), academic workflow optimization (40% time savings), and manufacturing operations.",
  keywords: [
    "Akshaya Sri B",
    "Product Manager",
    "Technical Product Manager",
    "AI Product Management",
    "LocalLens AI",
    "Product Requirements Document",
  ],
  authors: [{ name: "Akshaya Sri B" }],
  openGraph: {
    title: "Akshaya Sri B | Product Manager & AI Engineer",
    description:
      "Turning complex AI systems into intuitive products that people use. Case studies, interactive PRDs, and delivery metrics.",
    type: "website",
    locale: "en_US",
    siteName: "Akshaya Sri B Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshaya Sri B | Product Manager & AI Engineer",
    description:
      "Turning complex AI systems into intuitive products that people use. Case studies, interactive PRDs, and delivery metrics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
