
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

const skillGroups = [
  {
    title: 'PROGRAMMING',
    number: '01',
    skills: [
      {
        name: 'Java',
        icon: FaJava,
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        hoverBorder: 'hover:border-orange-400/30',
        hoverBg: 'hover:bg-orange-400/[0.04]',
      },
      {
        name: 'Python',
        icon: FaPython,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        hoverBorder: 'hover:border-blue-400/30',
        hoverBg: 'hover:bg-blue-400/[0.04]',
      },
      {
        name: 'C',
        icon: SiC,
        color: 'text-blue-300',
        bg: 'bg-blue-300/10',
        hoverBorder: 'hover:border-blue-300/30',
        hoverBg: 'hover:bg-blue-300/[0.04]',
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
        bg: 'bg-orange-500/10',
        hoverBorder: 'hover:border-orange-500/30',
        hoverBg: 'hover:bg-orange-500/[0.04]',
      },
      {
        name: 'CSS3',
        icon: FaCss3Alt,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        hoverBorder: 'hover:border-blue-500/30',
        hoverBg: 'hover:bg-blue-500/[0.04]',
      },
      {
        name: 'JavaScript',
        icon: FaJs,
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        hoverBorder: 'hover:border-yellow-400/30',
        hoverBg: 'hover:bg-yellow-400/[0.04]',
      },
      {
        name: 'React',
        icon: FaReact,
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        hoverBorder: 'hover:border-cyan-400/30',
        hoverBg: 'hover:bg-cyan-400/[0.04]',
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: 'text-cyan-300',
        bg: 'bg-cyan-300/10',
        hoverBorder: 'hover:border-cyan-300/30',
        hoverBg: 'hover:bg-cyan-300/[0.04]',
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
        bg: 'bg-green-400/10',
        hoverBorder: 'hover:border-green-400/30',
        hoverBg: 'hover:bg-green-400/[0.04]',
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: 'text-gray-200',
        bg: 'bg-white/10',
        hoverBorder: 'hover:border-white/20',
        hoverBg: 'hover:bg-white/[0.03]',
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
        bg: 'bg-sky-400/10',
        hoverBorder: 'hover:border-sky-400/30',
        hoverBg: 'hover:bg-sky-400/[0.04]',
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
        bg: 'bg-orange-500/10',
        hoverBorder: 'hover:border-orange-500/30',
        hoverBg: 'hover:bg-orange-500/[0.04]',
      },
      {
        name: 'GitHub',
        icon: FaGithub,
        color: 'text-white',
        bg: 'bg-white/10',
        hoverBorder: 'hover:border-white/20',
        hoverBg: 'hover:bg-white/[0.03]',
      },
    ],
  },
];

/* -------------------------------------------------------
   SKILL ITEM
------------------------------------------------------- */

function SkillItem({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -3,
      }}
      className={`
        group
        relative
        flex
        min-h-[68px]
        items-center
        gap-3
        overflow-hidden
        rounded-xl
        border
        border-white/[0.07]
        bg-[#090909]
        px-3.5
        py-3
        backdrop-blur-xl
        transition-all
        duration-300
        ${skill.hoverBorder}
        ${skill.hoverBg}
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      `}
    >
      {/* Subtle hover light */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-20
          w-20
          rounded-full
          bg-white/[0.025]
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className={`
          relative
          z-10
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-white/[0.06]
          ${skill.bg}
          transition-all
          duration-300
          group-hover:scale-105
        `}
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

      {/* Skill information */}
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
            text-[8px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-gray-600
          "
        >
          Technology
        </p>
      </div>

      {/* Minimal status dot */}
      <span
        className="
          relative
          z-10
          ml-auto
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-gray-800
          transition-all
          duration-300
          group-hover:bg-purple-400
          group-hover:shadow-[0_0_8px_rgba(168,85,247,0.7)]
        "
      />
    </motion.div>
  );
}

/* -------------------------------------------------------
   SKILL GROUP
------------------------------------------------------- */

function SkillGroup({ group, groupIndex }) {
  return (
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
        amount: 0.1,
      }}
      transition={{
        duration: 0.45,
        delay: groupIndex * 0.05,
        ease: 'easeOut',
      }}
      className="relative"
    >
      {/* Category header */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Number */}
          <span
            className="
              font-mono
              text-[9px]
              font-medium
              tracking-[0.18em]
              text-purple-500/70
            "
          >
            {group.number}
          </span>

          {/* Divider */}
          <span className="h-3 w-px bg-white/10" />

          {/* Category */}
          <h3
            className="
              text-[9px]
              font-semibold
              tracking-[0.25em]
              text-gray-400
            "
          >
            {group.title}
          </h3>
        </div>

        {/* Count */}
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

/* -------------------------------------------------------
   MAIN SKILLS SECTION
------------------------------------------------------- */

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
          top-0
          h-[380px]
          w-[380px]
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
          right-[-100px]
          top-1/2
          h-[280px]
          w-[280px]
          rounded-full
          bg-fuchsia-600/[0.018]
          blur-[120px]
        "
      />

      {/* Main container */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
        "
      >

        {/* ------------------------------------------------
            HEADER
        ------------------------------------------------- */}

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
          className="mb-10"
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

            <span
              className="
                h-px
                w-10
                bg-white/[0.07]
              "
            />
          </div>

          {/* Heading + status */}
          <div
            className="
              flex
              flex-col
              justify-between
              gap-5
              md:flex-row
              md:items-end
            "
          >
            {/* Heading */}
            <div>
              <h2
                className="
                  text-4xl
                  font-black
                  tracking-[-0.045em]
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
                  mt-3
                  max-w-lg
                  text-sm
                  leading-6
                  text-gray-600
                "
              >
                Technologies and tools I use to build
                modern, scalable digital experiences.
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

        {/* ------------------------------------------------
            SKILL GROUPS
        ------------------------------------------------- */}

        <div
          className="
            grid
            gap-x-10
            gap-y-9
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

        {/* ------------------------------------------------
            BOTTOM DIVIDER
        ------------------------------------------------- */}

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
            mt-12
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

