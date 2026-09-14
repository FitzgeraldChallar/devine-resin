import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F5EC] py-24 text-[#080808] sm:py-32"
    >
      {/* Decorative element */}
      <div className="absolute -right-24 top-20 h-64 w-64 rounded-full border border-[#C9A227]/30" />
      <div className="absolute -right-16 top-28 h-48 w-48 rounded-full border border-[#C9A227]/20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">

              {/* Main image placeholder */}
              <div className="aspect-4/5 overflow-hidden bg-[#111]">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Sparkles
                      size={42}
                      className="mx-auto mb-4 text-[#C9A227]"
                    />

                    <p className="font-serif text-2xl text-white">
                      Devine Touch
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#C9A227]">
                      Creativity • Skills • Business
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold frame */}
              <div className="absolute -bottom-5 -right-5 z-0 h-full w-full border border-[#C9A227]" />

              {/* Founder badge */}
              <div className="absolute -bottom-7 left-5 bg-[#080808] px-6 py-5 text-white shadow-2xl sm:left-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A227]">
                  Founded by
                </p>

                <p className="mt-1 font-serif text-2xl">
                  Veronica Gaye
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#9A7814]">
                About The Academy
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] sm:text-6xl">
              Where creativity becomes a{" "}
              <span className="text-[#B18A16]">
                skill.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-black/65">
              Devine Touch Resin Academy is a practical skills training
              academy in Monrovia, Liberia, helping aspiring creatives turn
              their talents into professional skills and business
              opportunities.
            </p>

            <p className="mt-5 text-base leading-8 text-black/65">
              From creative crafts to beauty services, our training is
              designed to give beginners practical experience they can use
              to create, earn and grow.
            </p>

            <a
              href="#training"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#C9A227] pb-2 font-semibold"
            >
              Discover Our Training

              <ArrowUpRight
                size={18}
                className="text-[#B18A16] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}