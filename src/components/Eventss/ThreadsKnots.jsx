import React from "react";
import ThreadsKnotss from "../../assets/eventsImg/ThreadsKnots/Threads&Knots.jpg";
import ThreadsKnotsBg from "../../assets/eventsImg/ThreadsKnots/threadsKnotsBg.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const imageReveal = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ThreadsKnots = () => {
  return (
    <section className=" w-full relative  grid items-center  py-30 ">
      {/* bg image */}
      <div className="absolute  inset-0 -z-10 ">
        <img
          className="w-full h-full object-cover"
          src={ThreadsKnotsBg}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#3F3C77]/70 -z-10"></div>
      {/* heading  */}
      <motion.h1
        variants={fadeUp}
        className=" block md:hidden text-center font-heading text-accent text-2xl lg:text-3xl font-semibold py-1"
      >
        Parent Engagement Programs
      </motion.h1>
      {/* grid container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-2 grid-cols-1 gap-16 max-w-7xl mx-auto p-6 "
      >
        {/* left image */}
        <motion.div
          variants={imageReveal}
          className="rounded-2xl overflow-hidden"
        >
          <img
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
            src={ThreadsKnotss}
            alt="Threads & Knots img"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
        {/* right content */}
        <motion.div className="space-y-6">
          <motion.p
            variants={fadeUp}
            className="font-body text-accent md:text-lg text-base font-medium"
          >
            Parent Engagement Initiative
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-gray-300 md:text-4xl text-3xl font-semibold"
          >
            Threads & Knots Session
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-gray-300 ">
            A weekly Threads & Knots session is held at Inodai, bringing parents
            together in a warm and creative space. Guided by our experienced
            handwork teachers, participants learn, weave and craft beautiful
            handmade creations through crochet and knitting.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-gray-300 ">
            This unique initiative nurtures creativity, mindfulness and
            meaningful connections. It offers parents an opportunity to explore
            new skills, express their artistic spirit and strengthen bonds
            within our vibrant school community.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-gray-300 ">
            We warmly invite you to join us and experience the joy of
            handcrafted creation.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThreadsKnots;
