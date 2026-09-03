import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe2,
  GitBranch,
  Layers3,
  Server,
  Wrench,
} from "lucide-react";

const groups = [
  {
    number: "01",
    title: "Backend",
    description: "Core technologies I use to build application logic.",
    icon: Code2,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "REST APIs",
    ],
  },
  {
    number: "02",
    title: "Database",
    description: "Working with relational data and application storage.",
    icon: Database,
    skills: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "CRUD",
    ],
  },
  {
    number: "03",
    title: "Frontend",
    description: "Building responsive interfaces and modern web experiences.",
    icon: Globe2,
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "React.js",
    ],
  },
  {
    number: "04",
    title: "Workflow",
    description: "Tools I use to develop, test and manage projects.",
    icon: Wrench,
    skills: [
      "Git",
      "Github",
      "Postman",
      "VS Code",
    ],
  },
];

const principles = [
  {
    icon: Server,
    title: "API First",
    text: "Think in requests, responses, authentication and clean endpoints.",
  },
  {
    icon: Layers3,
    title: "Clean Structure",
    text: "Keep application logic organized, readable and maintainable.",
  },
  {
    icon: GitBranch,
    title: "Keep Learning",
    text: "Learn by building, debugging and understanding what happens underneath.",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#060816] pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-14"
    >
      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="text-blue-300">
              <Layers3 size={12} />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-blue-300/70 sm:text-[10px]">
              Toolkit
            </span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Skills & Technologies
              </h2>

              <p className="mt-3 max-w-2xl text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                A practical stack focused on backend development, APIs,
                databases and modern web applications.
              </p>
            </div>

            <div className="w-fit rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[8px] text-white/30">
              BUILD / TEST / IMPROVE
            </div>
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.02] sm:rounded-3xl sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-transform duration-300 group-hover:scale-105">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-white sm:text-base">
                        {group.title}
                      </h3>

                      <p className="mt-1 max-w-sm text-[9px] leading-4 text-white/35 sm:text-[10px]">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[8px] text-white/20">
                    {group.number}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] text-white/45 transition-colors hover:border-blue-400/20 hover:text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Principles */}
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-white/[0.07] bg-black/10 p-4"
              >
                <Icon
                  size={17}
                  className="text-blue-300"
                />

                <h4 className="mt-3 text-xs font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-1.5 text-[9px] leading-4 text-white/35">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;