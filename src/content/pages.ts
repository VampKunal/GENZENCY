export type StackSection = {
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: string;
  accent?: "aqua" | "lime" | "dark";
};

export type ScrollMode = "stack" | "scroll-horizontal" | "reveal" | "grid";

export type PageContent = {
  title: string;
  metaDescription: string;
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  scrollMode: ScrollMode;
  sections: StackSection[];
};

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const SOLUTION_PAGES: Record<string, PageContent> = {
  "brand-solution": {
    title: "Brand Solution | GENZENCY",
    metaDescription: "Brand SEO and search positioning to own category keywords and grow qualified organic demand.",
    heroTag: "// BRAND SOLUTION",
    heroTitle: "OWN YOUR CATEGORY IN SEARCH",
    heroSubtitle: "We align brand narrative, entity SEO, and content clusters so Google understands who you are—and recommends you first.",
    heroImage: unsplash("photo-1552664730-d307ca884978"),
    scrollMode: "stack",
    sections: [
      {
        eyebrow: "01 // POSITIONING",
        title: "Brand architecture that search engines trust",
        body: "We map your brand pillars to keyword clusters, schema, and internal linking so every page reinforces authority.",
        bullets: ["Entity & knowledge graph signals", "Brand SERP protection", "Category keyword ownership"],
        image: unsplash("photo-1542744173-8e7e53415bb0", 900),
        accent: "aqua",
      },
      {
        eyebrow: "02 // CONTENT",
        title: "Editorial content built for rankings",
        body: "Briefs, landing pages, and linkable assets written for intent—not filler. Every piece targets measurable queries.",
        bullets: ["Search-intent briefs", "Topical authority hubs", "E-E-A-T aligned author strategy"],
        accent: "lime",
      },
      {
        eyebrow: "03 // OUTCOMES",
        title: "Brand visibility that drives pipeline",
        body: "Track branded and non-branded growth, share of voice, and assisted conversions from organic search.",
        image: unsplash("photo-1553877522-43269d4ea984", 900),
        accent: "dark",
      },
    ],
  },
  "tech-solution": {
    title: "Tech Solution | GENZENCY",
    metaDescription: "Technical SEO audits, Core Web Vitals, crawl optimization, and site speed for scalable organic growth.",
    heroTag: "// TECH SOLUTION",
    heroTitle: "FIX THE FOUNDATION. SCALE ORGANIC TRAFFIC.",
    heroSubtitle: "Crawl budget, indexation, structured data, and performance tuning—so content can actually rank.",
    heroImage: unsplash("photo-1558494949-ef010cbdcc31"),
    scrollMode: "scroll-horizontal",
    sections: [
      {
        eyebrow: "01 // AUDIT",
        title: "Full technical SEO diagnostics",
        body: "We audit crawl errors, redirect chains, canonicals, and JavaScript rendering issues that block rankings.",
        bullets: ["Log-file analysis", "Index coverage fixes", "Schema validation"],
        accent: "aqua",
      },
      {
        eyebrow: "02 // PERFORMANCE",
        title: "Core Web Vitals & speed",
        body: "LCP, INP, and CLS improvements on WordPress, Shopify, and custom stacks—without breaking design.",
        image: unsplash("photo-1555066931-4365d14bab8c", 900),
        accent: "lime",
      },
      {
        eyebrow: "03 // SCALE",
        title: "Infrastructure for growth",
        body: "Sitemaps, hreflang, faceted navigation, and staging workflows that keep SEO safe as you ship.",
        accent: "dark",
      },
    ],
  },
  "media-solution": {
    title: "Media Solution | GENZENCY",
    metaDescription: "Paid social, Meta ads, and performance media aligned with landing pages that convert.",
    heroTag: "// MEDIA SOLUTION",
    heroTitle: "PAID MEDIA THAT FEEDS ORGANIC MOMENTUM",
    heroSubtitle: "Creative, audiences, and landing experiences tuned for ROAS—while SEO builds long-term equity.",
    heroImage: unsplash("photo-1611162616305-c69b3fa7fbe0"),
    scrollMode: "scroll-horizontal",
    sections: [
      {
        eyebrow: "01 // CREATIVE",
        title: "Scroll-stopping ad creative",
        body: "Hooks and offers tested against your best organic pages so paid and SEO tell one story.",
        bullets: ["Meta & Instagram campaigns", "Retargeting funnels", "Creative iteration sprints"],
        accent: "aqua",
      },
      {
        eyebrow: "02 // LANDING",
        title: "Pages built to convert clicks",
        body: "Fast, mobile-first landers with clear CTAs—paired with tracking that proves revenue impact.",
        image: unsplash("photo-1460925895917-afdab827c52f", 900),
        accent: "lime",
      },
      {
        eyebrow: "03 // ROAS",
        title: "Optimize spend, protect margin",
        body: "Weekly bid, audience, and budget shifts based on CAC, ROAS, and assisted organic lift.",
        accent: "dark",
      },
    ],
  },
};

