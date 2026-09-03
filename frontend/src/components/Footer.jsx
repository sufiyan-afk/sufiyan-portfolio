import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#040610]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

        <div>
          <div className="text-sm font-semibold text-white">
            Sufiyan Tal
          </div>

          <p className="mt-1 text-[9px] text-white/25">
            Python Backend Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://github.com/sufiyan-afk"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/[0.07] px-3 py-2 text-[9px] text-white/40 transition hover:border-violet-400/20 hover:text-white"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/sufiyan-tal-289ba6365/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/[0.07] px-3 py-2 text-[9px] text-white/40 transition hover:border-violet-400/20 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#home"
            className="flex items-center gap-1 rounded-lg border border-white/[0.07] px-3 py-2 text-[9px] text-white/40 transition hover:border-violet-400/20 hover:text-white"
          >
            Back to top
            <ArrowUpRight size={11} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.05] px-5 py-4 text-center font-mono text-[8px] text-white/20">
        © 2026 Sufiyan Tal. Built with React & curiosity.
      </div>
    </footer>
  );
}

export default Footer;