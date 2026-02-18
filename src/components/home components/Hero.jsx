import { title } from "framer-motion/client";
import React, { useEffect } from "react";
import { useState } from "react";
import herobg1 from "../../assets/home page/hero-section-img/hero-bg-1.jpg";
import herobg2 from "../../assets/home page/hero-section-img/hero-bg-2.jpg";
import herobg3 from "../../assets/home page/hero-section-img/hero-bg-3.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Education That Liberates",
    subtite: "Inodai Waldorf School nurtures creativity and imagination.",
    img: herobg1,
  },
  {
    title: "Together We'll Explore New Things",
    subtite:
      "We believe everyone should have the opportunity to grow through education.",
    img: herobg2,
  },

  {
    title: "Where Imagination Meets Learning",
    subtite:
      "At Inodai Waldorf School, we nurture curiosity, creativity, and confidence in every child.",
    img: herobg3,
  },
];
const Hero = () => {
  const [index, setIndex] = useState(0);
  // auto slider every 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSLider = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSLider = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    // Slides

    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full"
        >
          {/* background image */}
          <img
            className="w-full object-cover h-full"
            src={slides[index].img}
            alt="Education That Liberates"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* text content */}
          <div className="absolute inset-0 flex items-center">
            <div className=" mx-30 text-white">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-heading font-bold leading-tight"
              >
                {slides[index].title}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-lg font-body"
              >
                {slides[index].subtite}
              </motion.p>
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="px-6 py-3 bg-accent rounded-md mt-4 font-semibold hover:bg-primary-dark transition cursor-pointer"
              >
                Find Courses
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* buttons for left and right */}
      <motion.button
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl border rounded-full p-2 cursor-pointer hover:text-accent"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={prevSLider}
      >
        <SlArrowLeft />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl border rounded-full p-2 cursor-pointer hover:text-accent"
        onClick={nextSLider}
      >
        <SlArrowRight />
      </motion.button>
    </div>
  );
};

export default Hero;