export const ABOUT_PAGES: Record<string, PageContent> = {
  "how-we-work": {
    title: "How We Work | GENZENCY",
    metaDescription: "Our SEO process: discovery audit, strategy, execution, and reporting for predictable organic growth.",
    heroTag: "// HOW WE WORK",
    heroTitle: "A CLEAR PATH FROM AUDIT TO PAGE ONE",
    heroSubtitle: "No black boxes—structured sprints, transparent reporting, and decisions backed by search data.",
    heroImage: unsplash("photo-1522071820081-009f0129c71c"),
    scrollMode: "reveal",
    sections: [
      {
        eyebrow: "01 // DISCOVER",
        title: "Audit & opportunity map",
        body: "Technical crawl, competitor gap analysis, and revenue-weighted keyword priorities in week one.",
        accent: "aqua",
      },
      {
        eyebrow: "02 // BUILD",
        title: "Execute in focused sprints",
        body: "On-page, content, links, and CRO shipped in two-week cycles with clear owners and deadlines.",
        image: unsplash("photo-1600880292203-757bb62b4baf", 900),
        accent: "lime",
      },
      {
        eyebrow: "03 // PROVE",
        title: "Measure what matters",
        body: "Rankings, traffic quality, leads, and revenue—not vanity metrics—in a live dashboard you own.",
        accent: "dark",
      },
    ],
  },
  testimonies: {
    title: "Testimonies | GENZENCY",
    metaDescription: "Client testimonials and reviews from brands that grew organic traffic and revenue with GENZENCY.",
    heroTag: "// TESTIMONIES",
    heroTitle: "RESULTS OUR CLIENTS TALK ABOUT",
    heroSubtitle: "Founders and marketing leads who needed rankings, speed, and revenue—and got all three.",
    heroImage: unsplash("photo-1573496359142-b8d87734a5a2"),
    scrollMode: "grid",
    sections: [
      {
        eyebrow: "KUDOS APPAREL",
        title: "\"Organic traffic up 140% in four months\"",
        body: "After a WordPress speed rebuild and local SEO campaign, checkout sessions from search doubled.",
        accent: "aqua",
      },
      {
        eyebrow: "VIVID ANALYTICS",
        title: "\"Meta ROAS hit 2.8x with better landers\"",
        body: "Paid and organic now share the same messaging. CAC dropped while demo requests climbed.",
        accent: "lime",
      },
      {
        eyebrow: "URBAN AURA",
        title: "\"Page-one rankings for core fashion terms\"",
        body: "Category pages and structured data put us ahead of bigger boutiques on Google.",
        accent: "dark",
      },
    ],
  },
  "seo-results": {
    title: "SEO Results | GENZENCY",
    metaDescription: "SEO case results: traffic growth, ranking improvements, and revenue impact from GENZENCY campaigns.",
    heroTag: "// SEO RESULTS",
    heroTitle: "PROOF IN RANKINGS & REVENUE",
    heroSubtitle: "Selected outcomes from technical SEO, content, and paid media programs.",
    heroImage: unsplash("photo-1551288049-bebda4e38f71"),
    scrollMode: "stack",
    sections: [
      {
        eyebrow: "TRAFFIC",
        title: "+140% organic sessions",
        body: "Ecommerce brand after Core Web Vitals fixes and category page optimization.",
        bullets: ["LCP under 0.5s", "Page 1 for 12 core terms", "+48% checkout from organic"],
        accent: "aqua",
      },
      {
        eyebrow: "REVENUE",
        title: "+95% organic revenue",
        body: "Boutique retailer with redesigned storefront and localized landing pages.",
        image: unsplash("photo-1549298916-b41d501d3772", 900),
        accent: "lime",
      },
      {
        eyebrow: "PAID + SEO",
        title: "2.8x ROAS with aligned funnels",
        body: "B2B SaaS combining Meta retargeting with SEO content targeting bottom-funnel queries.",
        accent: "dark",
      },
    ],
  },
};

