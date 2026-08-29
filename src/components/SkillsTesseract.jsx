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
   SKILLS DATA
========================================================= */

const skillGroups = [
  {
    title: 'PROGRAMMING',
    number: '01',
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
    title: 'FRONTEND',
    number: '02',
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
    title: 'BACKEND',
    number: '03',
    skills: [
      {
        name: 'Node.js',
        icon: FaNodeJs,
        color: 'text-green-400',
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: 'text-gray-200',
      },
    ],
  },

  {
    title: 'DATABASE',
    number: '04',
    skills: [
      {
        name: 'MySQL',
        icon: SiMysql,
        color: 'text-sky-400',
      },
    ],
  },

  {
    title: 'TOOLS',
    number: '05',
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
   SKILL ITEM
========================================================= */

function SkillItem({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
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
      whileHover={{
        y: -2,
      }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/[0.06]
        bg-white/[0.015]
        px-3.5
        py-3
        transition-all
        duration-300
        hover:border-white/[0.13]
        hover:bg-white/[0.035]
      "
    >
      {/* Icon container */}
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-white/[0.035]
          transition-all
          duration-300
          group-hover:bg-white/[0.06]
        "
      >
        <Icon
          className={`
            text-[20px]
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
          text-[12px]
          font-medium
          tracking-wide
          text-gray-400
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {skill.name}
      </span>

      {/* Tiny indicator */}
      <span
        className="
          ml-auto
          h-1
          w-1
          rounded-full
          bg-white/10
          transition-all
          duration-300
          group-hover:bg-purple-400
          group-hover:shadow-[0_0_7px_rgba(168,85,247,0.7)]
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
        y: 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.4,
        delay: groupIndex * 0.05,
      }}
    >
      {/* Category title */}
      <div className="mb-3 flex items-center gap-3">
        <span
          className="
            font-mono
            text-[8px]
            tracking-[0.2em]
            text-purple-500/70
          "
        >
          {group.number}
        </span>

        <span
          className="
            h-px
            w-5
            bg-white/[0.08]
          "
        />

        <h3
          className="
            text-[9px]
            font-semibold
            tracking-[0.25em]
            text-gray-500
          "
        >
          {group.title}
        </h3>
      </div>

      {/* Skills */}
      <div
        className="
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-2
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
          BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.025]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-100px]
          h-[250px]
          w-[250px]
          rounded-full
          bg-purple-500/[0.015]
          blur-[110px]
        "
      />

      {/* ===================================================
          CONTAINER
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
              {/* KEEPING YOUR ORIGINAL SKILLS FONT STYLE */}
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
                bg-white/[0.02]
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
                  text-gray-500
                "
              >
                ALWAYS LEARNING
              </span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <div
          className="
            grid
            gap-x-12
            gap-y-10
            md:grid-cols-2
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
            BOTTOM LINE
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
            delay: 0.25,
          }}
          className="
            mt-14
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-white/[0.06]
            "
          />

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

          <div
            className="
              h-px
              flex-1
              bg-white/[0.06]
            "
          />
        </motion.div>

      </div>
    </section>
  );
}

