import { motion } from "framer-motion";
import React from "react";
import Image1 from "../../assets/eventsImg/BuildingEvents/garba-night.jpg";
import Image2 from "../../assets/eventsImg/BuildingEvents/CricketPremierLeague.jpg";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const details = [
  {
    title: "Garba Night",
    desc: "An evening filled with music, dance and festive joy, bringing families together to celebrate tradition and togetherness.",
    img: Image1,
  },
  {
    title: "Inodai Cricket Premier League",
    desc: "A spirited sporting event where parents connect, compete and strengthen bonds through teamwork and friendly competition.",
    img: Image2,
  },
];
const BuildingEvents = () => {
  return (
    <section className="bg-page-bg min-h-screen w-full py-18  flex items-center ">
      <div className="max-w-5xl mx-auto">
        {/* centered heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-3 mb-2 px-4"
        >
          <p className="font-body text-accent md:text-lg text-base font-medium">
            Community Engagement
          </p>
          <h2 className="font-heading text-primary md:text-4xl text-3xl font-semibold">
            Community Building Events
          </h2>
          <p className="font-body text-gray-700 max-w-4xl mx-auto ">
            Parents at Inodai have come together to form The Inodai Parents
            Community Building Team (ICBT), creating a vibrant platform for
            connection, collaboration and celebration within our school
            community.
          </p>
        </motion.div>
        {/* grid cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 grid-cols-1 gap-10 p-10 "
        >
          {details.map((item, index) => (
            <motion.div
              variants={cardVariant}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] h-auto rounded-2xl overflow-hidden "
              key={index}
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="h-110 object-cover w-full "
                  src={item.img}
                  alt="content images"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5 space-y-2 bg-white rounded-t-2xl -mt-10 relative z-20 ">
                <h3 className="font-heading text-2xl text-primary font-semibold">
                  {item.title}
                </h3>
                <p className="font-body text-base  text-gray-700  font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingEvents;
