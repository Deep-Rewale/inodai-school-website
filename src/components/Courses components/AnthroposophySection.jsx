import React from "react";
import { motion } from "framer-motion";
import workshopImg from "../../assets/programs/Anthroposophy/Anthroposophy.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const AnthroposophySection = () => {
  return (
    <section className="w-full bg-white py-28 px-6 ">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          variants={fadeUp}
          className="relative"
        >
          <motion.img
            src={workshopImg}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            alt="Anthroposophy Workshop"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeUp} className="space-y-8">
          <div>
            <p className="text-accent text-sm uppercase tracking-wider font-body">
              Parent & Community Learning
            </p>

            <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold mt-3">
              Anthroposophy Workshops
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed font-body">
            The school organizes learning sessions for parents, relatives and
            friends interested in gaining a deeper understanding of Waldorf
            education. These sessions are guided by experienced teachers,
            mentors and specialists in the field of Anthroposophy.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <h3 className="font-heading text-primary text-lg mb-2 font-semibold">
                Deeper Understanding
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Explore the philosophical foundations and core principles of
                Waldorf education.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <h3 className="font-heading text-primary text-lg mb-2 font-semibold">
                Expert Mentorship
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Learn directly from experienced educators and Anthroposophy
                specialists.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition sm:col-span-2">
              <h3 className="font-heading text-primary text-lg mb-2 font-semibold">
                Community Enrichment
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Engage in meaningful dialogue that strengthens both personal
                growth and community understanding.
              </p>
            </div>
          </div>

          {/* Session Info */}
          <p className="text-gray-700 font-body pt-6">
            The details of the next session will be announced soon.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AnthroposophySection;
