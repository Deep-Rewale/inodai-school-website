import { div, h1 } from "framer-motion/client";
import React from "react";
import ProgramsHero from "../components/Courses components/ProgramsHero";
import CsettSection from "../components/Courses components/CsettSection";
import { DiVim } from "react-icons/di";
import AnthroposophySection from "../components/Courses components/AnthroposophySection";
import SummerCampSection from "../components/Courses components/SummerCampSection";
import AfterSchool from "../components/Courses components/AfterSchool";
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
