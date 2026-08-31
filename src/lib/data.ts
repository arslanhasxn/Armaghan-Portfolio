export const siteConfig = {
  name: "Armaghan Hasan",
  role: "Designer",
  city: "Delhi",
  timezone: "Asia/Kolkata",
  email: "armaghanhasan2005@gmail.com",
  phone: "+91 96433 48550",
  phoneHref: "tel:+919643348550",
  resumeUrl:
    "https://drive.google.com/file/d/1_lH_64xfrT-wIpN7LwkBp0jWfCnqe6zV/view?usp=sharing",
  social: {
    twitter: {
      label: "@ar.ma.ghan",
      href: "https://twitter.com/ar.ma.ghan",
    },
    instagram: {
      label: "@ar.ma.ghan",
      href: "https://instagram.com/ar.ma.ghan",
    },
    linkedin: {
      label: "@armaghanhasan",
      href: "https://linkedin.com/in/armaghanhasan",
    },
  },
  avatar:
    "https://framerusercontent.com/images/yB0uJtHYuwcORowUN7rgTINgFMs.jpeg?width=854&height=740",
  faviconLight:
    "https://framerusercontent.com/images/H53zwtvCVdtLq91Rj8fb9VaNv5A.png",
  faviconDark:
    "https://framerusercontent.com/images/0Jx5IAKnaB5WDUmqxmJCAy7bDg.png",
  ogImage:
    "https://framerusercontent.com/images/C4nm7exyQX0DrKBjOrOzqAr09dI.webp",
};

export type ProjectSlug =
  | "travel-easy"
  | "gamma"
  | "stream-ai"
  | "foome"
  | "edbost";

export interface Project {
  slug: ProjectSlug;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  thumbnail: string;
  images: string[];
  challenge: string;
  objective: string;
  results: string;
  prev?: ProjectSlug;
  next?: ProjectSlug;
}

