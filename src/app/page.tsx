import About from "./_components/About";
import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import GiveUsAScratch from "./_components/GiveUsAScratch";
import Hero from "./_components/Hero";
import LenisScroll from "./_components/LenisScroll";
import Marquee from "./_components/Marquee";
import Navbar from "./_components/Navbar";
import ScrollMarquee from "./_components/ScrollMarquee";
import ServiceAccordion from "./_components/ServiceAccordion";

export default function Home() {
  return (
    <>
    <LenisScroll/>
      <Navbar />
      <Hero/>
      <About/>
      <ScrollMarquee/>
      <ServiceAccordion/>
      <Marquee/>
      <FaqSection/>
      <GiveUsAScratch/>
      <Footer/>
    </>
  );
}