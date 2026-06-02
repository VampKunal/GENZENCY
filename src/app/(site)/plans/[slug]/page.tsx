import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTemplate from "@/components/pages/PageTemplate";
import { PLAN_PAGES } from "@/content/pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PLAN_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = PLAN_PAGES[slug];
  if (!page) return {};
  return { title: page.title, description: page.metaDescription };
}

export default async function PlanPage({ params }: Props) {
  const { slug } = await params;
  const content = PLAN_PAGES[slug];
  if (!content) notFound();
  return <PageTemplate content={content} />;
}