export const PLAN_PAGES: Record<string, PageContent> = {
  "seo-plans": {
    title: "SEO Plans | GENZENCY",
    metaDescription: "Monthly SEO plans: audits, content, link building, and reporting for sustainable organic growth.",
    heroTag: "// SEO PLANS",
    heroTitle: "SEO RETAINERS THAT MATCH YOUR STAGE",
    heroSubtitle: "From local service brands to national ecommerce—scoped by goals, not arbitrary hours.",
    heroImage: unsplash("photo-1556761175-5973dc0f32e7"),
    scrollMode: "grid",
    sections: [
      {
        eyebrow: "STARTER",
        title: "Local & growing brands",
        body: "Technical fixes, 4 content pieces/month, and local SEO for service-area businesses.",
        bullets: ["Monthly audit refresh", "On-page optimization", "Google Business Profile"],
        accent: "aqua",
      },
      {
        eyebrow: "GROWTH",
        title: "Scaling traffic & leads",
        body: "Content cluster strategy, digital PR, and CRO tests on key landing pages.",
        accent: "lime",
      },
      {
        eyebrow: "ENTERPRISE",
        title: "Multi-market & ecommerce",
        body: "Program management, hreflang, large-catalog SEO, and dedicated strategist.",
        accent: "dark",
      },
    ],
  },
  "website-redesign-plans": {
    title: "Website Redesign Plans | GENZENCY",
    metaDescription: "Website redesign plans focused on SEO-safe migrations, speed, and conversion-ready UX.",
    heroTag: "// REDESIGN PLANS",
    heroTitle: "REDESIGN WITHOUT LOSING RANKINGS",
    heroSubtitle: "Migration playbooks, wireframes, and launch QA so relaunches grow traffic—not kill it.",
    heroImage: unsplash("photo-1499951365837-a3c205c2746f"),
    scrollMode: "reveal",
    sections: [
      {
        eyebrow: "DISCOVERY",
        title: "UX + SEO blueprint",
        body: "Sitemap, wireframes, and redirect maps before a single line of code ships.",
        accent: "aqua",
      },
      {
        eyebrow: "BUILD",
        title: "Fast, accessible templates",
        body: "Component library tuned for Core Web Vitals and mobile conversion.",
        accent: "lime",
      },
      {
        eyebrow: "LAUNCH",
        title: "Post-launch monitoring",
        body: "30-day indexation watch, rank tracking, and hotfix sprints included.",
        accent: "dark",
      },
    ],
  },
  "social-media-marketing-plans": {
    title: "Social Media Marketing Plans | GENZENCY",
    metaDescription: "Social media and Meta advertising plans with creative, targeting, and landing page support.",
    heroTag: "// SOCIAL PLANS",
    heroTitle: "SOCIAL PACKAGES BUILT FOR ROAS",
    heroSubtitle: "Creative production, campaign management, and landing pages in one plan.",
    heroImage: unsplash("photo-1611162616305-c69b3fa7fbe0"),
    scrollMode: "scroll-horizontal",
    sections: [
      {
        eyebrow: "TEST",
        title: "Validate offers fast",
        body: "Two creative angles, one audience stack, weekly optimization.",
        accent: "aqua",
      },
      {
        eyebrow: "SCALE",
        title: "Expand winners",
        body: "Budget scaling rules, retargeting layers, and creative refresh cadence.",
        accent: "lime",
      },
      {
        eyebrow: "FULL FUNNEL",
        title: "Awareness to purchase",
        body: "Prospecting, consideration, and conversion campaigns with shared reporting.",
        accent: "dark",
      },
    ],
  },
  "ecommerce-seo-plans": {
    title: "Ecommerce SEO Plans | GENZENCY",
    metaDescription: "Ecommerce SEO plans for product pages, categories, technical SEO, and marketplace visibility.",
    heroTag: "// ECOMMERCE SEO",
    heroTitle: "PRODUCT & CATEGORY SEO AT SCALE",
    heroSubtitle: "Templates, faceted navigation, and feed optimization for Shopify, WooCommerce, and custom stores.",
    heroImage: unsplash("photo-1472851294608-062f824d6963"),
    scrollMode: "reveal",
    sections: [
      {
        eyebrow: "CATALOG",
        title: "Category & filter SEO",
        body: "Canonical strategy, pagination, and internal linking for large catalogs.",
        accent: "aqua",
      },
      {
        eyebrow: "PRODUCT",
        title: "PDP optimization",
        body: "Titles, schema, reviews, and unique copy blocks that rank and convert.",
        accent: "lime",
      },
      {
        eyebrow: "TECH",
        title: "Platform-specific fixes",
        body: "Shopify, WooCommerce, or headless—speed and crawl efficiency baked in.",
        accent: "dark",
      },
    ],
  },
};

