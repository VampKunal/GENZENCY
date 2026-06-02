import { ThemeProvider } from "@/components/layout/ThemeProvider";
import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteFooter from "@/components/layout/SiteFooter";
import RouteLoader from "@/components/layout/RouteLoader";
import GsapSiteMotion from "@/components/motion/GsapSiteMotion";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RouteLoader />
      <GsapSiteMotion />
      <SiteNavbar />
      <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
      <SiteFooter />
    </ThemeProvider>
  );
}
