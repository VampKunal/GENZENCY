import type { Metadata } from "next";
import { Anybody, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const anybody = Anybody({
  subsets: ["latin"],
  variable: "--font-anybody",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GENZENCY — Premium SEO & Digital Growth Agency",
  description:
    "GENZENCY — Premium editorial SEO and digital growth agency fusing raw brutalist impact with high-fashion precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${hanken.variable} ${anybody.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen overflow-x-hidden bg-[#f9f9f9] font-sans text-[#1a1c1c] antialiased selection:bg-brand-aqua selection:text-black dark:bg-[#0a0a0a] dark:text-[#f9f9f9]">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