export const RESOURCE_PAGES: Record<string, PageContent> = {
  blogs: {
    title: "Blogs | GENZENCY",
    metaDescription: "SEO blogs and guides on technical SEO, content strategy, paid media, and conversion optimization.",
    heroTag: "// BLOGS",
    heroTitle: "SEO INSIGHTS THAT SHIP",
    heroSubtitle: "Actionable posts from practitioners—not generic AI filler.",
    heroImage: unsplash("photo-1499750310107-5fef28a66643"),
    scrollMode: "grid",
    sections: [
      {
        eyebrow: "WORDPRESS",
        title: "WordPress SEO checklist",
        body: "Permalinks, caching, plugin hygiene, and Hostinger tuning for faster crawls.",
        accent: "aqua",
      },
      {
        eyebrow: "META ADS",
        title: "Meta ads that convert",
        body: "Single-benefit creative, fast landers, and minimal form fields for lower CAC.",
        accent: "lime",
      },
      {
        eyebrow: "LANDING PAGES",
        title: "Landing page essentials",
        body: "Clear hooks, contrast, and structure that guide visitors to one action.",
        accent: "dark",
      },
    ],
  },
  "the-edge": {
    title: "The Edge | GENZENCY",
    metaDescription: "The Edge: SEO trends, algorithm updates, and competitive intelligence from GENZENCY strategists.",
    heroTag: "// THE EDGE",
    heroTitle: "STAY AHEAD OF SEARCH SHIFTS",
    heroSubtitle: "Short briefs on updates, SERP changes, and what to do this month.",
    heroImage: unsplash("photo-1451187580459-43490279c0fa"),
    scrollMode: "scroll-horizontal",
    sections: [
      {
        eyebrow: "SERP",
        title: "AI Overviews & click strategy",
        body: "How to earn citations and protect traffic when summaries appear above organic results.",
        accent: "aqua",
      },
      {
        eyebrow: "TECH",
        title: "INP & mobile-first indexing",
        body: "What to fix on high-traffic templates before rankings slip.",
        accent: "lime",
      },
      {
        eyebrow: "CONTENT",
        title: "Topical authority in 2026",
        body: "Cluster design, internal links, and refresh cadence that still moves the needle.",
        accent: "dark",
      },
    ],
  },
};

export const CONTACT_PAGE = {
  title: "Contact Us | GENZENCY",
  metaDescription: "Contact GENZENCY for a free SEO audit, strategy call, and custom growth plan.",
  heroTitle: "START YOUR SEO AUDIT",
  heroSubtitle: "Tell us your URL and goals—we respond within one business day.",
};
