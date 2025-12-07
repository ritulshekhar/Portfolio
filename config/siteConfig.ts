export const DOMAIN_URL = "https://www.ritulshekhar.com"

export const SITE_CONFIG = {
  title: "Ritul Shekhar - Web Developer Portfolio",
  description: "Portfolio of Ritul Shekhar, a software engineer.",
  url: DOMAIN_URL ?? "http://localhost:3000",
  siteName: "Ritul Shekhar",
  keywords: ["Ritul Shekhar", "Web Developer Portfolio", "Software Engineer"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "Ritul Shekhar",
  googleBusinessType: "LocalBusiness" as const,
  contact: "Ritul Shekhar",
  contactTitle: "Software Engineer",
  email: "ritulshekhar@gmail.com",
  phone: "",
  formattedPhone: "",
  addressLink: "",
  street: "",
  city: "Chennai",
  state: "Tamil Nadu",
  zipCode: "",
  openingHours: [{ days: "Mon - Fri", hours: "9am - 5pm" }] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "",
    linkedIn: "https://www.linkedin.com/in/ritulshekhar/",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/ritulshekhar",
    x: "https://x.com/ritulshekhar",
    instagram: "https://www.instagram.com/ritulshekhar/",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: [],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    iao: "/projects/iron-and-oak",
    automedics: "/projects/automedics",
    bespoke: "/projects/bespoke",
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
