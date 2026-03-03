import React from "react";
import { motion } from "framer-motion";
import Counter from "../Counter";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const CsettSection = () => {
  return (
    <section className="w-full bg-[#3F3C77]/5 py-20 px-3">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-heading text-primary font-semibold"
        >
          CSETT - Centre for Steiner Education & Teachers Training
        </motion.h2>

        {/* Description */}
        <motion.div
          variants={fadeUp}
          className="space-y-6 text-gray-600 font-body  md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            CSETT is a non-profit initiative dedicated to empowering educators
            with a deep understanding of Waldorf principles and pedagogy.
          </p>

          <p>
            Since 2010, Inodai has conducted over 30 batches, growing from just
            five participants to welcoming more than 20 participants per batch.
            Beyond pedagogy, the course nurtures inner growth and
            transformation.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 mx-3 gap-8 pt-6"
        >
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-lg rounded-2xl py-8  "
          >
            <h3 className="text-3xl font-heading  text-primary font-bold">
              <Counter end={2010} />
            </h3>
            <p className="mt-2 text-gray-500  ">Established</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-lg rounded-2xl py-8"
          >
            <h3 className="text-3xl font-heading text-primary font-bold">
              <Counter end={30} />+
            </h3>
            <p className="text-gray-500 mt-2">Batches Conducted</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white shadow-lg rounded-2xl py-8"
          >
            <h3 className="text-3xl font-heading text-primary font-bold ">
              <Counter end={20} />+
            </h3>
            <p className="text-gray-500 mt-2">Participants Per Batch</p>
          </motion.div>
        </motion.div>

        {/* Upcoming Info */}
        <div className="pt-10 space-y-4">
          <p className="text-lg font-body text-gray-700">
            Upcoming Batch – Academic Year 2025–26
          </p>

          <p className="text-primary font-semibold">contactus@csett.com</p>
        </div>
      </motion.div>
    </section>
  );
};

export default CsettSection;
