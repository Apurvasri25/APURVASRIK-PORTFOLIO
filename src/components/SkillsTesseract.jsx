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
} from 'react-icons/fa';

import {
  SiC,
  SiExpress,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    number: '01',
    title: 'PROGRAMMING',
    skills: [
      {
        name: 'Java',
        icon: FaJava,
        color: 'text-orange-400',
      },
      {
        name: 'Python',
        icon: FaPython,
        color: 'text-blue-400',
      },
      {
        name: 'C',
        icon: SiC,
        color: 'text-blue-300',
      },
    ],
  },

  {
    number: '02',
    title: 'FRONTEND',
    skills: [
      {
        name: 'HTML5',
        icon: FaHtml5,
        color: 'text-orange-500',
      },
      {
        name: 'CSS3',
        icon: FaCss3Alt,
        color: 'text-blue-500',
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        color: 'text-yellow-400',
      },
      {
        name: 'React',
        icon: FaReact,
        color: 'text-cyan-400',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-cyan-300',
      },
    ],
  },

  {
    number: '03',
    title: 'BACKEND',
    skills: [
      {
        name: 'Node.js',
        icon: FaNodeJs,
        color: 'text-green-400',
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: 'text-gray-300',
      },
    ],
  },

  {
    number: '04',
    title: 'DATABASE',
    skills: [
      {
        name: 'MySQL',
        icon: SiMysql,
        color: 'text-sky-400',
      },
    ],
  },

  {
    number: '05',
    title: 'TOOLS',
    skills: [
      {
        name: 'Git',
        icon: FaGitAlt,
        color: 'text-orange-500',
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        color: 'text-gray-100',
      },
    ],
  },
];

/* =========================================================
   INDIVIDUAL SKILL
========================================================= */

function SkillItem({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      className="
        group
        inline-flex
        w-fit
        cursor-default
        items-center
        gap-2.5
        border-b
        border-transparent
        pb-1.5
        transition-all
        duration-300
        hover:border-white/[0.12]
      "
    >
      {/* Icon */}
      <Icon
        className={`
          text-[20px]
          ${skill.color}
          opacity-80
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:opacity-100
        `}
      />

      {/* Name */}
      <span
        className="
          text-[13px]
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

      {/* Tiny dot */}
      <span
        className="
          ml-0.5
          h-1
          w-1
          rounded-full
          bg-white/10
          transition-all
          duration-300
          group-hover:bg-purple-400
        "
      />
    </motion.div>
  );
}

/* =========================================================
   SKILL GROUP
========================================================= */

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.05,
      }}
      className="
        grid
        grid-cols-[110px_1fr]
        gap-6
        border-t
        border-white/[0.06]
        py-6
        sm:grid-cols-[140px_1fr]
        sm:gap-10
      "
    >
      {/* Category */}
      <div className="flex items-start gap-2.5">
        <span
          className="
            pt-0.5
            font-mono
            text-[8px]
            tracking-[0.15em]
            text-purple-500/70
          "
        >
          {group.number}
        </span>

        <span
          className="
            pt-0.5
            text-[9px]
            font-semibold
            tracking-[0.22em]
            text-gray-600
          "
        >
          {group.title}
        </span>
      </div>

      {/* Skills */}
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-x-7
          gap-y-4
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

/* =========================================================
   MAIN COMPONENT
========================================================= */

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
      {/* ===================================================
          SUBTLE BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[140px]
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-12"
        >
          {/* Small label */}
          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-px
                w-7
                bg-purple-500
              "
            />

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
          </div>

          {/* Heading */}
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              {/* Your Skills heading — unchanged */}
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
                  text-gray-600
                "
              >
                A collection of technologies and tools I use
                to design, build and ship modern digital
                experiences.
              </p>
            </div>

            {/* Status */}
            <div
              className="
                flex
                w-fit
                items-center
                gap-2.5
                rounded-full
                border
                border-white/[0.07]
                px-3.5
                py-2
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="
                    absolute
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-green-400
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-green-400
                  "
                />
              </span>

              <span
                className="
                  font-mono
                  text-[8px]
                  tracking-[0.2em]
                  text-gray-600
                "
              >
                ALWAYS LEARNING
              </span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SKILLS
        ================================================= */}

        <div>
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              groupIndex={index}
            />
          ))}

          {/* Bottom border */}
          <div
            className="
              h-px
              w-full
              bg-white/[0.06]
            "
          />
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.25em]
              text-gray-700
            "
          >
            05 CATEGORIES
          </span>

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
        </motion.div>

      </div>
    </section>
  );
}

