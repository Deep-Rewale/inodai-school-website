import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/Admissions/Assessment/kinder.jpg";
import Img2 from "../../assets/Admissions/Assessment/grade.jpg";
import Img3 from "../../assets/Admissions/Assessment/underStanding.webp";

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Assessment = () => {
  return (
    <section className="py-15 bg-page-bg min-h-screen flex items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto px-6 gap-10 items-center "
      >
        {/* let content */}
        <motion.div variants={slideLeft} className="space-y-5">
          <h2 className="text-3xl lg:text-4xl font-semibold font-heading text-primary">
            Assessment Details
          </h2>
          <p className="font-body text-gray-700 lg:text-lg md:text-base">
            {" "}
            Kindergarten assessments are conducted over two days in a nurturing
            and child-friendly environment.
          </p>
          <p className="font-body text-gray-700 lg:text-lg md:text-base">
            Grade assessments take place over one week and evaluate readiness
            and developmental appropriateness.
          </p>
          <p className="font-body text-gray-700 lg:text-lg md:text-base">
            Our goal is not to test children but to understand them.
          </p>
        </motion.div>
        {/* right images */}
        <motion.div
          variants={slideRight}
          className="grid md:grid-cols-2   gap-5"
        >
          <img
            src={Img1}
            className="rounded-2xl shadow-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src={Img2}
            className="rounded-2xl shadow-md"
            loading="lazy"
            decoding="async"
          />
          <img
            src={Img3}
            className="rounded-2xl shadow-md col-span-2"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Assessment;
