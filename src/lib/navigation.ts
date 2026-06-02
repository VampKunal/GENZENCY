export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavColumn = {
  title: string;
  links: NavLink[];
};

export type NavFeatured = {
  href: string;
  title: string;
  image: string;
  cta: string;
};

export type NavMenu = {
  id: string;
  label: string;
  columns: NavColumn[];
  featured: NavFeatured;
};

export const NAV_MENUS: NavMenu[] = [
  {
    id: "solution",
    label: "Solution",
    columns: [
      {
        title: "Growth Solutions",
        links: [
          { href: "/solutions/brand-solution", label: "Brand Solution", description: "Position your brand where buyers search." },
          { href: "/solutions/tech-solution", label: "Tech Solution", description: "Technical SEO, Core Web Vitals, crawl health." },
          { href: "/solutions/media-solution", label: "Media Solution", description: "Paid social and performance creative." },
        ],
      },
    ],
    featured: {
      href: "/solutions/brand-solution",
      title: "Build search authority that compounds every quarter.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      cta: "Explore solutions",
    },
  },
  {
    id: "about",
    label: "About",
    columns: [
      {
        title: "Who We Are",
        links: [
          { href: "/about/how-we-work", label: "How We Work", description: "Our audit-to-rank process." },
          { href: "/about/testimonies", label: "Testimonies", description: "Client outcomes and reviews." },
          { href: "/about/seo-results", label: "SEO Results", description: "Rankings, traffic, revenue lifts." },
        ],
      },
    ],
    featured: {
      href: "/about/seo-results",
      title: "See how we move brands from page 5 to page 1.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      cta: "View results",
    },
  },
  {
    id: "plans",
    label: "Plans",
    columns: [
      {
        title: "Service Plans",
        links: [
          { href: "/plans/seo-plans", label: "SEO Plans", description: "Monthly organic growth retainers." },
          { href: "/plans/website-redesign-plans", label: "Website Redesign Plans", description: "Conversion-focused rebuilds." },
          { href: "/plans/social-media-marketing-plans", label: "Social Media Marketing Plans", description: "Meta & paid social packages." },
          { href: "/plans/ecommerce-seo-plans", label: "Ecommerce SEO Plans", description: "Product and category optimization." },
        ],
      },
    ],
    featured: {
      href: "/plans/seo-plans",
      title: "Transparent SEO plans built around your revenue goals.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      cta: "Compare plans",
    },
  },
  {
    id: "resources",
    label: "Resources",
    columns: [
      {
        title: "Learn",
        links: [
          { href: "/resources/blogs", label: "Blogs", description: "SEO guides and playbooks." },
          { href: "/resources/the-edge", label: "The Edge", description: "Trends, updates, and insights." },
        ],
      },
    ],
    featured: {
      href: "/resources/blogs",
      title: "Practical SEO tactics you can ship this week.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      cta: "Read blogs",
    },
  },
];

export const CONTACT_HREF = "/contact";
