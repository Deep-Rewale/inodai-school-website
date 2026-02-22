import React from "react";
import { delay, motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
  },
};

const AfterSchool = () => {
  return (
    <section className="w-full bg-white py-28 px-6">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center space-y-6">
          <p className="text-accent text-sm uppercase tracking-wider font-body">
            Beyond School Hours
          </p>

          <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
            After School Activities
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg font-body">
            A diverse range of programs that nurture creativity, discipline,
            intellect and physical growth beyond classroom hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Big Music Card */}
          <motion.div
            variants={fadeUp}
            className="bg-[#F8F9FC] p-10 rounded-2xl shadow-md "
          >
            <h3 className="text-2xl font-heading text-primary font-semibold mb-6">
              Music & Performing Arts
            </h3>

            <ul className="space-y-3 text-gray-600 font-body text-base ">
              <li className="border-b border-gray-200 pb-4 mb-4">
                • Guitar – Rajkumar
              </li>
              <li className="border-b border-gray-200 pb-4 mb-4">
                • Ukulele – Rajkumar
              </li>
              <li className="border-b border-gray-200 pb-4 mb-4">
                • Keyboard – Hardik Pandya
              </li>
              <li className="border-b border-gray-200 pb-4 mb-4">
                • Drums – Soumayan
              </li>
              <li className="border-b border-gray-200 pb-4 mb-4">
                • Hindustani Classical Singing – Abhik Ghosh
              </li>
              <li className="border-b border-gray-200 pb-4 mb-4">
                • Bharatanatyam
              </li>
            </ul>
          </motion.div>

          {/* Smaller Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            {[
              "Gymnastics (Grade 1 & above)",
              "iBrain Powers (Grade 5 & above)",
              "Mathematics Class",
              "Handwork",
              "Therapeutic Movement (Kindergarten)",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-[#F8F9FC] p-6 rounded-xl shadow-sm py-12 "
              >
                <p className="text-primary font-heading font-semibold text-lg ">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center pt-10">
          <p className="text-primary font-semibold">
            For more details, contact the school office at contactus@inodai.com
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AfterSchool;
