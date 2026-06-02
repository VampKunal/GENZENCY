import { ThemeProvider } from "@/components/layout/ThemeProvider";
import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteFooter from "@/components/layout/SiteFooter";
import RouteLoader from "@/components/layout/RouteLoader";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <RouteLoader />
      <SiteNavbar />
      <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
      <SiteFooter />
    </ThemeProvider>
  );
}
