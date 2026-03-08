import React from "react";
import AboutHero from "../components/About-us/AboutHero";
import OurMission from "../components/About-us/OurMission";
import OurTeachers from "../components/About-us/OurTeachers";
import OurVision from "../components/About-us/OurVision";
import SupportUs from "../components/About-us/SupportUs";
import Footer from "../components/Footer"
const About = () => {
  return (
    <div className="bg-page-bg ">
      <AboutHero />
      <OurMission />
      <OurTeachers />
      <OurVision />
      <SupportUs />
      <Footer />
    </div>
  );
};

export default About;
