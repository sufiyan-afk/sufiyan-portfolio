import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "sufiyantal43@gmail.com",
    href: "mailto:sufiyantal43@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sufiyan-tal-289ba6365",
    href: "https://www.linkedin.com/in/sufiyan-tal-289ba6365/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/sufiyan-afk",
    href: "https://github.com/sufiyan-afk",
    icon: "github",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-[#050713] py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-blue-500/[0.06] p-6 text-center sm:p-10 lg:p-14"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[120px]" />

          <div className="relative">
            {/* Main Icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
              <Mail size={21} />
            </div>

            {/* Label */}
            <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/60">
              Get In Touch
            </div>

            {/* Heading */}
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Let’s build something useful.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-white/40 sm:text-sm">
              Open to opportunities, collaborations and conversations around
              backend development and real-world applications.
            </p>

            {/* Contact Links */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactLinks.map((item) => {
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition-colors hover:border-violet-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      {/* Icon */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/60 transition-colors group-hover:text-violet-300">
                        {item.icon === "github" ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.21c0 .3.21.65.79.54C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
                          </svg>
                        ) : item.icon === "linkedin" ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.4a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
                          </svg>
                        ) : (
                          <Mail size={16} />
                        )}
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={15}
                        className="text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                      />
                    </div>

                    {/* Label */}
                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                      {item.label}
                    </p>

                    {/* Value */}
                    <p className="mt-1 truncate text-xs text-white/55">
                      {item.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-7 flex justify-center">
              <span className="rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 font-mono text-[9px] text-white/35">
                Surat, India
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;