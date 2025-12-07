import clsx from "clsx"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { MotionDiv } from "../utils/lazy-ui"
import { mySkills } from "../data/skills"

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="skills" className={clsx("inside-container relative z-2", className)}>
      <div className="flex flex-col gap-16 w-full">
        <AnimatedH2>
          Technical <br />
          <span className="text-slate-500">Skills</span>
        </AnimatedH2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {mySkills.map((category, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-semibold text-slate-900 border-b border-gray-200 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-50 rounded-full text-sm text-slate-700 border border-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}
