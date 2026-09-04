import { motion } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  Server,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const highlights = [
  {
    icon: Server,
    title: "Backend Engineering",
    text: "Building REST APIs, authentication systems and database-driven applications with Django & DRF.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    text: "Breaking real-world requirements into smaller, logical and maintainable solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    text: "Expanding into modern frontend technologies to understand the complete product.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#050713] pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[360px] w-[360px] rounded-full bg-violet-600/[0.06] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-7 sm:mb-9 lg:mb-10"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,.9)]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-violet-300/70 sm:text-[10px]">
              About Me
            </span>
          </div>

          <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            I build the logic behind the{" "}
            <span className="bg-gradient-to-r from-violet-300 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              experience.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
            I'm Sufiyan Tal, a Python Backend Developer who enjoys turning
            ideas into functional, scalable and meaningful web applications.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6">

          {/* Main story */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 sm:rounded-3xl sm:p-7 lg:p-8"
          >
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-violet-400 via-blue-400 to-transparent" />

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <Code2 size={18} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    My Approach
                  </h3>

                  <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.15em] text-white/25 sm:text-[8px]">
                    Build_With_Purpose
                  </p>
                </div>
              </div>

              <span className="font-mono text-[8px] text-white/25">
                2026
              </span>
            </div>

            <div className="mt-7 space-y-5 text-[11px] leading-6 text-white/55 sm:text-xs sm:leading-7">
              <p>
                My journey started with programming fundamentals and gradually
                moved into backend development with Python, Django, Django REST
                Framework and SQL.
              </p>

              <p>
                I enjoy understanding what happens behind the screen — from a
                user request and authentication flow to business logic,
                database operations and the final API response.
              </p>

              <p>
                For me, a project isn't finished when "it works". It becomes
                valuable when I understand why it works and how it can be
                improved.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[0.07] pt-5">
              {[
                "Understand",
                "Build",
                "Debug",
                "Improve",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] text-white/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Highlights */}
          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/[0.025]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-[11px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;