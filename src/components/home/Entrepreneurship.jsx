import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const points = [
  "Learn practical, marketable skills",
  "Create products or offer professional services",
  "Build confidence through hands-on practice",
  "Turn your skills into an income opportunity",
];

export default function Entrepreneurship() {
  return (
    <section className="bg-[#C9A227] py-24 text-black sm:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
              Skills • Creativity • Opportunity
            </p>

            <h2 className="mt-5 max-w-xl text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-7xl">
              Don't just learn a skill.
              <span className="mt-2 block text-white">
                Build a business.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-black/65">
              Your creativity has value. With the right practical skills
              and confidence, what you learn can become a service, a
              product or the beginning of your own business journey.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 bg-black px-7 py-4 font-semibold text-white transition hover:bg-[#171717]"
            >
              Start Your Journey

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-black/20 p-7 sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/50">
              What You Leave With
            </p>

            <div className="mt-8">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 border-b border-black/15 py-5 last:border-b-0"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[#C9A227]">
                    <Check size={14} />
                  </div>

                  <p className="text-sm font-medium leading-6">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}