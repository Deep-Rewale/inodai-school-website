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
const HomeAway = () => {
  return (
    <section className="py-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 text-center space-y-8"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl text-primary"
        >
          {" "}
          A Home Away From Home
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body leading-relaxed text-gray-700 text-lg"
        >
          {" "}
          This program gently supports children aged 2-3 years as they
          experience being away from home for the first time. Following a steady
          daily rhythm provides a deep sense of security, consistency and
          comfort.
        </motion.p>
          <motion.p
          variants={itemVariants}
          className="font-body leading-relaxed text-gray-700 text-lg"
        >
          {" "}
          Through a steady daily rhythm and warm teacher relationships, children 
      develop trust, confidence and emotional security in a nurturing environment.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HomeAway;
