import { motion } from "framer-motion";
import React from "react";

const journeyData = [
  { year: "2011–12", label: "3 Children & 1 Teacher" },
  { year: "2015–16", label: "120 Students" },
  { year: "2020–21", label: "300 Students" },
  { year: "2023–24", label: "350 Students" },
  { year: "2024–25", label: "400 Students" },
  { year: "2025–26", label: "450 Students" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutHero = () => {
  return (
    <div className="bg-page-bg h-screen pt-18">
      {/* header text */}
      <section className="pt-25 text-center space-y-3">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl font-semibold text-primary"
        >
          About Inodai Waldorf School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-body text-base font-semibold text-primary"
        >
          Nurturing minds and hearts since 2011 through holistic Waldorf
          education.
        </motion.p>
      </section>
      {/* journey content */}
      <section className="grid grid-cols-2 gap-20 max-w-7xl mx-auto px-6  items-center mt-20">
        {/* left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="left-text space-y-5"
        >
          <h2 className="font-heading font-semibold text-4xl text-primary">
            Our Journey
          </h2>
          <p className="font-body font-semibold text-base text-gray-700 leading-relaxed mb-6">
            Inodai Waldorf School was founded in 2011 with a small group of 3
            children and 1 teacher. What began as a single classroom has now
            grown into a vibrant community.
          </p>
          <p className="font-body font-semibold text-base text-gray-700 leading-relaxed">
            Today we nurture over 400 students with the support of dedicated
            teachers and staff, guided by our philosophy of holistic Waldorf
            education.
          </p>
        </motion.div>
        {/* right content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="right-text relative"
        >
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="flex gap-5"
            >
              {/* year  */}
              <div className="h-13 w-24 flex items-center justify-center bg-accent mb-5 text-lg font-semibold text-white rounded-md font-body shadow-xl">
                {item.year}
              </div>
              {/* mid line and circle */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 72 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-1 bg-primary relative shadow-xl"
              >
                <div className="h-3 w-3 bg-white border border-bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 font-body shadow-xl"></div>
              </motion.div>
              {/* label box */}
              <div className="h-13 w-55 flex items-center justify-center bg-primary mb-5 text-lg font-semibold text-white rounded-md shadow-xl">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AboutHero;
