import React from "react";
import AboutHero from "../components/aboutUs components/aboutHero";
import OurMission from "../components/aboutUs components/OurMission";
import OurTeachers from "../components/aboutUs components/OurTeachers";
import OurVision from "../components/aboutUs components/OurVision";
import SupportUs from "../components/aboutUs components/SupportUs";
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
