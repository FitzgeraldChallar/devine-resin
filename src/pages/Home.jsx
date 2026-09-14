import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Programs from "../components/home/Programs";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TrainingProcess from "../components/home/TrainingProcess";
import Entrepreneurship from "../components/home/Entrepreneurship";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import GalleryPreview from "../components/home/GalleryPreview";

export default function Home() {
  return (
    <main className="bg-[#080808]">
      <Navbar />

      <Hero />

      <AboutPreview />

      <Programs />

      <WhyChooseUs />

      <TrainingProcess />

      <Entrepreneurship />

      <GalleryPreview />

      <Testimonials />

      <CTA />
    </main>
  );
}