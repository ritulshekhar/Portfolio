import { HeroV2 } from "../components/HeroV2"
import { ProjectsSection } from "../components/ProjectsSection"
import { AboutSectionV2 } from "../components/AboutSectionV2"
import { ServicesSectionV2 } from "../components/ServicesSectionV2"
import { ResumeSection } from "../components/ResumeSection"
import { RecruiterContact } from "../components/RecruiterContact"
import { Metadata } from "next"
import { SITE_CONFIG, SITE_SLUGS } from "@/config/siteConfig"
import { homeGraph } from "@/config/schemas"
import Script from "next/script"

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description:
    "Explore the web developer portfolio of Ritul Shekhar.",

  keywords: [
    "Ritul Shekhar",
    "Web Developer Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Ritul Shekhar" }],
  creator: "Ritul Shekhar",
  alternates: {
    canonical: SITE_SLUGS.home,
  },
}

const PortfolioPage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Script
        id="id-site-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeGraph),
        }}
      />
      <HeroV2 />
      <div className="border-b border-gray-200" />
      <ProjectsSection />
      <AboutSectionV2 />
      <ServicesSectionV2 />
      <ResumeSection />
      <RecruiterContact />
      {/* <FAQSection /> */}
    </main>
  )
}
export default PortfolioPage
