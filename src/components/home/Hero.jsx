import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  MapPin,
  Clock3,
} from "lucide-react";
import hero1 from "../../assets/images/hero/hero-1.jpg";
import hero2 from "../../assets/images/hero/hero-2.jpg";
import hero3 from "../../assets/images/hero/hero-3.jpg";

const slides = [
  {
    image: hero1,
    eyebrow: "Creative Skills • Business Opportunity",
    title: "Create Something",
    highlight: "Extraordinary.",
    description:
      "Turn your creativity into practical skills, beautiful products and a business you can be proud of.",
  },
  {
    image: hero2,
    eyebrow: "Hands-On Practical Training",
    title: "Learn. Create.",
    highlight: "Become Professional.",
    description:
      "Gain practical skills through hands-on training designed for beginners and aspiring entrepreneurs.",
  },
  {
    image: hero3,
    eyebrow: "Beauty • Craft • Entrepreneurship",
    title: "Your Skill Can Become",
    highlight: "Your Business.",
    description:
      "Discover professional skills that can open the door to new opportunities and entrepreneurship.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-black"
    >
      {/* Background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 7, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-black/20" />

      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

      {/* Gold decorative line */}
      <div className="absolute left-0 top-1/2 hidden h-px w-20 bg-[#C9A227] lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 sm:px-8 lg:px-10">

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C766]">
              {slide.eyebrow}
            </span>
          </div>

          <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-9xl">
            {slide.title}
            <span className="block text-[#C9A227]">
              {slide.highlight}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            {slide.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#training"
              className="group flex items-center justify-center gap-3 bg-[#C9A227] px-7 py-4 font-semibold text-black transition hover:bg-[#E5C766]"
            >
              Explore Our Training
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#gallery"
              className="flex items-center justify-center gap-3 border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:border-[#C9A227] hover:text-[#E5C766]"
            >
              <Play size={16} />
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Bottom information */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-10">

          <div className="flex items-center gap-3 text-sm text-white/60">
            <MapPin size={17} className="text-[#C9A227]" />
            Monrovia, Liberia
          </div>

          <div className="flex items-center gap-3 text-sm text-white/60">
            <Clock3 size={17} className="text-[#C9A227]" />
            Weekdays & Weekend
          </div>

          <div className="ml-auto hidden items-center gap-2 sm:flex">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-1 transition-all ${
                  active === index
                    ? "w-10 bg-[#C9A227]"
                    : "w-5 bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}