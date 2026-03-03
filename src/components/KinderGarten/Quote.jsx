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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Quote = () => {
  return (
    <section className="py-15 md:py-28 bg-white px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT - Quote Card */}
        <motion.div
          variants={fadeUp}
          className="bg-[#F8F9FC] p-10 rounded-2xl shadow-md"
        >
          <p className="text-2xl md:text-3xl font-heading text-primary leading-snug">
            “Pushing skills before children are biologically ready sets them up
            to fail.”
          </p>

          <div className="w-16 h-1 bg-accent mt-6 mb-4"></div>

          <p className="text-gray-600 font-body text-sm">
            — M. Baker, M.D. <br />
            Executive Director, Gesell Institute of Human Development
          </p>
        </motion.div>

        {/* RIGHT - Introduction */}
        <motion.div variants={fadeUp} className="space-y-6">
          <h2 className="text-3xl font-heading text-primary">
            The Early Childhood Years
          </h2>

          <p className="text-gray-700 font-body leading-relaxed">
            The Kindergarten years from age 3–6 years are characterized in
            Steiner Waldorf education as the years when an ethos of “goodness”
            should prevail, where children’s good actions and good thoughts are
            encouraged.
          </p>

          <p className="text-gray-700 font-body leading-relaxed">
            Children are sensory beings who absorb like sponges all elements in
            their environment. The experiences they take in during this
            formative stage play a vital role in shaping their future
            development.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Quote;
