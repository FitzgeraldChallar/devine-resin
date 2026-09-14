import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Training", href: "#training" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Devine Touch Resin Academy"
                className="h-12 w-auto object-contain"
              />

              <div className="hidden sm:block">
                <p className="font-serif text-lg leading-none text-white">
                  Devine Touch
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#C9A227]">
                  Resin Academy
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-[#C9A227]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                className="flex items-center gap-2 bg-[#C9A227] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#E5C766]"
              >
                Enroll Now
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 border border-white/10 bg-[#0b0b0b] p-5 md:hidden"
            >
              <div className="flex flex-col gap-5">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/5 pb-3 text-sm text-white/80"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="bg-[#C9A227] px-5 py-3 text-center text-sm font-semibold text-black"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}