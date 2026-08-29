
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
        color: 'text-white',
      },
    ],
  },
];

/* =========================================================
   INDIVIDUAL SKILL
========================================================= */

function SkillRow({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -12,
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
        border-white/[0.09]
        py-4
        transition-all
        duration-300
      "
    >
      {/* Left side */}
      <div className="flex items-center gap-4 sm:gap-6">

        {/* Technology Icon */}
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.06]
            bg-white/[0.025]
            transition-all
            duration-300
            group-hover:border-white/[0.12]
            group-hover:bg-white/[0.05]
          "
        >
          <Icon
            className={`
              text-[21px]
              ${skill.color}
              opacity-90
              transition-all
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
            text-gray-300
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

      {/* Arrow */}
      <span
        className="
          translate-x-[-8px]
          text-sm
          text-purple-400
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        ↗
      </span>

      {/* Animated bottom line */}
      <div
        className="
          absolute
          bottom-[-1px]
          left-0
          h-px
          w-0
          bg-gradient-to-r
          from-purple-500
          via-fuchsia-400
          to-transparent
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
        border-b
        border-white/[0.06]
        py-10
        sm:grid-cols-[150px_1fr]
        sm:gap-12
        lg:grid-cols-[180px_1fr]
        lg:gap-20
      "
    >
      {/* Category */}
      <div className="flex items-start gap-3">

        <span
          className="
            pt-1
            font-mono
            text-[9px]
            tracking-[0.2em]
            text-purple-400
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
              text-gray-300
            "
          >
            {group.title}
          </p>

          <p
            className="
              mt-2
              font-mono
              text-[8px]
              tracking-[0.15em]
              text-gray-600
            "
          >
            {String(group.skills.length).padStart(2, '0')} SKILLS
          </p>
        </div>
      </div>

      {/* Skill list */}
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
   MAIN COMPONENT
========================================================= */

export default function SkillsTesseract() {
  return (
    <section
      id="skills"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#030303]
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-16
        lg:py-32
      "
    >

      {/* ===================================================
          BACKGROUND ATMOSPHERE
      =================================================== */}

      {/* Purple glow — top left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[480px]
          w-[480px]
          rounded-full
          bg-purple-600/[0.09]
          blur-[150px]
        "
      />

      {/* Blue glow — right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[30%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-blue-500/[0.075]
          blur-[160px]
        "
      />

      {/* Pink glow — bottom */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          left-[30%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-fuchsia-500/[0.065]
          blur-[160px]
        "
      />

      {/* Indigo center atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/[0.035]
          blur-[170px]
        "
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* ===================================================
          MAIN CONTENT
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
                bg-gradient-to-r
                from-purple-500
                to-fuchsia-400
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                font-semibold
                tracking-[0.35em]
                text-purple-300
              "
            >
              MY TOOLKIT
            </span>
          </div>

          {/* Heading + description */}
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
                <span className="text-purple-400">.</span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-sm
                  leading-7
                  text-gray-400
                  sm:text-[15px]
                "
              >
                Technologies and tools I use to transform
                ideas into functional digital experiences.
              </p>

            </div>

            {/* Side statement */}
            <div
              className="
                max-w-[240px]
                border-l
                border-purple-400/20
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
                  text-gray-500
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
            SKILLS LIST
        ================================================= */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-black/20
            px-5
            backdrop-blur-sm
            sm:px-8
            lg:px-10
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
            delay: 0.3,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-3
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
              text-gray-500
            "
          >
            05 CATEGORIES · 11 TECHNOLOGIES
          </span>

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.3em]
              text-gray-500
            "
          >
            BUILD · LEARN · CREATE
          </span>

        </motion.div>

      </div>
    </section>
  );
}

