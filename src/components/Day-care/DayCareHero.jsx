import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DayCareHero = () => {
  return (
    <section className="w-full bg-page-bg pt-30 pb-12 flex items-center justify-center p-5 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" text-center space-y-4"
      >
        <motion.h4
          variants={itemVariants}
          className="text-accent  text-lg font-body"
        >
          After School Support
        </motion.h4>
        <motion.h1
          variants={itemVariants}
          className="text-primary font-bold font-heading text-3xl md:text-4xl"
        >
          Day Care at Inodai
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-4xl mx-auto text-gray-600 text-base font-body leading-relaxed md:leading-loose"
        >
          A safe, nurturing and loving environment where children can relax,
          play and grow after school hours — thoughtfully designed to support
          our parent community.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default DayCareHero;
