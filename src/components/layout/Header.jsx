import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "../ThemeToggle";

const navItems = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div
          className="max-w-7xl mx-auto px-6
        lg:px-8 h-20 flex items-center justify-between"
        >
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer text-2xl font-bold"
          >
            <span className="text-accent-light">Bas</span>
            <span>.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-accent-light"
                className="
                  cursor-pointer
                  capitalize
                  transition
                  hover:text-accent-light
                "
              >
                {item}
              </Link>
            ))}

            {/* <ThemeToggle /> */}

            <a
              href="/Kaja-Baserudeen-Lead-UI-Engineer-Resume.pdf"
              download
              className="
                px-5
                py-2
                rounded-lg
                bg-accent
                hover:bg-accent-dark
                transition
                font-medium
              "
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-3xl"
            aria-label="Open Menu"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                bg-black/60
                backdrop-blur-sm
                z-40
              "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="
                fixed
                right-0
                top-0
                h-screen
                w-full
                max-w-sm
                bg-slate-900
                z-50
                p-8
                border-l
                border-slate-800
              "
            >
              {/* Close Button */}
              <div className="flex justify-end mb-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl"
                  aria-label="Close Menu"
                >
                  <HiX />
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="
                      capitalize
                      text-xl
                      cursor-pointer
                      hover:text-accent-light
                      transition
                    "
                  >
                    {item}
                  </Link>
                ))}

                {/* Theme Toggle */}
                {/* <div className="pt-4">
                  <ThemeToggle />
                </div> */}

                {/* Resume */}
                <a
                  href="/resume.pdf"
                  download
                  className="
                    mt-4
                    text-center
                    py-3
                    rounded-lg
                    bg-accent
                    hover:bg-accent-dark
                    transition
                    font-medium
                  "
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
