```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Prodigy Infotech',
    role: 'Web Development Intern',
    date: 'June 2025',
    type: 'ONLINE INTERNSHIP',
    description:
      'Worked on practical web development tasks and built interactive web solutions using modern development techniques.',
    points: [
      'Designed interactive and functional web components',
      'Applied modern web development practices',
      'Analyzed requirements and implemented practical solutions',
    ],
  },
  {
    company: 'TechnoHacks Edutech',
    role: 'Full Stack Web Development Intern',
    date: 'July 2023',
    type: 'ONLINE INTERNSHIP',
    description:
      'Gained hands-on experience in frontend development and software development practices through real-time tasks.',
    points: [
      'Developed responsive web pages using HTML, CSS and JavaScript',
      'Implemented frontend components to improve user interaction',
      'Worked on practical development tasks and application architecture',
    ],
  },
];

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="group relative"
    >
      {/* Timeline line */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-[19px] top-12 hidden h-[calc(100%+48px)] w-px bg-white/[0.08] md:block" />
      )}

      <div className="flex gap-5 md:gap-7">

        {/* Timeline Dot */}
        <div className="relative z-10 hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-black shadow-[0_0_20px_rgba(168,85,247,0.12)]">
          <div className="h-2.5 w-2.5 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
        </div>

        {/* Card */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.025]
            p-6
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:border-purple-400/30
            group-hover:bg-purple-500/[0.025]
            group-hover:shadow-[0_0_35px_rgba(168,85,247,0.08)]
          "
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-purple-500/0
              blur-3xl
              transition-all
              duration-500
              group-hover:bg-purple-500/10
            "
          />

          <div className="relative z-10">

            {/* Top row */}
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-purple-400" />

                  <span className="font-mono text-[9px] font-semibold tracking-[0.22em] text-purple-400">
                    {experience.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {experience.company}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-400">
                  {experience.role}
                </p>
              </div>

              <span className="font-mono text-[10px] tracking-wider text-gray-500">
                {experience.date}
              </span>
            </div>

            {/* Description */}
            <p className="mb-5 max-w-2xl text-sm leading-6 text-gray-500">
              {experience.description}
            </p>

            {/* Points */}
            <div className="space-y-2.5">
              {experience.points.map((point, pointIndex) => (
                <div
                  key={pointIndex}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-400" />

                  <span className="text-xs leading-5 text-gray-400 sm:text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-20
        sm:px-8
        lg:px-16
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.04]
          blur-[110px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-500" />

            <span className="font-mono text-[10px] tracking-[0.28em] text-purple-400">
              EXPERIENCE
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where I've
            <span className="text-purple-500"> Worked.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Hands-on experience gained through internships and practical
            development projects.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-white/[0.07]" />

          <span className="font-mono text-[9px] tracking-[0.28em] text-gray-600">
            BUILD • LEARN • GROW
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </motion.div>

      </div>
    </section>
  );
}
```
