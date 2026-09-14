import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { galleryImages } from "../../data/gallery";

export default function GalleryPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalImages = galleryImages.length;

  const nextImage = () => {
    setDirection(1);

    setCurrentIndex((current) =>
      current === totalImages - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setDirection(-1);

    setCurrentIndex((current) =>
      current === 0 ? totalImages - 1 : current - 1
    );
  };

  const selectImage = (index) => {
    if (index === currentIndex) return;

    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getIndex = (offset) => {
    return (
      (currentIndex + offset + totalImages) %
      totalImages
    );
  };

  const currentNumber = String(currentIndex + 1).padStart(2, "0");
  const totalNumber = String(totalImages).padStart(2, "0");

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-362.5 px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN GALLERY AREA
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.65fr] lg:items-center lg:gap-10">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-md"
          >

            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A227]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9A227]">
                Our Gallery
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-5xl leading-[0.92] text-white sm:text-6xl">
              Moments of
              <span className="block text-[#C9A227]">
                Creativity & Skill
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-6 h-px w-40 bg-[#C9A227]/40" />

            {/* Description */}
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45 sm:text-[15px]">
              A glimpse into the creativity, practical
              learning and craftsmanship that happens
              at Devine Touch Resin Academy.
            </p>

            {/* Navigation */}
            <div className="mt-8 flex items-center gap-5">

              {/* Previous */}
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous gallery image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227] text-[#C9A227] transition-all duration-300 hover:bg-[#C9A227] hover:text-black"
              >
                <ArrowLeft size={17} />
              </button>

              {/* Counter */}
              <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em]">
                <span className="text-[#C9A227]">
                  {currentNumber}
                </span>

                <span className="text-white/20">
                  /
                </span>

                <span className="text-white/35">
                  {totalNumber}
                </span>
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next gallery image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227] text-[#C9A227] transition-all duration-300 hover:bg-[#C9A227] hover:text-black"
              >
                <ArrowRight size={17} />
              </button>

            </div>

          </motion.div>


          {/* =================================================
              IMAGE DISPLAY
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-w-0"
          >

            {/* Desktop image stage */}
            <div className="relative h-97.5 sm:h-120 lg:h-125">

              {/* =============================================
                  BACK IMAGE 3
              ============================================== */}

              <motion.div
                key={`back3-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-[9%] hidden h-[76%] w-[20%] overflow-hidden rounded-xl border border-white/10 bg-[#161616] sm:block"
              >
                <img
                  src={galleryImages[getIndex(3)]}
                  alt={`Gallery image ${getIndex(3) + 1}`}
                  className="h-full w-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-black/35" />
              </motion.div>


              {/* =============================================
                  BACK IMAGE 2
              ============================================== */}

              <motion.div
                key={`back2-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute right-[9%] top-[5%] hidden h-[82%] w-[22%] overflow-hidden rounded-xl border border-white/10 bg-[#161616] sm:block"
              >
                <img
                  src={galleryImages[getIndex(2)]}
                  alt={`Gallery image ${getIndex(2) + 1}`}
                  className="h-full w-full object-cover opacity-55"
                />

                <div className="absolute inset-0 bg-black/25" />
              </motion.div>


              {/* =============================================
                  BACK IMAGE 1
              ============================================== */}

              <motion.div
                key={`back1-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute right-[18%] top-[3%] hidden h-[86%] w-[24%] overflow-hidden rounded-xl border border-white/10 bg-[#161616] sm:block"
              >
                <img
                  src={galleryImages[getIndex(1)]}
                  alt={`Gallery image ${getIndex(1) + 1}`}
                  className="h-full w-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-black/15" />
              </motion.div>


              {/* =============================================
                  ACTIVE IMAGE
              ============================================== */}

              <div className="absolute left-0 top-0 h-full w-full sm:left-[8%] sm:w-[58%] lg:left-[3%] lg:w-[61%]">

                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="wait"
                >

                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 60 : -60,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -60 : 60,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full w-full"
                  >

                    <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#C9A227] bg-[#111] p-1">

                      <div className="relative h-full w-full overflow-hidden rounded-lg">

                        <img
                          src={galleryImages[currentIndex]}
                          alt={`Devine Touch gallery image ${currentIndex + 1}`}
                          className="h-full w-full object-cover"
                        />

                        {/* Bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/50 to-transparent" />

                        {/* Image number */}
                        <div className="absolute bottom-5 left-5 flex items-center gap-3">

                          <span className="h-px w-6 bg-[#C9A227]" />

                          <span className="text-[10px] font-semibold tracking-[0.2em] text-white">
                            {currentNumber} / {totalNumber}
                          </span>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                </AnimatePresence>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =====================================================
            THUMBNAIL STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 rounded-xl border border-[#C9A227]/40 bg-[#0D0D0D] p-2.5 sm:mt-10 sm:p-3"
        >

          <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-18">

            {galleryImages.map((image, index) => {
              const isActive = index === currentIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={`View gallery image ${index + 1}`}
                  className={`group relative aspect-square overflow-hidden rounded-md border transition-all duration-300 ${
                    isActive
                      ? "border-[#C9A227]"
                      : "border-transparent"
                  }`}
                >

                  <img
                    src={image}
                    alt={`Gallery thumbnail ${index + 1}`}
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-70 group-hover:opacity-100"
                    }`}
                  />

                  {/* Active overlay */}
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-[#C9A227]" />
                  )}

                </button>
              );
            })}

          </div>

        </motion.div>

      </div>
    </section>
  );
}