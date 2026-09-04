import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050713]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          
          {/* Brand */}
          <div className="max-w-md">
            <div className="mb-4 flex items-center gap-3">
              
              {/* Sparkle Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] shadow-lg shadow-violet-500/5">
                <Sparkles className="h-4 w-4 text-violet-300" />
              </div>

              {/* Brand Name */}
              <div className="inline-flex items-center">
                <span className="text-[21px] font-extrabold tracking-[-0.045em] text-white">
                  Sufiyan Tal
                </span>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-300">
              Python Backend Developer
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Building web applications and REST APIs with a focus on clean,
              practical and scalable solutions.
            </p>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Connect
            </p>

            <div className="flex items-center gap-3">
              
              {/* GitHub */}
              <a
                href="https://github.com/sufiyan-afk"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.4c.85 0 1.71.12 2.51.37 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sufiyan-tal-289ba6365"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                >
                  <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.5h3.6V21H3.4V9.5ZM9.2 9.5h3.45v1.57h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55V21h-3.6v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H9.2V9.5Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:sufiyantal43@gmail.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          
          <p>
            © 2026 Sufiyan Tal. All rights reserved.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            
            <span>
              Built with{" "}
              <span className="font-medium text-slate-300">
                React + Django
              </span>
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

            <span>
              AI-assisted development
            </span>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-white"
            >
              Back to top

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;