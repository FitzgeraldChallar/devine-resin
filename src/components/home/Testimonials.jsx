import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The practical approach made it easy for me to understand and become confident in what I was learning.",
    name: "Student",
    role: "Training Participant",
  },
  {
    quote:
      "I came to learn a skill and left feeling like I could actually turn that skill into something of my own.",
    name: "Student",
    role: "Training Participant",
  },
  {
    quote:
      "The training environment encouraged me to be creative, practice and believe in what I could create.",
    name: "Student",
    role: "Training Participant",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F5EC] py-24 text-[#080808] sm:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#9A7814]">
              Student Experiences
            </span>

            <span className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2 className="text-5xl font-semibold sm:text-6xl">
            Learning that leaves an{" "}
            <span className="text-[#B18A16]">
              impression.
            </span>
          </h2>

        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="border border-black/10 bg-white p-8 sm:p-10"
            >
              <Quote
                size={30}
                strokeWidth={1.2}
                className="text-[#C9A227]"
              />

              <p className="mt-7 font-serif text-2xl leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 border-t border-black/10 pt-5">
                <p className="font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-black/45">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}