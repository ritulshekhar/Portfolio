import Link from "next/link"
import { TextSlider } from "./TextSlider"
import { Socials } from "../Socials"
import { SITE_NAP, SITE_SLUGS } from "@/config/siteConfig"
import { H2 } from "@/app/ui/Elements"

const words: [string, string, string, string] = ["build", "create", "design", "make"]

export const socialLinks = [
  {
    href: SITE_NAP.profiles.linkedIn,
    icon: "linkedin",
  },
  {
    href: SITE_NAP.profiles.github,
    icon: "github",
  },
  {
    href: SITE_NAP.profiles.x,
    icon: "x",
  },
  {
    href: SITE_NAP.profiles.instagram,
    icon: "instagram",
  },
]

export const FooterV2: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-black">
      <div className="xs:pb-32 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5.5 pt-12 pb-24 text-white sm:pb-40 md:gap-16 md:px-11 md:pt-16 lg:pb-54">
        <div className="flex flex-col gap-8 md:gap-12">
          <H2 className="text-5xl leading-12 text-white md:text-6xl md:leading-14">
            Lets&nbsp;
            <TextSlider words={words} height={50} mobileHeight={41} />
            <br />
            <span className="text-gray-500">incredible work together.</span>
          </H2>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Socials socialLinks={socialLinks} className="md:order-last" iconClassName="text-white" />
            <div className="flex flex-col gap-4 text-gray-500 md:flex-row md:gap-8">
              <a href={`mailto:${SITE_NAP.email}`} className="text-sm transition-colors duration-200 hover:text-gray-300">
                {SITE_NAP.email}
              </a>
              {/* <Link href="/terms-of-service" className="text-sm transition-colors duration-200 hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-sm transition-colors duration-200 hover:text-gray-300">
                Privacy Policy
              </Link> */}
            </div>
          </div>
          <div className="footer-links flex gap-4">
            <Link href={SITE_SLUGS.home} className="text-sm transition-colors duration-200 hover:text-gray-300">
              Home
            </Link>
            <Link href={SITE_SLUGS.projects} className="text-sm transition-colors duration-200 hover:text-gray-300">
              Projects
            </Link>
            <Link href={SITE_SLUGS.about} className="text-sm transition-colors duration-200 hover:text-gray-300">
              About
            </Link>
            <Link href={SITE_SLUGS.contact} className="text-sm transition-colors duration-200 hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-2 text-xs text-nowrap md:flex-row">
          <div className="flex items-center gap-5.5 max-sm:flex-wrap">
            <h3>
              <span className="text-[#b8b8b8]">Based in </span> Chennai, India
            </h3>
            <div className="flex gap-4">
              {/* <Link href="/terms-of-service" className="text-sm transition-colors duration-200 hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="text-sm transition-colors duration-200 hover:text-gray-300">
                Privacy Policy
              </Link> */}
            </div>
          </div>
          <span className="text-[#b8b8b8]">© 2025 Ritul Shekhar</span>
        </div>
        <h2 className="large-brand-text absolute -bottom-16 left-0 flex w-full items-center justify-center font-medium whitespace-nowrap text-white md:text-[180px] lg:text-[240px]">
          Ritul Shekhar
        </h2>
      </div>
    </footer>
  )
}
