import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Trophy,
  Code2,
} from 'lucide-react';

const education = [
  {
    title: 'V.S.B College of Engineering Technical Campus',
    subtitle: 'B.E. Computer Science and Engineering',
    detail: 'CGPA: 8.39',
    date: '2023 – 2027',
    location: 'Coimbatore, Tamil Nadu',
  },
  {
    title: 'Adharsh Vidhyala Matric Hr. Sec. School',
    subtitle: 'Higher Secondary Certificate (HSC)',
    detail: '72.83%',
    date: '2022 – 2023',
    location: 'Erode, Tamil Nadu',
  },
];

const certifications = [
  'NPTEL – Computer Networks and Internet Protocol (Elite)',
  'NPTEL – Cloud Computing (Elite)',
  'NPTEL – Programming in Java (Elite + Silver)',
  'NPTEL – The Joy of Computing using Python',
  'ServiceNow – Virtual Internship Completion',
  'HackerRank – Frontend Developer (React)',
];

const achievements = [
  'Published patent: “HybrionX: Hybrid Energy Switching E-Vehicle” – Patent No. 202541016688 A',
  'Student Coordinator – Department Technical Symposium',
  'Received Letter of Recommendation from Prodigy Infotech',
  'Member – National Service Scheme (NSS)',
];

const activities = [
  'Women Who Master Hackathon – Logitech & Aspire For Her',
  'TenzorX National AI Hackathon 2026 – Poonawalla Fincorp',
  'Thooral Hackathon – PSG College of Technology',
  'Technical Paper Presentation – Government College of Technology (GCT), Coimbatore',
  'Technical Paper Presentation – Bannari Amman Institute of Technology (BIT)',
];

function SectionTitle({ icon: Icon, label }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/[0.06]">
        <Icon className="h-4 w-4 text-purple-400" />
      </div>

      <div>
        <span className="font-mono text-[9px] tracking-[0.22em] text-purple-400">
          {label}
        </span>
      </div>

      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

function CompactCard({ children, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{ y: -2 }}
      className="
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-4
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-purple-400/25
        hover:bg-purple-500/[0.025]
      "
    >
      {children}
    </motion.div>
  );
}

export default function Highlights() {
  return (
    <section
      id="highlights"
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
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-10
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/[0.04]
          blur-[120px]
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
              BEYOND CODE
            </span>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Highlights
            <span className="text-purple-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Education, certifications, achievements and activities that
            complement my technical journey.
          </p>
        </motion.div>

        {/* ================= EDUCATION ================= */}

        <div className="mb-12">
          <SectionTitle
            icon={GraduationCap}
            label="EDUCATION"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item, index) => (
              <CompactCard key={item.title} index={index}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-sm font-medium text-purple-300">
                      {item.detail}
                    </p>
                  </div>

                  <span className="shrink-0 font-mono text-[9px] tracking-wider text-gray-500">
                    {item.date}
                  </span>
                </div>

                <p className="mt-3 text-xs text-gray-600">
                  {item.location}
                </p>
              </CompactCard>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}

        <div className="mb-12">
          <SectionTitle
            icon={Award}
            label="CERTIFICATIONS"
          />

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <CompactCard key={cert} index={index}>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

                  <p className="text-xs leading-5 text-gray-400">
                    {cert}
                  </p>
                </div>
              </CompactCard>
            ))}
          </div>
        </div>

        {/* ================= ACHIEVEMENTS ================= */}

        <div className="mb-12">
          <SectionTitle
            icon={Trophy}
            label="ACHIEVEMENTS"
          />

          <div className="grid gap-2 md:grid-cols-2">
            {achievements.map((achievement, index) => (
              <CompactCard key={achievement} index={index}>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

                  <p className="text-xs leading-5 text-gray-400">
                    {achievement}
                  </p>
                </div>
              </CompactCard>
            ))}
          </div>
        </div>

        {/* ================= HACKATHONS & ACTIVITIES ================= */}

        <div>
          <SectionTitle
            icon={Code2}
            label="HACKATHONS & ACTIVITIES"
          />

          <div className="grid gap-2 md:grid-cols-2">
            {activities.map((activity, index) => (
              <CompactCard key={activity} index={index}>
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />

                  <p className="text-xs leading-5 text-gray-400">
                    {activity}
                  </p>
                </div>
              </CompactCard>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-white/[0.07]" />

          <span className="font-mono text-[9px] tracking-[0.28em] text-gray-600">
            KEEP BUILDING
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </motion.div>

      </div>
    </section>
  );
}
