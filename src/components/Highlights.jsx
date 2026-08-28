import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Trophy,
  Code2,
  Medal,
  CalendarDays,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

/* =========================================
   DATA
========================================= */

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'V.S.B College of Engineering Technical Campus',
    score: '8.39',
    scoreLabel: 'CGPA',
    duration: '2023 — 2027',
    location: 'Coimbatore, Tamil Nadu',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Adharsh Vidhyala Matric Hr. Sec. School',
    score: '72.83%',
    scoreLabel: 'PERCENTAGE',
    duration: '2022 — 2023',
    location: 'Erode, Tamil Nadu',
  },
];

const certifications = [
  'NPTEL — Computer Networks and Internet Protocol',
  'NPTEL — Cloud Computing',
  'NPTEL — Programming in Java',
  'NPTEL — The Joy of Computing using Python',
  'ServiceNow — Virtual Internship Completion',
  'HackerRank — Frontend Developer (React)',
];

const achievements = [
  {
    title: 'HybrionX Patent',
    description:
      'Published patent — Hybrid Energy Switching E-Vehicle',
    detail: 'Patent No. 202541016688 A',
  },
  {
    title: 'Technical Symposium Coordinator',
    description:
      'Student Coordinator, Department Technical Symposium',
  },
  {
    title: 'Letter of Recommendation',
    description:
      'Received Letter of Recommendation from Prodigy Infotech',
  },
  {
    title: 'NSS Member',
    description:
      'Member of National Service Scheme at V.S.B College',
  },
];

const activities = [
  'Women Who Master Hackathon — Logitech & Aspire For Her',
  'TenzorX National AI Hackathon 2026 — Poonawalla Fincorp',
  'Thooral Hackathon — PSG College of Technology',
  'Technical Paper Presentation — GCT, Coimbatore',
  'Technical Paper Presentation — Bannari Amman Institute of Technology',
];

/* =========================================
   SMALL SECTION TAG
========================================= */

function Tag({ children }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="h-px w-6 bg-purple-500" />

      <span className="font-mono text-[9px] font-semibold tracking-[0.25em] text-purple-400">
        {children}
      </span>
    </div>
  );
}

/* =========================================
   EDUCATION CARD
========================================= */

