import React from "react";
import { delay, motion } from "framer-motion";
import gymImage from "../../assets/programs/After-school/Gymnastics.jpg";
import BrainImage from "../../assets/programs/After-school/iBrain-Powers.jpg";
import MathematicsImage from "../../assets/programs/After-school/Mathematics-Class.jpg";
import HandworkImage from "../../assets/programs/After-school/Handwork.avif";
import TherapeuticImage from "../../assets/programs/After-school/Therapeutic-Movement.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
  },
};

const AfterSchool = () => {
  return (
    <section className="w-full bg-white py-13 md:py-28 px-6">
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
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-2xl font-heading text-primary font-semibold mb-6">
              Music & Performing Arts
            </h3>

            {[
              { instrument: "Guitar", teacher: "Rajkumar" },
              { instrument: "Ukulele", teacher: "Rajkumar" },
              { instrument: "Keyboard", teacher: "Hardik Pandya" },
              { instrument: "Drums", teacher: "Soumayan" },
              {
                instrument: "Hindustani Classical Singing",
                teacher: "Abhik Ghosh",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#F8F9FC] p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-primary font-heading font-semibold">
                  {item.instrument}
                </p>
                {item.teacher && (
                  <p className="text-gray-500 font-body text-sm mt-1">
                    Instructor: {item.teacher}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Smaller Activities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Gymnastics", image: gymImage },
              { title: "iBrain Powers", image: BrainImage },
              { title: "Mathematics Class", image: MathematicsImage },
              { title: "Handwork", image: HandworkImage },
              { title: "Therapeutic Movement", image: TherapeuticImage },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-sm group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center ">
                  <p className="text-white font-heading text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
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
