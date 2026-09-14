import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28 sm:py-36"
    >
      {/* Decorative circles */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#C9A227]/20" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full border border-[#C9A227]/20" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
              Enrollment Is Open
            </span>

            <span className="h-px w-10 bg-[#C9A227]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            Your creative journey
            <span className="block text-[#C9A227]">
              starts here.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/50">
            Learn a practical skill, discover your creativity and take
            the first step toward building something of your own.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            {/* Registration Form */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScoRFUxm2XUA2_-bAxNIvf6D91oVO4xa6n9293Yh9m14M61dQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#C9A227] px-8 py-4 font-semibold text-black transition hover:bg-[#E5C766]"
            >
              Register for Training

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/231770445098"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 border border-[#C9A227]/50 px-8 py-4 font-semibold text-white transition hover:border-[#C9A227] hover:text-[#E5C766]"
            >
              Enroll via WhatsApp

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            {/* Phone */}
            <a
              href="tel:+231770445098"
              className="flex items-center justify-center gap-3 border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A227] hover:text-[#E5C766]"
            >
              <Phone size={17} />
              0770 445 098
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}