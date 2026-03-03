import React from "react";
import { motion } from "framer-motion";
import { GiBrain } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { IoHandLeftOutline } from "react-icons/io5";

const lineVariant = {
  hidden: { height: 0 },
  visible: {
    height: "80%",
    transition: { duration: 4, ease: "easeInOut" },
  },
};

const leftCard = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightCard = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WholeChild = () => {
  return (
    <section className="relative py-13 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-accent uppercase tracking-wider text-base font-body">
            Education of the Whole Child
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
            Head, Heart & Hands in Harmony
          </h2>
        </div>

        {/* Vertical Line */}
        <motion.div
          variants={lineVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute left-1/2 top-52 bottom-20 w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block"
        ></motion.div>

        <div className="md:space-y-24 space-y-10 relative">
          {/* HEAD */}
          <motion.div
            variants={leftCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:grid md:grid-cols-2 items-center gap-12 relative"
          >
            <div className="md:text-right border border-gray-200 p-5 rounded-2xl md:shadow-2xl shadow-lg">
              <motion.h3  whileHover={{
    scale: 1.1,
    rotate: 5
  }}
  transition={{ type: "spring", stiffness: 300  }} className="text-3xl font-heading text-primary mb-4 border border-gray-200 p-5 border border-gray-200 inline-block shadow-lg rounded-lg ">
                <GiBrain size={40} />
              </motion.h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Intellectual growth is cultivated through thoughtful inquiry,
                critical thinking and age-appropriate academic depth. Students
                develop clarity, independence and confidence in their thinking.
              </p>
            </div>

            <div></div>

            {/* Background Word */}
            <span className="absolute text-[120px] font-heading text-gray-100 top-0 left-1/2 -translate-x-1/2 -z-10 hidden md:block">
              HEAD
            </span>
          </motion.div>

          {/* HEART */}
          <motion.div
            variants={rightCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:grid md:grid-cols-2 items-center gap-12 relative"
          >
            <div></div>

            <div className="border border-gray-200 p-5 rounded-2xl md:shadow-2xl shadow-lg">
              <motion.h3  whileHover={{
    scale: 1.1,
    rotate: 5
  }}
  transition={{ type: "spring", stiffness: 300 }} className="text-3xl font-heading text-primary mb-4 p-5 border border-gray-200 inline-block shadow-lg rounded-lg">
                <FaRegHeart size={40} />
              </motion.h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Emotional intelligence and imagination are nurtured through
                storytelling, art, music and collaborative experiences. Students
                learn empathy, resilience and meaningful connection.
              </p>
            </div>

            <span className="absolute text-[120px] font-heading text-gray-100 top-0 left-1/2 -translate-x-1/2 -z-10 hidden md:block">
              HEART
            </span>
          </motion.div>

          {/* HANDS */}
          <motion.div
            variants={leftCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="md:grid md:grid-cols-2 items-center gap-12 relative"
          >
            <div className="md:text-right  border border-gray-200 p-5 rounded-2xl md:shadow-2xl shadow-lg">
              <motion.h3  whileHover={{
    scale: 1.1,
    rotate: 5
  }}
  transition={{ type: "spring", stiffness: 300 }} className="text-3xl font-heading text-primary mb-4 border border-gray-200 inline-block shadow-lg rounded-lg p-5">
                <IoHandLeftOutline size={40} />
              </motion.h3>
              <p className="text-gray-600 leading-relaxed font-body">
                Learning is rooted in experience. Through craft, movement,
                handwork and practical engagement, knowledge becomes tangible,
                meaningful and lived.
              </p>
            </div>

            <div></div>

            <span className="absolute text-[120px] font-heading text-gray-100 top-0 left-1/2 -translate-x-1/2 -z-10 hidden md:block">
              HANDS
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WholeChild;
