
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
   SKILL ITEM
========================================================= */

function SkillItem({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
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
        relative
        flex
        w-fit
        cursor-default
        items-center
        gap-2
        py-1
      "
    >
      {/* Icon */}
      <Icon
        className={`
          text-[18px]
          ${skill.color}
          opacity-90
          transition-all
          duration-300
          group-hover:scale-110
        `}
      />

      {/* Name */}
      <span
        className="
          text-[13px]
          font-medium
          tracking-wide
          text-gray-300
          transition-all
          duration-300
          group-hover:translate-x-0.5
          group-hover:text-white
        "
      >
        {skill.name}
      </span>

      {/* Small dot */}
      <span
        className="
          h-1
          w-1
          rounded-full
          bg-white/10
          transition-all
          duration-300
          group-hover:bg-purple-400
        "
      />

      {/* Hover underline */}
      <span
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-purple-400
          transition-all
          duration-300
          group-hover:w-full
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
        y: 8,
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
        duration: 0.4,
        delay: groupIndex * 0.04,
      }}
      className="
        grid
        grid-cols-1
        items-center
        gap-3
        border-b
        border-white/[0.07]
        py-5
        sm:grid-cols-[145px_1fr]
        sm:gap-8
        lg:grid-cols-[165px_1fr]
        lg:gap-12
      "
    >
      {/* Category */}
      <div className="flex items-center gap-2.5">
        <span
          className="
            font-mono
            text-[8px]
            tracking-[0.15em]
            text-purple-400
          "
        >
          {group.number}
        </span>

        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.24em]
            text-gray-400
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
          gap-y-2
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
        isolate
        overflow-hidden
        bg-[#030303]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-16
        lg:py-24
      "
    >
      {/* ===================================================
          BACKGROUND ATMOSPHERE
      =================================================== */}

      {/* Purple glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-600/[0.08]
          blur-[140px]
        "
      />

      {/* Blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-[35%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-blue-500/[0.065]
          blur-[150px]
        "
      />

      {/* Pink glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          left-[35%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-fuchsia-500/[0.055]
          blur-[150px]
        "
      />

      {/* Center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/[0.025]
          blur-[150px]
        "
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* ===================================================
          CONTENT
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

          {/* Label */}
          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-px
                w-8
                bg-gradient-to-r
                from-purple-500
                to-fuchsia-400
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                font-semibold
                tracking-[0.32em]
                text-purple-300
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

           
<h2
  className="
    relative
    inline-block
    text-6xl
    font-black
    uppercase
    leading-none
    tracking-[-0.07em]
    text-white
    sm:text-7xl
    lg:text-[7.5rem]
  "
>
  Skills
  <span
    className="
      ml-1
      text-purple-400
      drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]
    "
  >
    .
  </span>

  {/* subtle accent line */}
  <span
    className="
      absolute
      -bottom-3
      left-0
      h-[2px]
      w-14
      bg-gradient-to-r
      from-purple-500
      to-transparent
      sm:w-20
    "
  />
</h2>



              <p
                className="
                  mt-3
                  max-w-lg
                  text-[13px]
                  leading-6
                  text-gray-400
                "
              >
                Technologies and tools I use to transform
                ideas into functional digital experiences.
              </p>

            </div>

            {/* Side statement */}
            <div
              className="
                hidden
                max-w-[210px]
                border-l
                border-purple-400/20
                pl-4
                md:block
              "
            >
              <p
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  leading-5
                  tracking-[0.16em]
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
            rounded-xl
            border
            border-white/[0.08]
            bg-black/20
            px-5
            backdrop-blur-sm
            sm:px-7
            lg:px-9
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
            duration: 0.4,
            delay: 0.2,
          }}
          className="
            mt-7
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              font-mono
              text-[7px]
              tracking-[0.22em]
              text-gray-600
            "
          >
            05 CATEGORIES · 11 TECHNOLOGIES
          </span>

          <span
            className="
              hidden
              font-mono
              text-[7px]
              tracking-[0.25em]
              text-gray-600
              sm:block
            "
          >
            BUILD · LEARN · CREATE
          </span>

        </motion.div>

      </div>
    </section>
  );
}
