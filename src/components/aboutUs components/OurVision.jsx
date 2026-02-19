import { motion } from "framer-motion";
import React from "react";

const visionData = [
  {
    title: "Teacher Training",
    desc: "We aim to establish ourselves as a pre-eminent training center for Waldorf educators across India, elevating the quality of holistic learning nationwide.",
  },
  {
    title: "Expansion to Grade 11 & 12",
    desc: "We plan to complete the Steiner school curriculum by expanding into senior secondary education, ensuring continuity in holistic development.",
  },
  {
    title: "Residential Program",
    desc: "To establish a residential learning environment for students from Grade 9 to Grade 12, fostering independence and community living.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const OurVision = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* heading  */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-heading font-semibold text-primary mb-6"
        >
          {" "}
          Our Vision for the Future
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body max-w-2xl mx-auto mb-6"
        >
          {" "}
          Committed to growth, excellence, and the continued evolution of
          holistic Waldorf education.
        </motion.p>

        {/* vistion card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-10"
        >
          {visionData.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 border border-gray-100 rounded-xl shadow-lg  text-left cursor-pointer"
            >
              <h3 className="text-primary text-xl mb-4 font-semibold">
                {itemData.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-body">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;
