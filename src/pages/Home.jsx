import React from "react";
import Hero from "../components/Home/Hero";
import { div } from "framer-motion/client";
import Education from "../components/Home/Education";
import WhyWaldorf from "../components/Home/WhyWaldorf";
import Footer from "../components/Footer";
import { TestimonialCloud } from "../components/Home/TestimonialCloud";

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
