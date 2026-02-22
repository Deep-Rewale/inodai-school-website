import React from "react";
import Hero from "../components/home components/Hero";
import { div } from "framer-motion/client";
import Education from "../components/home components/Education";
import WhyWaldorf from "../components/home components/WhyWaldorf";
import Footer from "../components/Footer";
import { TestimonialCloud } from "../components/home components/TestimonialCloud";

const Home = () => {
  return (
    <div className="bg-page-bg ">
      <Hero />
      <Education />
      <TestimonialCloud />
      <WhyWaldorf />
      <Footer />
    </div>
  );
};

export default Home;
