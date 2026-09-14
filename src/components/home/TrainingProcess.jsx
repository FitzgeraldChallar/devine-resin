import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const days = [
  {
    number: "01",
    title: "Discover",
    text: "Get introduced to your chosen skill, materials, tools and professional techniques.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Build confidence through guided practical sessions and hands-on exercises.",
  },
  {
    number: "03",
    title: "Create",
    text: "Put your skills into practice by creating real products and professional work.",
  },
  {
    number: "04",
    title: "Perfect",
    text: "Refine your techniques, improve your finishing and develop your personal style.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Leave equipped with practical skills you can use to begin creating opportunities.",
  },
];

export default function TrainingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#111] py-24 sm:py-32">

      {/* Background decoration */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[#C9A227]/3" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
                Your Learning Journey
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl">
              Five days.
              <span className="block text-[#C9A227]">
                Real skills.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            Our practical training experience is designed to take you
            from learning the basics to confidently creating with your
            new skill.
          </p>

        </div>

        {/* Timeline */}
        <div className="mt-16 border-t border-white/10">

          {days.map((day, index) => (
            <motion.div
              key={day.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group grid gap-6 border-b border-white/10 py-8 transition-colors hover:bg-white/2 sm:grid-cols-[100px_1fr_2fr] sm:items-center"
            >
              <span className="font-serif text-4xl text-[#C9A227]/50 transition-colors group-hover:text-[#C9A227]">
                {day.number}
              </span>

              <h3 className="font-serif text-3xl text-white">
                {day.title}
              </h3>

              <div className="flex items-center justify-between gap-6">
                <p className="max-w-xl text-sm leading-7 text-white/45">
                  {day.text}
                </p>

                <ArrowRight
                  size={20}
                  className="hidden shrink-0 text-[#C9A227] transition-transform group-hover:translate-x-2 sm:block"
                />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}