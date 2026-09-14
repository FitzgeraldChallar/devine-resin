import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Users,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Hands-On Training",
    text: "Learn by doing through practical sessions designed to build real confidence.",
  },
  {
    icon: Sparkles,
    title: "Creative Skills",
    text: "Explore creative and beauty skills that allow you to turn your talent into something valuable.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Focus",
    text: "Gain skills that can help you start offering services or selling your own products.",
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    text: "Our training is designed to welcome beginners and guide them through the learning process.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F5EC] py-24 text-[#080808] sm:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#9A7814]">
                Why Devine Touch
              </span>
            </div>

            <h2 className="text-5xl font-semibold leading-[0.95] sm:text-6xl">
              More than training.
              <span className="mt-2 block text-[#B18A16]">
                It's preparation.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-black/60">
              We believe learning a skill should open doors. That's why
              our approach combines practical training, creativity and
              entrepreneurial thinking.
            </p>
          </motion.div>

          {/* Reasons */}
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="border-t border-black/10 pt-6"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-[#B18A16]"
                  />

                  <h3 className="mt-5 font-serif text-2xl">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/55">
                    {reason.text}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}