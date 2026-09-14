import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Target,
  Eye,
} from "lucide-react";

export default function About() {
  return (
    <main className="bg-[#080808]">

      {/* PAGE HERO */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#080808]">

        {/* Decorative gold circle */}
        <div className="absolute -right-40 top-20 h-125 w-125 rounded-full border border-[#C9A227]/10" />

        <div className="absolute right-10 top-40 h-75 w-75 rounded-full border border-[#C9A227]/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
                About Devine Touch
              </span>
            </div>

            <h1 className="font-serif text-6xl leading-[0.9] text-white sm:text-7xl lg:text-9xl">
              Creativity
              <span className="block text-[#C9A227]">
                with purpose.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              Discover the story, vision and people behind Devine Touch
              Resin Academy Liberia — a place where creativity becomes
              practical skill and practical skill becomes opportunity.
            </p>

          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30"
          >
            <ArrowDown size={15} className="text-[#C9A227]" />
            Discover our story
          </motion.div>

        </div>
      </section>


      {/* STORY */}
      <section className="bg-[#F8F5EC] py-24 text-[#080808] sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="aspect-4/5 bg-[#111]">

                <div className="flex h-full items-center justify-center p-10 text-center">

                  <div>
                    <Sparkles
                      size={40}
                      className="mx-auto text-[#C9A227]"
                    />

                    <p className="mt-5 font-serif text-3xl text-white">
                      Devine Touch
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#C9A227]">
                      Our Story
                    </p>
                  </div>

                </div>

              </div>

              <div className="absolute -bottom-5 -right-5 z-0 h-full w-full border border-[#C9A227]" />

            </motion.div>


            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A227]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#9A7814]">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif text-5xl leading-[0.95] sm:text-6xl">
                A space created for people who want to{" "}
                <span className="text-[#B18A16]">
                  create.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-black/60">
                Devine Touch Resin Academy Liberia was created to provide
                practical training in creative and beauty skills while
                helping individuals discover opportunities through their
                talents.
              </p>

              <p className="mt-5 text-base leading-8 text-black/60">
                From resin art and gypsum craft to beaded bags, pedicure
                and hair installation, the academy brings practical
                learning and creativity together in one environment.
              </p>

              <p className="mt-5 text-base leading-8 text-black/60">
                Our goal is not simply to teach a skill. We want our
                students to leave with the confidence to create, offer
                services, sell products and pursue their own entrepreneurial
                journey.
              </p>

              <a
                href="/training"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#C9A227] pb-2 font-semibold"
              >
                Explore Our Training

                <ArrowUpRight
                  size={18}
                  className="text-[#B18A16] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </motion.div>

          </div>

        </div>
      </section>


      {/* FOUNDER */}
      <section className="bg-[#080808] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                Meet The Founder
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-[0.9] text-white sm:text-6xl">
                Veronica
                <span className="block text-[#C9A227]">
                  Gaye.
                </span>
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="font-serif text-3xl leading-relaxed text-white/80 sm:text-4xl">
                "Creativity can become more than a passion. With the right
                skills, it can become an opportunity."
              </p>

              <div className="mt-8 h-px w-16 bg-[#C9A227]" />

              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-white/40">
                Founder, Devine Touch Resin Academy Liberia
              </p>

            </motion.div>

          </div>

        </div>
      </section>


      {/* MISSION & VISION */}
      <section className="bg-[#F8F5EC] py-24 text-[#080808] sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8F5EC] p-8 sm:p-12 lg:p-16"
            >

              <Target
                size={34}
                strokeWidth={1.3}
                className="text-[#B18A16]"
              />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#9A7814]">
                Our Mission
              </p>

              <h3 className="mt-3 font-serif text-4xl">
                Equip people with practical skills.
              </h3>

              <p className="mt-6 max-w-lg text-base leading-8 text-black/55">
                To provide accessible, practical and professional training
                that equips individuals with creative and beauty skills
                they can confidently use in their personal and
                entrepreneurial journeys.
              </p>

            </motion.div>


            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#080808] p-8 text-white sm:p-12 lg:p-16"
            >

              <Eye
                size={34}
                strokeWidth={1.3}
                className="text-[#C9A227]"
              />

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
                Our Vision
              </p>

              <h3 className="mt-3 font-serif text-4xl">
                A community of confident creators.
              </h3>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/45">
                To inspire a generation of skilled, confident and
                entrepreneurial creatives who can transform their talents
                into meaningful opportunities.
              </p>

            </motion.div>

          </div>

        </div>
      </section>


      {/* VALUES */}
      <section className="bg-[#080808] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5C766]">
                What We Stand For
              </span>
            </div>

            <h2 className="font-serif text-5xl leading-[0.95] text-white sm:text-6xl">
              The values behind
              <span className="block text-[#C9A227]">
                our work.
              </span>
            </h2>

          </div>


          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Creativity", "We encourage imagination, originality and the courage to create."],
              ["02", "Excellence", "We strive for quality, professionalism and continuous improvement."],
              ["03", "Practicality", "We focus on skills that can be learned, practiced and applied."],
              ["04", "Opportunity", "We believe practical skills can open doors to entrepreneurship and growth."],
            ].map(([number, title, text]) => (

              <motion.div
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D] p-8 sm:p-10"
              >

                <span className="font-serif text-4xl text-[#C9A227]/40">
                  {number}
                </span>

                <h3 className="mt-12 font-serif text-3xl text-white">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#C9A227] py-24 text-black sm:py-32">

        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/55">
            Ready to Begin?
          </p>

          <h2 className="mt-5 font-serif text-6xl leading-[0.9] sm:text-7xl">
            Your next chapter
            <span className="block text-white">
              starts with a skill.
            </span>
          </h2>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-black px-8 py-4 font-semibold text-white transition hover:bg-[#171717]"
          >
            Enroll Now
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}