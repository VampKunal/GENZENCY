import type { Metadata } from "next";
import { CONTACT_PAGE } from "@/content/pages";

export const metadata: Metadata = {
  title: CONTACT_PAGE.title,
  description: CONTACT_PAGE.metaDescription,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
