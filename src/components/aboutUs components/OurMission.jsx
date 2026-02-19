import { motion } from "framer-motion";
import React from "react";
import OurMissonImage1 from "../../assets/About us/Our mission img/our-mission-1.png";
import OurMissonImage2 from "../../assets/About us/Our mission img/our-mission-2.png";
import OurMissonImage3 from "../../assets/About us/Our mission img/our-mission-3.png";

const missionData = [
  {
    MissonImages: OurMissonImage1,
    title: "Awaken Joy of Learning",
    desc: "Through experiential and age-appropriate learning that nurtures each child’s unique growth.",
  },
  {
    MissonImages: OurMissonImage2,
    title: "Embracing Nature",
    desc: "Connecting children with the natural world through gardening, sports and outdoor experiences.",
  },
  {
    MissonImages: OurMissonImage3,
    title: "Fostering Inclusion",
    desc: "Rooted in the belief that all children deserve quality education and shared community experiences.",
  },
];

const OurMission = () => {
  return (
    <section className="py-24 bg-white">
      {/* mid title */}
      <div className="max-w-7xl text-center mx-auto">
        <h2 className="text-4xl font-heading text-primary font-semibold mb-6">
          Our Mission
        </h2>
        {/*cards container  */}
        <div className="grid grid-cols-3 gap-5">
          {missionData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-page-bg shadow-2xl rounded-2xl overflow-hidden h-120 hover:bg-primary hover:text-white cursor-pointer text-primary"
              key={index}
            >
              {/* images div */}
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-75 object-cover "
                  src={item.MissonImages}
                  alt={item.title}
                />
              </div>
              {/* content */}
              <div className="p-6 text-left">
                <h3 className="font-heading text-2xl font-semibold  hover:text-white ">
                  {item.title}
                </h3>
                <p className="font-body leading-relaxed mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
