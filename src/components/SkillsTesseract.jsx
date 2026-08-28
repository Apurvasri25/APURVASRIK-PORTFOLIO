import React from 'react';
import { motion } from 'framer-motion';

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';

import {
  SiC,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiVite,
  SiPostman,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'PROGRAMMING',
    number: '01',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Python', icon: FaPython },
      { name: 'C', icon: SiC },
    ],
  },
  {
    title: 'FRONTEND',
    number: '02',
    skills: [
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs },
      { name: 'React', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'BACKEND',
    number: '03',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
    ],
  },
  {
    title: 'DATABASE',
    number: '04',
    skills: [
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'TOOLS',
    number: '05',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'Figma', icon: FaFigma },
      { name: 'Vite', icon: SiVite },
    ],
  },
];

function SkillItem({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="
        group
        relative
        flex
        min-h-[88px]
        items-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        px-4
        py-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-purple-400/40
        hover:bg-purple-500/[0.055]
        hover:shadow-[0_12px_35px_rgba(168,85,247,0.10)]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-20
          w-20
          rounded-full
          bg-purple-500/0
          blur-2xl
          transition-all
          duration-500
          group-hover:bg-purple-500/20
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/[0.08]
          bg-black/40
          transition-all
          duration-300
          group-hover:border-purple-400/30
          group-hover:bg-purple-500/[0.08]
        "
      >
        <Icon
          className="
            text-[23px]
            text-gray-400
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-purple-300
          "
        />
      </div>

      {/* Text */}
      <div className="relative z-10 min-w-0">
        <p
          className="
            truncate
            text-[12px]
            font-semibold
            tracking-wide
            text-gray-300
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {skill.name}
        </p>

        <p
          className="
            mt-0.5
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-gray-600
            transition-colors
            duration-300
            group-hover:text-purple-400/70
          "
        >
          Technology
        </p>
      </div>

      {/* Arrow */}
      <span
        className="
          absolute
          right-3
          top-3
          text-[10px]
          text-gray-700
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:text-purple-400
          group-hover:opacity-100
        "
      >
        ↗
      </span>
    </motion.div>
  );
}

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.06,
      }}
      className="
        group/category
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.018]
        p-5
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-purple-400/20
        hover:bg-white/[0.025]
      "
    >
      {/* Top glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-20
          left-1/2
          h-32
          w-64
          -translate-x-1/2
          rounded-full
          bg-purple-500/[0.025]
          blur-3xl
          transition-all
          duration-700
          group-hover/category:bg-purple-500/[0.07]
        "
      />

      {/* Category header */}
      <div className="relative z-10 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-purple-500
            "
          >
            {group.number}
          </span>

          <div className="h-4 w-px bg-white/10" />

          <h3
            className="
              font-mono
              text-[10px]
              font-semibold
              tracking-[0.25em]
              text-gray-300
            "
          >
            {group.title}
          </h3>
        </div>

        <span
          className="
            font-mono
            text-[8px]
            tracking-widest
            text-gray-700
          "
        >
          {String(group.skills.length).padStart(2, '0')}
        </span>
      </div>

      {/* Skill cards */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {group.skills.map((skill, index) => (
          <SkillItem
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
        py-20
        sm:px-8
        lg:px-16
      "
    >
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.035]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-[300px]
          w-[300px]
          rounded-full
          bg-fuchsia-600/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-purple-500" />

            <span
              className="
                font-mono
                text-[9px]
                font-semibold
                tracking-[0.3em]
                text-purple-400
              "
            >
              MY TOOLKIT
            </span>

            <span className="h-px w-12 bg-white/[0.08]" />
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2
                className="
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Skills
                <span className="text-purple-500">.</span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                A collection of technologies and tools I use to
                design, build and ship modern digital experiences.
              </p>
            </div>

            {/* Small status box */}
            <div
              className="
                flex
                w-fit
                items-center
                gap-3
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.02]
                px-4
                py-3
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-purple-400
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-purple-500
                  "
                />
              </span>

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-gray-400
                "
              >
                ALWAYS LEARNING
              </span>
            </div>
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              groupIndex={index}
            />
          ))}

          {/* Full width tools */}
          <div className="md:col-span-2">
            {/* The last group is already rendered above,
                so this remains intentionally empty for grid balance */}
          </div>
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-white/[0.07]" />

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.3em]
              text-gray-700
            "
          >
            BUILD · LEARN · CREATE
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </motion.div>

      </div>
    </section>
  );
}
