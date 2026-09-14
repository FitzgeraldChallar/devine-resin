import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { programs } from "../../data/programs";

export default function Programs() {
  return (
    <section
      id="training"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
              What You Can Learn
            </span>
          </div>

          <h2 className="text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Skills that can become your{" "}
            <span className="text-[#C9A227]">
              livelihood.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
            Learn practical, creative and beauty skills designed to help
            you become confident in your craft and ready to create
            opportunities for yourself.
          </p>
        </motion.div>

        {/* Programs */}
        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">

          {programs.map((program, index) => {
            const Icon = program.icon;

            // Center the two cards on the second row
            let positionClass = "";

            if (index === 3) {
              positionClass = "lg:col-span-2 lg:col-start-2";
            }

            if (index === 4) {
              positionClass = "lg:col-span-2 lg:col-start-4";
            }

            if (index < 3) {
              positionClass = "lg:col-span-2";
            }

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className={`group relative min-h-82.5 bg-[#0D0D0D] p-8 transition-colors duration-500 hover:bg-[#121212] sm:p-10 ${positionClass}`}
              >
                {/* Number */}
                <span className="absolute right-7 top-7 font-serif text-5xl text-white/5">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center border border-[#C9A227]/40 text-[#C9A227] transition-all duration-500 group-hover:bg-[#C9A227] group-hover:text-black">
                  <Icon size={25} strokeWidth={1.5} />
                </div>

                <p className="mt-12 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                  {program.category}
                </p>

                <h3 className="mt-3 font-serif text-3xl text-white">
                  {program.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                  {program.shortDescription}
                </p>

                <div className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-500 group-hover:border-[#C9A227] group-hover:text-[#C9A227]">
                  <ArrowUpRight size={17} />
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}