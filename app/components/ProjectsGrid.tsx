"use client"
import { AnimatedCard } from "./ProjectCard/AnimatedCard"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"
import { myProjects } from "@/app/data/portfolio-content"

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const ids = myProjects.map(p => p.id)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  // Generalized offset generation
  const offsets = Object.fromEntries(
    ids.map((id, index) => {
      const base = rawOffsets[id] || { x: 0, y: 0 }
      // distinct values based on index to give some variation
      const dx = isMobile ? -220 : -30 - (index % 3) * 10
      const dy = isMobile ? -120 : -40 + (index % 2) * 10
      const rot = (index % 2 === 0 ? 1 : -1) * (5 + (index % 5))

      return [
        id,
        {
          x: base.x! + dx,
          y: base.y! + dy,
          rot: rot,
          s: responsiveScale,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])

  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2">
        {myProjects.map((project) => (
          <AnimatedCard
            key={project.id}
            src={project.image}
            alt={project.title}
            offset={offsets[project.id]}
            gridId={project.id}
            color={project.color}
            type={project.type} // Using Type as the top label
            progress={progress}
            href={project.href}
            dataText={project.dataText}
          />
        ))}
      </div>
    </section>
  )
}
