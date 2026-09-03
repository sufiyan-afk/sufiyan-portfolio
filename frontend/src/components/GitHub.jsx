import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Terminal } from "lucide-react";

function Github() {
  return (
    <section
      id="github"
      className="overflow-hidden bg-[#050816] py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.015] p-6 sm:p-8 lg:p-10"
        >
          <div className="absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-violet-600/[0.10] blur-[100px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <GitBranch size={19} />
                </div>

                <div>
                  <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-violet-300/60">
                    Open Source / Code
                  </div>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Explore my Github
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-xl text-xs leading-6 text-white/40 sm:text-sm">
                I use Github to document backend projects, API experiments,
                learning work and practical development projects.
              </p>
            </div>

            <a
              href="https://github.com/sufiyan-afk"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] px-5 py-3 text-xs font-medium text-white transition-all hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.14]"
            >
              <Terminal size={15} />

              View Github

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Github;