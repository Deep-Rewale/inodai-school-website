import React from "react";
import { motion } from "framer-motion";
import Img1 from "../../assets/KinderGarden/KinderGarden1.avif";
import Img2 from "../../assets/KinderGarden/KinderGarden2.avif";
import Img3 from "../../assets/KinderGarden/KinderGarden3.avif";

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
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

const KinderGardenExp = () => {
  return (
    <section className="py-15 md:py-28 bg-[#F8F9FC] px-6">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto space-y-20"
      >
        {/* SECTION TITLE */}
        <motion.div variants={fadeUp} className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
            The Kindergarten Experience
          </h2>
          <p className="text-gray-600 font-body max-w-3xl mx-auto">
            Our experiential program nurtures imagination, independence and
            readiness through play, rhythm and meaningful relationships.
          </p>
        </motion.div>

        {/* ----------------------------- */}
        {/* 1. HOW CHILDREN LEARN */}
        {/* ----------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div variants={slideLeft} className="space-y-6">
            <h3 className="text-2xl font-heading text-primary">
              Learning Through Play & Imitation
            </h3>

            <p className="text-gray-700 font-body leading-relaxed">
              Our kindergarten children learn through play, time in nature,
              storytelling, singing and hands-on activities guided by
              compassionate teachers.
            </p>

            <p className="text-gray-700 font-body leading-relaxed">
              Open-ended toys and natural objects encourage imagination and
              creativity.
            </p>
          </motion.div>

          <motion.div
            variants={slideRight}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <motion.ul
              variants={containerStagger}
              className="space-y-4 text-gray-700 font-body"
            >
              {[
                "Storytelling & Puppet Shows",
                "Painting, Drawing & Beading",
                "Cooking & Handwork",
                "Outdoor Play & Seasonal Crafts",
                "Beach & Park Visits",
              ].map((item, index) => (
                <motion.li key={index} variants={fadeUp}>
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* ----------------------------- */}
        {/* 2. CLASSROOM STRUCTURE */}
        {/* ----------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <motion.div
            variants={slideLeft}
            className="bg-white p-8 rounded-2xl shadow-md space-y-4"
          >
            <h3 className="text-2xl font-heading text-primary">
              Mixed Age Classrooms
            </h3>

            <p className="text-gray-700 font-body leading-relaxed">
              Nursery, Junior and Senior Kindergartners learn together in a
              consistent and nurturing environment for three years.
            </p>

            <p className="text-gray-700 font-body leading-relaxed">
              Senior students act as mentors, building leadership and empathy.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="space-y-6">
            <h3 className="text-2xl font-heading text-primary">
              Class Capacity & Eligibility
            </h3>

            <motion.ul
              variants={containerStagger}
              className="space-y-3 text-gray-700 font-body"
            >
              {[
                "Maximum 25 students per class",
                "1 Full-time Teacher",
                "1 Assistant Teacher",
                "1 Helper",
              ].map((item, index) => (
                <motion.li key={index} variants={fadeUp}>
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* ----------------------------- */}
        {/* 3. HOW WE ASSESS */}
        {/* ----------------------------- */}

        <motion.div
          variants={scaleFade}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-md text-center space-y-6"
        >
          <h3 className="text-2xl font-heading text-primary">How We Assess</h3>

          <p className="text-gray-700 font-body leading-relaxed max-w-3xl mx-auto">
            Early childhood assessment takes a formative approach. Teachers rely
            on careful observation, documentation and parent-teacher dialogue to
            understand each child's unique progress.
          </p>
        </motion.div>
        <div className="py-10">
          <motion.div
            variants={imageStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 overflow-hidden"
          >
            <motion.img
              variants={imageReveal}
              className="h-full w-full rounded-2xl shadow-md"
              src={Img1}
              alt="kindergarten Image"
              loading="lazy"
              decoding="async"
            />

            <motion.img
              variants={imageReveal}
              className="h-full w-full rounded-2xl shadow-md"
              src={Img2}
              alt="kindergarten Image"
              loading="lazy"
              decoding="async"
            />

            <motion.img
              variants={imageReveal}
              className="h-full w-full rounded-2xl shadow-md"
              src={Img3}
              alt="kindergarten Image"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default KinderGardenExp;
