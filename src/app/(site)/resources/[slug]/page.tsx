import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTemplate from "@/components/pages/PageTemplate";
import { RESOURCE_PAGES } from "@/content/pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(RESOURCE_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = RESOURCE_PAGES[slug];
  if (!page) return {};
  return { title: page.title, description: page.metaDescription };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const content = RESOURCE_PAGES[slug];
  if (!content) notFound();
  return <PageTemplate content={content} />;
}
