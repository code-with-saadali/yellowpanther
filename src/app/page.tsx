import About from "./_components/About";
import FaqSection from "./_components/FaqSection";
import GiveUsAScratch from "./_components/GiveUsAScratch";
import Hero from "./_components/Hero";
import Marquee from "./_components/Marquee";
import ScrollMarquee from "./_components/ScrollMarquee";
import ServiceAccordion from "./_components/ServiceAccordion";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <ScrollMarquee/>
      <ServiceAccordion/>
      <Marquee/>
      <FaqSection/>
      <GiveUsAScratch/>
    </>
  );
}