export const projects: Project[] = [
  {
    slug: "travel-easy",
    title: "Furugiya",
    category: "App Design",
    role: "Interaction Designer",
    year: "2024",
    description:
      "Thrifting goes hand in hand with a sustainable lifestyle. With Americans throwing away over 13 million tons of clothing each year, fast fashion and overconsumption lead to excess waste in landfills, carbon emissions from textile manufacturing and depletion of resources. Thrifting promotes sustainability by diverting clothing from landfills for reuse. You can participate in thrifting by donating unwanted clothing and purchasing used clothing instead of buying new.",
    thumbnail:
      "https://framerusercontent.com/images/fycitaOJaK1vNaXFKPqV0nLwqg.jpg?width=1920&height=1080",
    images: [
      "https://framerusercontent.com/images/fycitaOJaK1vNaXFKPqV0nLwqg.jpg?width=1920&height=1080",
      "https://framerusercontent.com/images/h3Oeb4O1bBayJfNtKMD17C8rgno.png?width=1917&height=1078",
      "https://framerusercontent.com/images/0PssZym6wCX0pIazG73YnWFI.jpg?width=1920&height=1080",
    ],
    challenge:
      "Create a digital thrifting platform that makes buying and selling pre-owned luxury clothing more accessible, trustworthy, and convenient. The experience needed to address concerns around authenticity, quality, brand selection, and the overall difficulty of finding desirable second-hand fashion.",
    objective:
      "Design a platform that brings the thrifting experience directly to users, while promoting sustainable fashion and giving consumers access to authenticated luxury menswear and womenswear. The goal was to make discovering, purchasing, and engaging with pre-owned fashion feel simple and appealing.",
    results:
      "Developed the concept and visual direction for FURUGIYA, including its branding, colour palette, typography, product categories, and overall digital experience. User research and survey insights were used to shape the proposed solution around the needs and expectations of its target consumers.",
    next: "gamma",
  },
  {
    slug: "gamma",
    title: "Reflect",
    category: "UX/UI Design",
    role: "UX Designer",
    year: "2025",
    description:
      "Reflect is an emotionally-aware expense tracking app designed to help people understand the feelings and behaviours behind their spending. Instead of focusing only on numbers, the app connects expenses with moods, emotional triggers, and spending patterns to encourage more mindful financial decisions.",
    thumbnail:
      "https://framerusercontent.com/images/J2gg8U1BxqdNGCO4SHm2XP4HifE.png?width=803&height=601",
    images: [
      "https://framerusercontent.com/images/J2gg8U1BxqdNGCO4SHm2XP4HifE.png?width=803&height=601",
      "https://framerusercontent.com/images/AbTGD9JVmHYwU98s8873fFNac.png",
      "https://framerusercontent.com/images/h3Oeb4O1bBayJfNtKMD17C8rgno.png?width=1917&height=1078",
    ],
    challenge:
      "Traditional expense trackers focus on money, categories, and budgets, but overlook the emotional reasons behind spending. This makes it difficult for users to recognise impulsive behaviours, emotional triggers, and patterns that influence their financial decisions.",
    objective:
      "Design a financial experience that helps users become more aware of why they spend, rather than simply showing them how much they spend. The goal was to connect emotions with financial behaviour and make managing money feel more approachable, engaging, and less guilt-driven.",
    results:
      "Designed Reflect as a dark-mode, Gen-Z-focused mobile experience with emotional tagging, mood tracking, reflection journaling, spending insights, and gamification. The resulting experience combines financial tracking with emotional analytics to help users recognise triggers, build awareness, and develop healthier spending habits.",
    prev: "travel-easy",
    next: "stream-ai",
  },
  {
    slug: "stream-ai",
    title: "Cridget",
    category: "Product Design",
    role: "Product Designer",
    year: "2024",
    description:
      "Cridget is a portable, sensory-based cross-stitch kit that transforms fidgeting into mindful breathing. It combines rhythmic hand movement with breathing techniques to create a simple, tactile way for people to regulate energy, improve focus, and find moments of calm without relying on digital devices.",
    thumbnail:
      "https://framerusercontent.com/images/K5R7yzpD72fKxhME3cEEHqKuI.jpg?width=1920&height=1080",
    images: [
      "https://framerusercontent.com/images/K5R7yzpD72fKxhME3cEEHqKuI.jpg?width=1920&height=1080",
      "https://framerusercontent.com/images/h3Oeb4O1bBayJfNtKMD17C8rgno.png?width=1917&height=1078",
    ],
    challenge:
      "People often rely on phones, repetitive movements, or other fidgeting behaviours when feeling restless or overstimulated. Existing sensory tools can be noisy, childish, distracting, or impractical, creating a need for a calming activity that feels accessible, portable, discreet, and engaging.",
    objective:
      "Design an accessible, portable activity that channels fidgeting and restlessness into a mindful, repeatable ritual. The goal was to combine tactile interaction with rhythmic breathing while creating an experience that feels modern, inclusive, and far removed from the typical “therapy tool” aesthetic.",
    results:
      "Developed Cridget, a pocket-sized cross-stitch experience built around rhythmic stitching and box breathing. The final concept includes a portable kit, guided breathing, interchangeable designs, and blind-box style motifs designed to encourage repeat engagement and collection.",
    prev: "gamma",
    next: "foome",
  },
  {
    slug: "foome",
    title: "Mesüt",
    category: "Character Design",
    role: "Character Designer",
    year: "2026",
    description:
      "Mesüt is a character design project centred around a mysterious mage who travels through dying worlds, carrying forgotten knowledge and searching for the force consuming reality. His visual identity uses a hidden face, damaged cloak, triangular silhouette, and symbolic staff to communicate mystery, loneliness, and spiritual depth.",
    thumbnail:
      "https://framerusercontent.com/images/ox0CudDyfULFU74SXTEHcWfUM.jpg?width=2480&height=2181",
    images: [
      "https://framerusercontent.com/images/ox0CudDyfULFU74SXTEHcWfUM.jpg?width=2480&height=2181",
      "https://framerusercontent.com/images/h3Oeb4O1bBayJfNtKMD17C8rgno.png?width=1917&height=1078",
    ],
    challenge:
      "Create a character whose design could communicate a rich story without relying on a visible face or excessive visual detail. The character needed to feel mysterious, ancient, and isolated while belonging naturally within a world of collapsing realities and forgotten magic.",
    objective:
      "Develop a visually distinctive mage with a strong silhouette and a clear visual language. The goal was to use shape, clothing, accessories, and symbolism to communicate Mesüt's personality, history, and role as a silent traveller between worlds.",
    results:
      "Created Mesüt, an unpredictable and observant wandering mage defined by his triangular hood, flowing damaged cloak, hidden face, wooden staff, and bell. The final design establishes a lonely, spiritual character whose visual details hint at his long journey and connection to ancient magic.",
    prev: "stream-ai",
    next: "edbost",
  },
  {
    slug: "edbost",
    title: "Ergoflow Station",
    category: "Product Design",
    role: "Product Designer / 3D Modelling",
    year: "2026",
    description:
      "ErgoFlow Station is a designer-focused drafting workstation created to improve the way designers work. The project combines ergonomic adjustability, integrated storage, task lighting, cable management, and a spacious work surface to create a more comfortable and organized creative workspace.",
    thumbnail:
      "https://framerusercontent.com/images/U3pFoRtwQwLh532aQv2BYfO3CQ.jpeg?width=1600&height=900",
    images: [
      "https://framerusercontent.com/images/U3pFoRtwQwLh532aQv2BYfO3CQ.jpeg?width=1600&height=900",
      "https://framerusercontent.com/images/h3Oeb4O1bBayJfNtKMD17C8rgno.png?width=1917&height=1078",
    ],
    challenge:
      "Existing drafting tables often fall short in stability, adjustability, storage, ergonomics, and workspace organization. Research showed that users particularly wanted better angle adjustment, additional features, and improved storage, while long working sessions could also lead to physical strain.",
    objective:
      "Design a workstation specifically around the way designers actually work—reducing physical strain, organizing creative tools, and adapting to different working positions. The goal was to create a functional, ergonomic, and versatile drafting table that could improve both workflow and productivity.",
    results:
      "Developed ErgoFlow Station, a feature-rich workstation with adjustable height and tilt, integrated storage drawers, repositionable supply trays, task lighting, cable management, and adjustable leveling feet. The concept was positioned as a premium-but-accessible, designer-focused workspace supported by user research and competitive analysis.",
    prev: "foome",
  },
];

