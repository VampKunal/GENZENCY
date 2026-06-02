import type { Metadata } from "next";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anybody:ital,wght@0,100..900;1,100..900&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-[#f9f9f9] font-sans text-[#1a1c1c] antialiased transition-colors duration-300 selection:bg-brand-aqua selection:text-black dark:bg-[#0a0a0a] dark:text-[#f9f9f9]">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
