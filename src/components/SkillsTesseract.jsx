import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "WEB DEVELOPMENT",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "DATABASE & CLOUD",
    skills: ["SQL", "Cloud Computing"],
  },
  {
    title: "TOOLS",
    skills: ["Git", "GitHub", "VS Code", "ServiceNow"],
  },
  {
    title: "SOFT SKILLS",
    skills: ["Team Collaboration", "Communication", "Initiative"],
  },
];

export default function SkillsTesseract() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16">
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-purple-400">
            WHAT I WORK WITH
          </p>

          <h2 className="font-display text-5xl font-extrabold text-white sm:text-6xl">
            Skills<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-gray-400">
            Technologies and tools I use to build practical,
            scalable and interactive digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/[0.04]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

              {/* Category */}
              <div className="relative">
                <div className="mb-6 flex items-center gap-3">

                  <span className="h-px w-8 bg-purple-500" />

                  <h3 className="font-mono text-sm font-bold tracking-[0.18em] text-purple-400">
                    {category.title}
                  </h3>

                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-purple-400/50 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />

          <span className="font-mono text-xs tracking-widest text-gray-600">
            ALWAYS LEARNING
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

      </div>
    </section>
  );
}