export const homeNavItems = [
  {
    label: "Armaghan Hasan",
    href: "/about",
    preview:
      "https://framerusercontent.com/images/yB0uJtHYuwcORowUN7rgTINgFMs.jpeg?width=854&height=740",
  },
  {
    label: "About",
    href: "/about",
    preview:
      "https://framerusercontent.com/images/yB0uJtHYuwcORowUN7rgTINgFMs.jpeg?width=854&height=740",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    preview:
      "https://framerusercontent.com/images/fycitaOJaK1vNaXFKPqV0nLwqg.jpg?width=1920&height=1080",
  },
  {
    label: "Contact",
    href: "/contact",
    preview:
      "https://framerusercontent.com/images/J2gg8U1BxqdNGCO4SHm2XP4HifE.png?width=803&height=601",
  },
  {
    label: "Stack",
    href: null,
    preview:
      "https://framerusercontent.com/images/TYnAWe40HMxz4pwJRcf5ydnQEdc.webp?width=592&height=592",
  },
  {
    label: "Resume",
    href: siteConfig.resumeUrl,
    external: true,
    preview:
      "https://framerusercontent.com/images/0j5gYeoRsZG8PJ9hniVzHMcaYo.webp?width=340&height=500",
  },
  {
    label: "Hey",
    href: null,
    preview:
      "https://framerusercontent.com/images/YSG9Il0233T2Woq4Fpetvt6FxGA.webp?width=334&height=500",
  },
] as const;

export const stackTools = [
  "Claude",
  "Framer",
  "Figma",
  "Notion",
  "Arc",
] as const;

export const aboutContent = {
  bio: "I'm a designer and student at DTU, drawn to the space where thoughtful ideas meet clear, purposeful experiences. I care about how things look, feel, and work, from the overall structure down to the small details that often go unnoticed. I believe good design should feel effortless, intentional, and human, while still having a personality of its own. Alongside my studies, I'm constantly exploring new ideas, experimenting with different mediums, and building things that challenge me, teach me something new, or simply make me curious every day.",
  skills: ["Digital Design –", "Art Direction –", "Illustrator"],
};

export const contactServices = [
  "Multipage Website Design",
  "Landing Page Design",
  "Character Design",
  "Branding/Packaging",
] as const;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function splitTitle(title: string): string {
  return title.split("").join(" ");
}
