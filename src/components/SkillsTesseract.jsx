
import React from 'react';
import { motion } from 'framer-motion';

import {
  SiJava,
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFigma,
  SiVite,
  SiPostman,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'PROGRAMMING',
    skills: [
      { name: 'Java', icon: SiJava },
      { name: 'Python', icon: SiPython },
      { name: 'C', icon: SiC },
    ],
  },
  {
    title: 'FRONTEND',
    skills: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    title: 'DATABASE',
    skills: [
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Figma', icon: SiFigma },
      { name: 'Vite', icon: SiVite },
    ],
  },
];

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
      }}
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      className="
        group
        relative
        flex
        h-[78px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        border
        border-white/[0.07]
        bg-white/[0.02]
        p-2
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-purple-400/40
        hover:bg-purple-500/[0.05]
        hover:shadow-[0_0_18px_rgba(168,85,247,0.1)]
      "
    >
      {/* Hover Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-6
          -top-6
          h-14
          w-14
          rounded-full
          bg-purple-500/0
          blur-2xl
          transition-all
          duration-500
          group-hover:bg-purple-500/20
        "
      />

      {/* Icon */}
      <Icon
        className="
          relative
          z-10
          mb-1
          text-[23px]
          text-gray-400
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-purple-300
        "
      />

      {/* Name */}
      <span
        className="
          relative
          z-10
          text-center
          text-[10px]
          font-medium
          tracking-wide
          text-gray-500
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.35,
        delay: groupIndex * 0.04,
      }}
      className="relative"
    >
      {/* Category */}
      <div className="mb-2 flex items-center gap-2">
        <span className="h-px w-5 bg-purple-500/70" />

        <h3
          className="
            font-mono
            text-[9px]
            font-semibold
            tracking-[0.2em]
            text-purple-300
          "
        >
          {group.title}
        </h3>

        <div className="h-px flex-1 bg-white/[0.05]" />
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-3
          gap-1.5
          sm:grid-cols-4
          md:grid-cols-5
          lg:grid-cols-6
        "
      >
        {group.skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsTesseract() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-14
        sm:px-8
        sm:py-16
        lg:px-16
        lg:py-20
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.04]
          blur-[90px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-7"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-6 bg-purple-500" />

            <span
              className="
                font-mono
                text-[9px]
                tracking-[0.25em]
                text-purple-400
              "
            >
              MY TOOLKIT
            </span>
          </div>

          <h2
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Skills
            <span className="text-purple-500">.</span>
          </h2>

          <p
            className="
              mt-2
              max-w-lg
              text-xs
              leading-5
              text-gray-500
              sm:text-sm
            "
          >
            Technologies and tools I use to build interactive,
            responsive and practical digital experiences.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="space-y-6">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              groupIndex={index}
            />
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex items-center gap-2"
        >
          <div className="h-px flex-1 bg-white/[0.06]" />

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.25em]
              text-gray-600
            "
          >
            ALWAYS LEARNING
          </span>

          <div className="h-px flex-1 bg-white/[0.06]" />
        </motion.div>

      </div>
    </section>
  );
}

