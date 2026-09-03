import { motion } from "framer-motion";

const particles = [
  { left: "12%", top: "18%", delay: 0 },
  { left: "24%", top: "32%", delay: 1.2 },
  { left: "78%", top: "20%", delay: 0.5 },
  { left: "88%", top: "38%", delay: 1.8 },
  { left: "16%", top: "70%", delay: 2.2 },
  { left: "72%", top: "68%", delay: 0.9 },
  { left: "52%", top: "14%", delay: 1.5 },
  { left: "92%", top: "76%", delay: 2.8 },
];

function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[38%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.035] blur-[100px] sm:h-[500px] sm:w-[500px]" />

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [0.15, 0.65, 0.15],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + index * 0.25,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute h-1 w-1 rounded-full bg-violet-300/40"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
}

export default HeroScene;