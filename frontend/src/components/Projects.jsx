import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Layers3,
  LockKeyhole,
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
    footer: "Authentication & API",
  },

  {
    number: "02",
    type: "FULL-STACK SYSTEM",
    title: "Clothing E-commerce",
    description:
      "A full-stack clothing e-commerce platform covering product management, authentication, cart operations, orders and API-driven application flow.",
    icon: ShoppingBag,
    accent: "cyan",
    stack: [
      "Python",
      "Django",
      "DRF",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React.js",
    ],
    flow: ["User", "Frontend", "API", "Database"],
    features: [
      "Product & category management",
      "Cart & order workflow",
      "Authentication & API integration",
    ],
    github: null,
    footer: "Full-Stack Commerce",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ProjectFlow({ items, isViolet }) {
  return (
    <div className="mt-4 rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2.5">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
          Application Flow
        </span>

        <Layers3
          size={13}
          className={isViolet ? "text-violet-300/40" : "text-cyan-300/40"}
        />
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-1.5">
            <span className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[9px] font-medium text-white/60">
              {item}
            </span>

            {index < items.length - 1 && (
              <span className="text-[10px] text-white/20">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  const isViolet = project.accent === "violet";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-[24px] border border-white/[0.09] bg-white/[0.025]"
    >
      {/* subtle glow */}
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 ${
          isViolet
            ? "bg-violet-500/10 group-hover:bg-violet-500/20"
            : "bg-cyan-500/10 group-hover:bg-cyan-500/20"
        }`}
      />

      <div className="relative p-4 sm:p-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                isViolet
                  ? "border-violet-400/20 bg-violet-500/10 text-violet-300"
                  : "border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
              }`}
            >
              <Icon size={18} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                  Project {project.number}
                </span>

                <span className="h-1 w-1 rounded-full bg-white/20" />

                <span
                  className={`text-[9px] font-semibold uppercase tracking-[0.15em] ${
                    isViolet ? "text-violet-300/60" : "text-cyan-300/60"
                  }`}
                >
                  {project.type}
                </span>
              </div>

              <h3 className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                {project.title}
              </h3>
            </div>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} GitHub repository`}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-white/45 transition-all duration-300 hover:-translate-y-1 hover:text-white ${
                isViolet
                  ? "hover:border-violet-400/30 hover:bg-violet-500/10"
                  : "hover:border-cyan-400/30 hover:bg-cyan-500/10"
              }`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 text-xs leading-5 text-white/45 sm:text-sm sm:leading-6">
          {project.description}
        </p>

        {/* Stack */}
        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9px] font-medium text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Application Flow */}
        <ProjectFlow items={project.flow} isViolet={isViolet} />

        {/* Features */}
        <div className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-[10px] text-white/45 sm:text-[11px]"
            >
              <CheckCircle2
                size={13}
                className={
                  isViolet ? "text-violet-300/60" : "text-cyan-300/60"
                }
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3">
          <div className="flex items-center gap-2 text-[10px] text-white/30">
            {isViolet ? (
              <LockKeyhole size={12} />
            ) : (
              <Database size={12} />
            )}

            <span>{project.footer}</span>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 text-[11px] font-semibold text-white transition-colors ${
                isViolet
                  ? "hover:text-violet-300"
                  : "hover:text-cyan-300"
              }`}
            >
              View Github
              <ArrowUpRight size={13} />
            </a>
          ) : (
            <span className="text-[10px] font-medium text-white/25">
              Personal Project
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
      className="relative px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/[0.05] blur-[120px]" />

        <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <div className="mb-3 flex items-center gap-3">
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

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45 sm:text-base">
            A selection of projects focused on backend architecture,
            authentication, APIs, databases and real application workflows.
          </p>
        </motion.div>

        {/* Project cards */}
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
          className="mt-6 grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 text-center sm:px-8"
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