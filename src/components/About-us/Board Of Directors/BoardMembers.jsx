import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const members = [
  {
    name: "Apeksha Chowdary",
    role: "De Facto Member",
    short:
      "Apeksha Chowdary is a commerce graduate and one of the pioneering Waldorf Kindergarten teachers in Mumbai.",
    full: "She has attended numerous Waldorf teacher training seminars in India and Switzerland. A founding member of Tridha School, she later joined Inodai as a mentor for Kindergarten teachers and coordinator for school activities. She actively conducts workshops across India and contributes to the All India Association for Waldorf Kindergarten.",
  },
];

const BoardMembers = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="w-full bg-[#F8F9FC] py-10 md:py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <p className="text-accent uppercase tracking-wider text-base font-body">
            Governance & Guidance
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
            Leadership & Advisory Members
          </h2>
          <p className="text-gray-600 font-body max-w-3xl mx-auto">
            Our board members contribute their experience, mentorship and
            dedication in strengthening the vision and educational foundation of
            Inodai Waldorf School.
          </p>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1  gap-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-2xl shadow-md transition-all space-y-5"
            >
              <h3 className="text-2xl font-heading text-primary font-semibold">
                {member.name}
              </h3>

              <p className="text-accent font-medium font-body mb-4">
                {member.role}
              </p>

              <p className="text-gray-700 font-body leading-relaxed">
                {member.short}
              </p>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600 font-body leading-relaxed mt-4 overflow-hidden"
                  >
                    {member.full}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="mt-5 text-primary font-semibold hover:underline flex items-center gap-3"
              >
                {openIndex === index ? "Read Less" : "Read More"}
                <span
                  className={`${openIndex === index ? "rotate-180" : "rotate-0"}`}
                >
                  <IoIosArrowDown size={20} />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
