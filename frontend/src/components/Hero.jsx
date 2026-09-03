import { motion } from "framer-motion";
import {
  Mail,
  Code2,
  ArrowRight,
  Download,
} from "lucide-react";

import HeroScene from "./HeroScene";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");

    if (!element) return;

    const position =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: position - 90,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#060711] pt-[72px] sm:pt-[82px]"
    >
      <HeroScene />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.07, 0.13, 0.07],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[25%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-violet-600 blur-[120px] sm:h-[500px] sm:w-[500px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-7xl items-center px-5 pb-10 sm:min-h-[calc(100svh-82px)] sm:px-6 sm:pb-12 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-2 lg:grid-cols-[1fr_0.95fr] lg:gap-10">

          {/* IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="order-first relative flex h-[300px] w-full items-end justify-center sm:h-[380px] lg:order-last lg:h-[590px]"
          >
            {/* Glow Ring */}
            <motion.div
              animate={{
                scale: [1, 1.025, 1],
                opacity: [0.55, 0.8, 0.55],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[48%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/60 shadow-[0_0_22px_rgba(139,92,246,0.45),0_0_60px_rgba(99,102,241,0.22)] sm:h-[310px] sm:w-[310px]"
            />

            <motion.img
              src="/images/profile-cutout.png"
              alt="Sufiyan Tal"
              animate={{
                y: [5, 1, 5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[285px] w-auto max-w-[90%] object-contain sm:h-[365px] lg:h-[570px]"
            />
          </motion.div>

          {/* CONTENT */}
          <div className="relative z-10 min-w-0">

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.025] px-3 py-2"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

              <span className="truncate text-[10px] font-medium text-white/65 sm:text-xs">
                Python Backend Developer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 max-w-2xl text-[39px] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
            >
              I build scalable
              <br />
              backends and
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                real-world solutions.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 max-w-xl text-[12px] leading-6 text-white/45 sm:text-sm sm:leading-7"
            >
              I’m Sufiyan Tal, a Python Backend Developer skilled in Django,
              Django REST Framework, and building clean, secure APIs that
              solve real problems.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto mt-5 flex w-full max-w-[420px] flex-col gap-2.5 sm:flex-row sm:justify-center sm:gap-3 lg:mx-0 lg:justify-start"
            >
              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)] sm:w-auto"
              >
                View Projects

                <ArrowRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href="/resume.pdf"
                download
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.04] sm:w-auto"
              >
                Download Resume

                <Download
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-5 flex items-center justify-center gap-2.5 lg:justify-start"
            >
              <a
                href="https://github.com/sufiyan-afk"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-xs font-semibold text-white/75 transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-400"
              >
                GH
              </a>

              {/* LinkedIn — NO lucide LinkedIn icon */}
              <a
                href="https://www.linkedin.com/in/sufiyan-tal-289ba6365/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-xs font-bold text-white/75 transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-400"
              >
                in
              </a>

              <a
                href="#contact"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/75 transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-400"
              >
                <Mail size={17} strokeWidth={1.7} />
              </a>

              <a
                href="#projects"
                aria-label="Projects"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/75 transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-400"
              >
                <Code2 size={17} strokeWidth={1.7} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;