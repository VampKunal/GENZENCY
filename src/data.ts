/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseStudy, ServiceDetail, EditorialInsight } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "kudos-apparel",
    title: "Kudos Apparel",
    client: "KUDOS CLIENT",
    category: "WordPress speed & search engine optimization",
    duration: "4 weeks strategy",
    summary: "Rebuilt a cluttered WordPress store, taking search speed from 5.4 seconds down to 0.4 seconds, resulting in a 140% boost in organic visitors.",
    description: "Kudos Apparel is a contemporary boutique brand operating on WordPress and managed through Hostinger hosting. They suffered from excessive slow plugins, large unoptimized media assets, and zero technical search authority. We restructured their hosting pipeline, pruned unnecessary code bloat, and launched a localized keyword campaign.",
    challenge: "High loading times caused potential customers to drop off immediately. Missing search tags, outdated templates, and duplicate content blocked rankings on Google.",
    solution: "We migrated the site server to optimal Hostinger VPS configuration, compressed all product imagery dynamically, tuned Core Web Vitals, and built robust localized product landing pages.",
    metrics: [
      { label: "ORGANIC VISITORS", value: "+140%", description: "Direct growth in non-brand search traffic." },
      { label: "LOAD SPEED", value: "0.4s", description: "Largest Contentful Paint index after WordPress tuning." },
      { label: "CONVERSIONS", value: "+48%", description: "Increase in checkout purchases from organic targets." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200",
    tags: ["WordPress SEO", "Speed Optimization", "Hostinger Tuning"]
  },
  {
    id: "active-saas",
    title: "Vivid Analytics",
    client: "VIVID ENTERPRISE",
    category: "Meta Ads & Paid Performance Marketing",
    duration: "6 weeks campaign",
    summary: "Developed high-performing Meta Ads and landing page UI, driving a sustainable 2.8x Return on Ad Spend (ROAS).",
    description: "Vivid Analytics delivers enterprise reporting utilities. Their existing advertisement campaigns on Facebook and Instagram had stagnant conversion rates and high acquisition costs. We created high-intent user landing page interfaces paired with retargeting Meta Ads.",
    challenge: "High client acquisition cost (CAC) paired with confusing, overly complicated copywriting that alienated potential business prospects.",
    solution: "Designed high-converting landing pages with flawless mobile responsiveness. Executed a series of direct Meta Ads focused on straightforward business calculations and real results.",
    metrics: [
      { label: "ROAS SCALE", value: "2.8x", description: "Validated return on advertisement spend across Meta platforms." },
      { label: "ACQUISITION COST", value: "-35%", description: "Reduction in direct paid registration expenses." },
      { label: "CLICK-THROUGH", value: "4.2%", description: "Meta ad creative click-through rates, up from 1.1%." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200",
    tags: ["Meta Ads", "Paid Marketing", "Landing Page UI"]
  },
  {
    id: "boutique-design",
    title: "Urban Aura",
    client: "AURA BOUTIQUE",
    category: "E-Commerce Design & Organic Authority",
    duration: "5 weeks redesign",
    summary: "Created a gorgeous boutique storefront UI and customized search architecture with stable organic rankings.",
    description: "Urban Aura is an independent clothing store. They needed an editorial, high-fashion aesthetic that still maintained perfect technical parameters for Google Crawlers. We designed a lightweight, highly usable responsive brand storefront.",
    challenge: "Standard template design looked identical to thousands of online stores, failing to communicate premium brand value.",
    solution: "Built a bespoke checkout layout and optimized categories. Created search-optimized content pages that naturally attract premium organic backlinks.",
    metrics: [
      { label: "ORGANIC REVENUE", value: "+95%", description: "E-Commerce sales generated without paid promotions." },
      { label: "BOUNCE REDUCTION", value: "-22%", description: "Fewer users leaving on finding a fast, clear storefront." },
      { label: "SEARCH RANKING", value: "Page 1", description: "Achieved top positions for primary fashion search requests." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200",
    tags: ["UI/UX Design", "E-Commerce", "Organic Growth"]
  }
];

export const services: ServiceDetail[] = [
  {
    id: "seo-optimization",
    title: "SEO Search Optimization & Positioning",
    shortTitle: "SEO & STANDINGS",
    tagline: "HIGHER GOOGLE SEARCH PLACEMENT.",
    description: "We help your business reach customers who are actively searching for what you do. Our targeted keyword campaigns, technical audits, and content directories displace competitors to ensure you occupy top search results.",
    processSteps: [
      { title: "Keyword Research", description: "We analyze exactly what your customers type into Google and establish high-potential targets." },
      { title: "Competitor Analysis", description: "We review top-ranking competitors to copy their strengths and target their organic weaknesses." },
      { title: "Strategic Link Building", description: "We secure high-quality external link placements that signal trust and authority directly to Google." }
    ],
    stats: { label: "GROWTH IN ORGANIC SESSIONS", value: "+170%" },
    highlightColor: "#ff4d00",
    iconName: "Compass"
  },
  {
    id: "wordpress-hostinger",
    title: "WordPress & Hostinger Speed Enhancement",
    shortTitle: "CMS & SPEED",
    tagline: "LOAD INSTANTLY, RETAIN CUSTOMERS.",
    description: "Slow loading speeds kill sales. We optimize WordPress plugins, configure fast Hostinger or custom servers, compress graphics, and clean code databases to make your site secure and blazing fast.",
    processSteps: [
      { title: "Core Web Vitals tuning ", description: "We configure optimal caching and lightweight template layouts to stay clear of slow loading speeds." },
      { title: "Database Cleanup", description: "Removing bloated data, slow redirect loops, and unused plugins from your CMS architecture." },
      { title: "WordPress Security", description: "Configuring robust firewall defenses and optimized static assets to stay secure from outages." }
    ],
    stats: { label: "AVERAGE LOADING SPEED VALUE", value: "0.2s" },
    highlightColor: "#d00000",
    iconName: "Cpu"
  },
  {
    id: "paid-marketing",
    title: "Paid Marketing & High-Converting Meta Ads",
    shortTitle: "META & GOOGLE ADS",
    tagline: "CONVERT CLICK ADVERT BUDGET INTO REVENUE.",
    description: "Stop burning budget on unguided campaigns. We build targeted Facebook, Instagram, and Google Ads paired with high-converting mobile content to drive real leads and measurable profitability.",
    processSteps: [
      { title: "Audience Target Mapping", description: "Pinpointing the exact demographics, behaviors, and core interests of ready-to-buy users." },
      { title: "Ad Creative & Copywriting", description: "Writing highly persuasive headlines and simple value captions that stop users from scrolling past." },
      { title: "ROI & Campaign Scaling", description: "Constantly testing and scaling ads to ensure low client acquisition costs and high ROI." }
    ],
    stats: { label: "AVERAGE RETURN ON AD SPEND", value: "2.8x" },
    highlightColor: "#bc0000",
    iconName: "FileText"
  },
  {
    id: "ui-ux-design",
    title: "Modern UI/UX & Landing Page Design",
    shortTitle: "UI/UX DESIGN",
    tagline: "POLISHED LAYOUTS THAT DRIVE ACTION.",
    description: "A beautiful, professional website builds immediate brand trust. We design bespoke, responsive landing pages that keep readers engaged and guide them naturally toward making a purchase or signing up.",
    processSteps: [
      { title: "Mobile Responsive Layout", description: "Ensuring your interface fits every screen size perfectly, with easy touch targets and beautiful pacing." },
      { title: "Conversion Optimization", description: "Bespoke checkout buttons and inquiry forms configured to maximize customer actions." },
      { title: "Aesthetic Alignment", description: "Clean typography pairing and balanced negative space that reflect a professional business identity." }
    ],
    stats: { label: "IMPROVEMENT IN ENGAGEMENT RATE", value: "+45%" },
    highlightColor: "#5c5c5c",
    iconName: "Search"
  }
];

export const insights: EditorialInsight[] = [
  {
    id: "ranking-with-wordpress",
    title: "The WordPress Checklist: Simple Steps to Improve Your Search Standings",
    slug: "ranking-with-wordpress",
    category: "SEO OPTIMIZATION",
    subCategory: "BEST PRACTICES",
    publishDate: "MAY 28, 2026",
    readTime: "5 MIN READ",
    author: {
      name: "Marcus Vance",
      role: "SEO Strategist",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
    },
    excerpt: "Learn how to optimize your WordPress configuration and Hostinger dashboard to eliminate crawl bloat and improve your rankings.",
    contentMarkdown: `## WordPress SEO Made Simple
    
To achieve standard organic rankings, you first need a solid foundation. While content is highly important, setting up WordPress correctly ensures search engines index your pages clearly.

### 1. Optimize Your Permalinks
A clear permalink structure guides users and search engines. Avoid default parameters. Instead, select the "Post name" setting under Permalinks configuration.

- **Bad URL**: yoursite.com/?p=123
- **Good URL**: yoursite.com/seo-best-practices

### 2. Configure Hostinger Cache
Using Hostinger's LiteSpeed Cache or optimized WP caching limits page load durations.
Ensuring images are compressed to modern WebP formats before uploading preserves bandwidth and raises conversions.

### 3. Clear Out Unused Plugins
Excess plugins block server responsiveness. Ruthlessly deactivate or delete any utility plugin that is not actively driving features on your site. Keep it lightweight, fast, and structured.`,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "meta-ads-conversions",
    title: "Meta Ads Strategy: Crafting Ads That Build Customer Sales",
    slug: "meta-ads-conversions",
    category: "PAID MARKETING",
    subCategory: "ADVERTISING GUIDE",
    publishDate: "APRIL 14, 2026",
    readTime: "6 MIN READ",
    author: {
      name: "Helena Cross",
      role: "Paid Ads Director",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    },
    excerpt: "Meta ads don't have to be expensive. Discover how focusing on extremely clear benefits and landing pages lowers your cost per sign-up.",
    contentMarkdown: `## ROI Driven Performance Advertising

In e-commerce and lead generation, Meta Ads serve as the direct fuel for customer growth. Relying on complex concepts wastes budget. Instead, capture attention through direct value propositions.

### Simple Creative Principles

- **Single Benefit Focus**: State exactly what positive change your product delivers within the first 3 lines of copy.
- **Flawless Landing Experience**: Ensure the advertisement links to a highly responsive, fast, and beautifully framed landing page rather than a cluttered homepage.
- **Simple Checkout and Inquiries**: Avoid asking for extraneous user fields. A simple name, email, and payment choice maximizes signup rate.`,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "landing-page-essentials",
    title: "Designing Landing Pages That Turn Clicks Into Revenue",
    slug: "landing-page-essentials",
    category: "UI-UX DESIGN",
    subCategory: "CONVERSION OPTIMIZATION",
    publishDate: "MARCH 30, 2026",
    readTime: "4 MIN READ",
    author: {
      name: "Devon Thorne",
      role: "UX Design Lead",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150"
    },
    excerpt: "Good layout design is not about busy graphics. Meticulous typography pairing and high contrast drive standard user actions.",
    contentMarkdown: `## Design is Structural Clarity

Many digital creators cover up weak layouts with excessive gradients or cluttered animations. Perfect design is about structural balance, letting critical text read naturally.

### Key Landing Page Checklists

1. **Clear Header Hook**: Explain what you do within 3 seconds of a reader arriving on the screen.
2. **Mobile Contrast**: A high-contrast color palette ensures text is legible outdoors and on smaller screens.
3. **Structured Lead Forms**: Frame your input elements clearly with distinct focus borders so it looks trustworthy.`,
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
  }
];