function EducationCard({ item, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.55,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-purple-400/30
        hover:bg-purple-500/[0.035]
        hover:shadow-[0_20px_60px_rgba(168,85,247,0.10)]
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-purple-500/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-purple-500/10
        "
      />

      {/* Number */}

      <div className="absolute right-6 top-5 font-mono text-[10px] tracking-[0.2em] text-white/20">
        0{index + 1}
      </div>

      <div className="relative z-10">

        {/* Icon + Duration */}

        <div className="mb-7 flex items-center justify-between">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              border
              border-purple-400/20
              bg-purple-500/[0.07]
            "
          >
            <GraduationCap className="h-5 w-5 text-purple-400" />
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 text-gray-600" />

            <span className="font-mono text-[9px] tracking-wider text-gray-500">
              {item.duration}
            </span>
          </div>

        </div>

        {/* Degree */}

        <h3 className="max-w-md text-xl font-bold leading-snug text-white">
          {item.degree}
        </h3>

        {/* Institution */}

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {item.institution}
        </p>

        {/* Bottom */}

        <div className="mt-8 flex items-end justify-between border-t border-white/[0.07] pt-5">

          <div>
            <p className="font-mono text-[8px] tracking-[0.2em] text-gray-600">
              {item.scoreLabel}
            </p>

            <p className="mt-1 text-3xl font-black text-purple-300">
              {item.score}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-gray-600">
              {item.location}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}

/* =========================================
   CERTIFICATION CARD
========================================= */

function CertificationCard({ text, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{
        x: 4,
      }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/[0.06]
        bg-black/20
        px-4
        py-3.5
        transition-all
        duration-300
        hover:border-purple-400/25
        hover:bg-purple-500/[0.04]
      "
    >
      <div
        className="
          flex
          h-7
          w-7
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-purple-500/[0.08]
        "
      >
        <Award className="h-3.5 w-3.5 text-purple-400" />
      </div>

      <span className="text-xs leading-5 text-gray-400 transition-colors group-hover:text-gray-200">
        {text}
      </span>
    </motion.div>
  );
}

/* =========================================
   ACHIEVEMENT CARD
========================================= */

function AchievementCard({ item, index }) {
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
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-5
        transition-all
        duration-300
        hover:border-purple-400/25
        hover:bg-purple-500/[0.035]
      "
    >
      <div
        className="
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-purple-500/0
          blur-2xl
          transition-all
          duration-500
          group-hover:bg-purple-500/10
        "
      />

      <div className="relative z-10 flex gap-4">

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-purple-400/15
            bg-purple-500/[0.06]
          "
        >
          <Trophy className="h-4 w-4 text-purple-400" />
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">
            {item.title}
          </h4>

          <p className="mt-1.5 text-xs leading-5 text-gray-500">
            {item.description}
          </p>

          {item.detail && (
            <div className="mt-3 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-purple-400" />

              <span className="font-mono text-[8px] tracking-wider text-purple-400/70">
                {item.detail}
              </span>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}

/* =========================================
   ACTIVITY CARD
========================================= */

function ActivityCard({ activity, index }) {
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
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      className="
        group
        flex
        items-start
        gap-3
        rounded-xl
        border
        border-white/[0.06]
        bg-black/20
        px-4
        py-3.5
        transition-all
        duration-300
        hover:border-purple-400/25
        hover:bg-purple-500/[0.035]
      "
    >
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-purple-500/[0.07]">
        <Medal className="h-3.5 w-3.5 text-purple-400" />
      </div>

      <span className="text-xs leading-5 text-gray-400 transition-colors group-hover:text-gray-200">
        {activity}
      </span>
    </motion.div>
  );
}

/* =========================================
   MAIN
========================================= */

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-24
        sm:px-8
        lg:px-16
      "
    >

      {/* =====================================
          BACKGROUND
      ===================================== */}

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
          bg-purple-600/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-purple-700/[0.025]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================
            HEADER
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-16"
        >

          <Tag>MY JOURNEY</Tag>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Education
                <span className="text-purple-500">.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Academic background, certifications and experiences
                that shaped my journey as a Computer Science Engineer.
              </p>
            </div>

            {/* Small status */}

            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-gray-500">
                2023 — PRESENT
              </span>
            </div>

          </div>

        </motion.div>

        {/* =====================================
            EDUCATION
        ===================================== */}

        <div className="mb-28">

          <div className="mb-7 flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-purple-400" />

            <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-gray-400">
              EDUCATION
            </span>

            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <EducationCard
                key={item.institution}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>

        {/* =====================================
            HIGHLIGHTS HEADER
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-10"
        >

          <Tag>BEYOND CODE</Tag>

          <div className="flex items-center gap-4">

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Highlights
              <span className="text-purple-500">.</span>
            </h2>

            <Sparkles className="hidden h-6 w-6 text-purple-400 sm:block" />

          </div>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Things I've built, participated in and achieved beyond
            everyday development.
          </p>

        </motion.div>

        {/* =====================================
            BENTO GRID
        ===================================== */}

        <div className="grid gap-5 lg:grid-cols-12">

          {/* ===================================
              FEATURED PATENT
          =================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              relative
              min-h-[300px]
              overflow-hidden
              rounded-3xl
              border
              border-purple-400/15
              bg-gradient-to-br
              from-purple-500/[0.10]
              via-white/[0.025]
              to-transparent
              p-7
              lg:col-span-7
            "
          >

            {/* Giant background number */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-10
                -right-4
                text-[180px]
                font-black
                leading-none
                text-purple-500/[0.035]
              "
            >
              01
            </div>

            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-purple-500/0
                blur-3xl
                transition-all
                duration-700
                group-hover:bg-purple-500/15
              "
            />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>

                <div className="mb-8 flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/[0.08]">
                    <Trophy className="h-5 w-5 text-purple-300" />
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.25em] text-purple-400">
                    FEATURED ACHIEVEMENT
                  </span>

                </div>

                <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  HybrionX
                  <br />
                  <span className="text-purple-300">
                    Patent
                  </span>
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500">
                  Published patent for a Hybrid Energy Switching
                  E-Vehicle concept, combining innovation with
                  sustainable transportation.
                </p>

              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">

                <span className="font-mono text-[9px] tracking-[0.15em] text-purple-400/70">
                  PATENT NO. 202541016688 A
                </span>

                <ExternalLink className="h-4 w-4 text-gray-600 transition-colors group-hover:text-purple-400" />

              </div>

            </div>

          </motion.div>

          {/* ===================================
              CERTIFICATIONS
          =================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              lg:col-span-5
            "
          >

            <div className="mb-5 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/[0.07]">
                  <Award className="h-4 w-4 text-purple-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Certifications
                  </p>

                  <p className="font-mono text-[8px] tracking-wider text-gray-600">
                    06 CREDENTIALS
                  </p>
                </div>
              </div>

              <span className="text-2xl font-black text-white/10">
                02
              </span>

            </div>

            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={cert}
                  text={cert}
                  index={index}
                />
              ))}
            </div>

          </motion.div>

          {/* ===================================
              ACHIEVEMENTS
          =================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.12,
            }}
            className="
              rounded-3xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-6
              lg:col-span-7
            "
          >

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/[0.07]">
                  <Trophy className="h-4 w-4 text-purple-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Achievements
                  </p>

                  <p className="font-mono text-[8px] tracking-wider text-gray-600">
                    RECOGNITION & LEADERSHIP
                  </p>
                </div>

              </div>

              <span className="font-mono text-[9px] text-white/10">
                03
              </span>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((item, index) => (
                <AchievementCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>

          </motion.div>

          {/* ===================================
              HACKATHONS
          =================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              delay: 0.16,
            }}
            className="
              rounded-3xl
              border
              border-white/[0.07]
              bg-gradient-to-br
              from-white/[0.03]
              to-transparent
              p-6
              lg:col-span-5
            "
          >

            <div className="mb-6 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/[0.07]">
                  <Code2 className="h-4 w-4 text-purple-400" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Activities
                  </p>

                  <p className="font-mono text-[8px] tracking-wider text-gray-600">
                    HACKATHONS & EVENTS
                  </p>
                </div>

              </div>

              <span className="font-mono text-[9px] text-white/10">
                04
              </span>

            </div>

            <div className="space-y-2">

              {activities.map((activity, index) => (
                <ActivityCard
                  key={activity}
                  activity={activity}
                  index={index}
                />
              ))}

            </div>

          </motion.div>

        </div>

        {/* =====================================
            BOTTOM
        ===================================== */}

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
            duration: 0.6,
          }}
          className="mt-20 flex items-center gap-4"
        >

          <div className="h-px flex-1 bg-white/[0.07]" />

          <div className="flex items-center gap-2">

            <span className="h-1 w-1 rounded-full bg-purple-500" />

            <span className="font-mono text-[8px] tracking-[0.3em] text-gray-600">
              KEEP LEARNING • KEEP BUILDING
            </span>

            <span className="h-1 w-1 rounded-full bg-purple-500" />

          </div>

          <div className="h-px flex-1 bg-white/[0.07]" />

        </motion.div>

      </div>
    </section>
  );
}
