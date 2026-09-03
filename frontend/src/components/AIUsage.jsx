import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  Lightbulb,
} from "lucide-react";

const points = [
  "Understanding and planning application structure",
  "Debugging errors and exploring possible solutions",
  "Improving UI ideas and responsive layouts",
  "Learning concepts and comparing implementation approaches",
];

function AIUsage() {
  return (
    <section
      id="ai-usage"
      className="overflow-hidden bg-[#050713] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.05] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[30px] border border-violet-400/[0.12] bg-gradient-to-br from-violet-500/[0.07] via-white/[0.02] to-blue-500/[0.04] p-5 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] text-violet-300">
                <BrainCircuit size={21} />
              </div>

              <div className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300/60">
                Transparent Workflow
              </div>

              <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                How I use AI
              </h2>

              <p className="mt-4 max-w-md text-xs leading-6 text-white/40 sm:text-sm">
                AI is part of my development workflow, but the goal is to
                understand the implementation rather than blindly copy code.
              </p>
            </div>

            <div className="grid gap-3">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-black/[0.12] p-4 transition-all hover:border-violet-400/15"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-violet-300"
                  />

                  <p className="text-[11px] leading-5 text-white/50">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/[0.07] pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Lightbulb size={15} className="text-violet-300" />

              <span className="text-[10px] text-white/35">
                Explore ideas
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Code2 size={15} className="text-blue-300" />

              <span className="text-[10px] text-white/35">
                Implement & test
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 size={15} className="text-emerald-300" />

              <span className="text-[10px] text-white/35">
                Understand the result
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AIUsage;