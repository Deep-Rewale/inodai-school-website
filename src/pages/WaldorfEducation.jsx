import React from "react";
import MinimalPhilosophicalHero from "../components/Waldorf-Education/MinimalPhilosophicalHero";
import WholeChild from "../components/Waldorf-Education/WholeChild";
import { StickyScrollRevealDemo } from "../components/Waldorf-Education/StickyScrollRevealDemo";
import FinalCTA from "../components/Waldorf-Education/FinalCTA";
import Footer from "../components/Footer";

const WaldorfEducation = () => {
  return (
    <div>
      <MinimalPhilosophicalHero />
      <WholeChild />
      <StickyScrollRevealDemo />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default WaldorfEducation;
