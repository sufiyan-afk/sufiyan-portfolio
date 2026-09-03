import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Layers3,
  LockKeyhole,
  Server,
  ShoppingBag,
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "BACKEND SYSTEM",
    title: "Job Portal API",
    description:
      "A role-based job portal backend built around authentication, job management, recruiter workflows and RESTful APIs.",
    icon: BriefcaseBusiness,
    accent: "violet",
    stack: ["Python", "Django", "DRF", "JWT", "MySQL"],
    flow: ["Client", "JWT", "API", "Database"],
    features: [
      "Role-based authentication",
      "Job & recruiter workflows",
      "RESTful API architecture",
    ],
    github: "https://github.com/sufiyan-afk/Job-portal-api",
    status: "LIVE CODE",
  },
  {
    number: "02",
    type: "E-COMMERCE SYSTEM",
    title: "Clothing E-commerce",
    description:
      "An online shopping platform focused on product management, cart operations, orders, authentication and API-driven application flow.",
    icon: ShoppingBag,
    accent: "cyan",
    stack: ["Python", "Django", "DRF", "MySQL"],
    flow: ["User", "Product", "Cart", "Order"],
    features: [
      "Product & category management",
      "Cart and order workflow",
      "Authentication & API integration",
    ],
    github: null,
    status: "INSTITUTE PROJECT",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProjectFlow({ items }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/20 p-3.5 sm:p-4">
      <div className="mb-2.5 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Application Flow
        </span>

        <Layers3 size={14} className="text-white/30" />
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-1.5">
            <span className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-[10px] font-medium text-white/65">
              {item}
            </span>

            {index < items.length - 1 && (
              <span className="text-white/20">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const isViolet = project.accent === "violet";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-white/[0.025]"
    >
      {/* glow */}
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full blur-3xl transition-opacity duration-500 ${
          isViolet
            ? "bg-violet-500/15 group-hover:bg-violet-500/25"
            : "bg-cyan-500/10 group-hover:bg-cyan-500/20"
        }`}
      />

      {/* top visual area */}
      <div className="relative p-3.5 sm:p-4">
        <div className="rounded-[20px] border border-white/[0.08] bg-[#080b18] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                  isViolet
                    ? "border-violet-400/25 bg-violet-500/15 text-violet-300"
                    : "border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
                }`}
              >
                <Icon size={19} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Project {project.number}
                </p>

                <p className="mt-1 text-xs font-medium text-white/55">
                  {project.status}
                </p>
              </div>
            </div>

            <div
              className={`h-2 w-2 rounded-full ${
                isViolet ? "bg-violet-400" : "bg-cyan-400"
              } shadow-[0_0_14px_currentColor]`}
            />
          </div>

          {/* dashboard */}
          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3.5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                System Overview
              </span>

              <Server size={14} className="text-white/25" />
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5">
                <p className="text-[9px] uppercase text-white/25">API</p>
                <p className="mt-1 text-sm font-semibold text-white/75">
                  REST
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5">
                <p className="text-[9px] uppercase text-white/25">Auth</p>
                <p className="mt-1 text-sm font-semibold text-white/75">
                  {index === 0 ? "JWT" : "Secure"}
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-2.5">
                <p className="text-[9px] uppercase text-white/25">DB</p>
                <p className="mt-1 text-sm font-semibold text-white/75">
                  MySQL
                </p>
              </div>
            </div>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "78%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                className={`h-full rounded-full ${
                  isViolet
                    ? "bg-gradient-to-r from-violet-500 to-blue-400"
                    : "bg-gradient-to-r from-cyan-500 to-blue-400"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="relative px-4 pb-5 sm:px-5 sm:pb-6">
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
            isViolet ? "text-violet-300/70" : "text-cyan-300/70"
          }`}
        >
          {project.type}
        </p>

        <div className="mt-1.5 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {project.title}
          </h3>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/55 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <p className="mt-3 max-w-xl text-xs leading-6 text-white/50 sm:text-sm">
          {project.description}
        </p>

        {/* stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[10px] font-medium text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>

        <ProjectFlow items={project.flow} />

        {/* features */}
        <div className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5 text-[11px] text-white/50"
            >
              <CheckCircle2
                size={14}
                className={
                  isViolet ? "text-violet-300/70" : "text-cyan-300/70"
                }
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <div className="flex items-center gap-2 text-[11px] text-white/35">
            {index === 0 ? (
              <LockKeyhole size={13} />
            ) : (
              <Database size={13} />
            )}

            <span>
              {index === 0 ? "Authentication & API" : "Commerce workflow"}
            </span>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-violet-300"
            >
              View Github
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="text-[11px] font-medium text-white/25">
              Private / Institute
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-violet-400/70" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-300/80">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projects that turn
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              ideas into systems.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            A selection of projects focused on backend architecture,
            authentication, APIs, databases and real application workflows.
          </p>
        </motion.div>

        {/* projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="mt-8 grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-center sm:px-8"
        >
          <p className="text-xs leading-6 text-white/35 sm:text-sm">
            I focus on understanding the complete flow —{" "}
            <span className="text-white/65">
              request → logic → database → response.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}