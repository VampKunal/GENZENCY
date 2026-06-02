import { ThemeProvider } from "@/components/layout/ThemeProvider";
import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteFooter from "@/components/layout/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SiteNavbar />
      <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
      <SiteFooter />
    </ThemeProvider>
  );
}
