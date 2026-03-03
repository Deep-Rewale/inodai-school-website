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

const MinimalPhilosophicalHero = () => {
  return (
    <section className="w-full bg-page-bg pt-32 pb-12 flex items-center justify-center px-5">
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
          Waldorf Philosophy
        </motion.h4>
        <motion.h1
          variants={itemVariants}
          className="text-primary font-bold font-heading text-4xl"
        >
          Waldorf Education
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-4xl mx-auto text-gray-600 text-base font-body leading-relaxed md:leading-loose"
        >
          Waldorf Education is one of the fastest-growing independent school
          movements in the world today. Rooted in a deep understanding of child
          development, it offers an approach to learning that nurtures the whole
          human being intellectually, emotionally and physically.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="max-w-4xl mx-auto text-gray-600 text-base font-body leading-relaxed md:leading-loose"
        >
          Rather than focusing solely on the acquisition of information, Waldorf
          education seeks to cultivate curiosity, imagination and a meaningful
          connection to the world. Learning becomes a living experience — one
          that engages the head, the heart and the hands in harmony.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MinimalPhilosophicalHero;
