import profilePhoto from "../images/profile.webp"
import clsx from "clsx"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Ritul Shekhar
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src={profilePhoto} alt="Ritul Shekhar" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Ritul Shekhar
              </Text>
              <p className="text-sm text-gray-500">AI/ML & Data Science Developer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I specialize in AI/ML and Data Science</strong>, creating intelligent systems that solve real-world problems.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I also build full-stack web experiences</strong>. By combining strong backend engineering with modern frontend skills in React & Next.js, I bring data models to life in user-friendly applications.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">Passionate about innovation</strong>, performance, and building products that make a tangible impact.
            </p>

            {/* signature */}
            {/* <Image src={signature} alt="Signature" className="relative mt-6 -ml-3 h-12 w-auto" /> */}
          </Typography>
        </div>
      </div>
    </section>
  )
}
