import { div, h1 } from "framer-motion/client";
import React from "react";
import ProgramsHero from "../components/Programs/ProgramsHero";
import CsettSection from "../components/Programs/CsettSection";
import { DiVim } from "react-icons/di";
import AnthroposophySection from "../components/Programs/AnthroposophySection";
import SummerCampSection from "../components/Programs/SummerCampSection";
import AfterSchool from "../components/Programs/AfterSchool";
import Footer from "../components/Footer";

const Programs = () => {
  return (
    <>
      <ProgramsHero />
      <CsettSection />
      <AnthroposophySection />
      <SummerCampSection />
      <AfterSchool />
      <Footer />
    </>
  );
};

export default Programs;
