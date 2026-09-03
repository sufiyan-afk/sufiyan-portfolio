import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "AI Usage", id: "ai-usage" },
  // { label: "Github", id: "github" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    setMenuOpen(false);
    setActive(id);

    const navbarHeight = window.innerWidth < 768 ? 64 : 68;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.setTimeout(() => {
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }, 50);
  };

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + 100;

      let current = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (!section) return;

        if (section.offsetTop <= marker) {
          current = link.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex h-[52px] max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#070a18]/80 px-4 backdrop-blur-xl sm:h-[56px] sm:px-5">

        {/* Logo */}
        <button
          type="button"
          onClick={() => navigateTo("home")}
          className="text-sm font-semibold tracking-[-0.02em] text-white"
        >
          Sufiyan Tal
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <button
                key={link.id}
                type="button"
                onClick={() => navigateTo(link.id)}
                className={`relative rounded-xl px-3 py-2 text-[12px] transition-all duration-300 ${
                  isActive
                    ? "bg-violet-500/15 text-white"
                    : "text-white/45 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {link.label}

                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 -z-10 rounded-xl border border-violet-400/15"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-white/80 transition-all hover:bg-white/[0.08] md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080b1b]/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {links.map((link, index) => {
              const isActive = active === link.id;

              return (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.035,
                  }}
                  onClick={() => navigateTo(link.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "bg-violet-500/15 text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={15}
                    className={
                      isActive
                        ? "text-violet-300"
                        : "text-white/20"
                    }
                  />
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;