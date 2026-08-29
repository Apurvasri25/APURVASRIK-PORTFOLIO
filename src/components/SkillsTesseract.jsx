
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
  SiMysql,
} from 'react-icons/si';

/* =========================================================
   SKILLS DATA
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
   SKILL ROW
========================================================= */

function SkillRow({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: 'easeOut',
      }}
      className="
        group
        relative
        flex
        cursor-default
        items-center
        justify-between
        border-b
        border-white/[0.055]
        py-4
        transition-all
        duration-300
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4 sm:gap-6">

        {/* Icon */}
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            opacity-50
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <Icon
            className={`
              text-[21px]
              ${skill.color}
              transition-transform
              duration-300
              group-hover:scale-110
            `}
          />
        </div>

        {/* Skill name */}
        <span
          className="
            text-[15px]
            font-medium
            tracking-wide
            text-gray-500
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:text-white
            sm:text-[16px]
          "
        >
          {skill.name}
        </span>
      </div>

      {/* Right arrow */}
      <span
        className="
          translate-x-[-8px]
          text-sm
          text-gray-700
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:text-purple-400
          group-hover:opacity-100
        "
      >
        ↗
      </span>

      {/* Hover line */}
      <div
        className="
          absolute
          bottom-[-1px]
          left-0
          h-px
          w-0
          bg-purple-500
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
}

/* =========================================================
   SKILL CATEGORY
========================================================= */

function SkillGroup({ group, groupIndex }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
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
        duration: 0.5,
        delay: groupIndex * 0.05,
      }}
      className="
        grid
        grid-cols-1
        gap-6
        py-10
        sm:grid-cols-[150px_1fr]
        sm:gap-12
        lg:grid-cols-[180px_1fr]
        lg:gap-20
      "
    >
      {/* Category information */}
      <div className="flex items-start gap-3">
        <span
          className="
            pt-1
            font-mono
            text-[9px]
            tracking-[0.2em]
            text-purple-500
          "
        >
          {group.number}
        </span>

        <div>
          <p
            className="
              text-[10px]
              font-semibold
              tracking-[0.28em]
              text-gray-500
            "
          >
            {group.title}
          </p>

          <p
            className="
              mt-2
              text-[8px]
              uppercase
              tracking-[0.15em]
              text-gray-700
            "
          >
            {String(group.skills.length).padStart(2, '0')} SKILLS
          </p>
        </div>
      </div>

      {/* Skills */}
      <div>
        {group.skills.map((skill, index) => (
          <SkillRow
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
   MAIN SKILLS SECTION
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
        py-24
        sm:px-8
        sm:py-28
        lg:px-16
        lg:py-32
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[160px]
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
          max-w-6xl
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-20"
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span
              className="
                h-px
                w-10
                bg-purple-500
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                font-medium
                tracking-[0.35em]
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
              justify-between
              gap-8
              lg:flex-row
              lg:items-end
            "
          >
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
                  mt-6
                  max-w-lg
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-[15px]
                "
              >
                Technologies and tools I use to transform
                ideas into functional digital experiences.
              </p>
            </div>

            {/* Side text */}
            <div
              className="
                max-w-[220px]
                border-l
                border-white/[0.08]
                pl-5
              "
            >
              <p
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  leading-5
                  tracking-[0.18em]
                  text-gray-700
                "
              >
                Continuously learning,
                experimenting and
                building better.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SKILL LIST
        ================================================= */}

        <div
          className="
            border-t
            border-white/[0.08]
          "
        >
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              groupIndex={index}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM
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
            delay: 0.3,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-3
            border-t
            border-white/[0.06]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
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

