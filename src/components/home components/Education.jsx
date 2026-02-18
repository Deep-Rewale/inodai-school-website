import React from "react";
import { PiBookOpenText } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

// object for maping
const details = [
  {
    title: "Waldorf Education",
    subTitle:
      "Receive them in reverance Educate the child in love And set them forth in freedom - Rudolf Steiner.",
    routes: "/waldorf-education",
    imgIcon: PiBookOpenText,
  },
  {
    title: "Programs Offered",
    subTitle:
      "Inodai Waldorf School offers the internationally recognized Steiner Waldorf curriculum.",
    routes: "/playgroup",
    imgIcon: FaRegLightbulb,
  },
  {
    title: "About Us",
    subTitle:
      "Inodai Waldorf School is managed by TVF a non-profit organization.",
    routes: "/about",
    imgIcon: HiUserGroup,
  },
  {
    title: "Admissions",
    subTitle:
      "The school conducts Orientation Programmes for the prospective parents from the month of October.",
    routes: "/login",
    imgIcon: PiGraduationCap,
  },
];

const Education = () => {
  // full container
  return (
    <div className=" py-10 mx-auto overflow-x-hidden -mt-30 relative z-10 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="content bg-page-bg flex max-w-7xl mx-auto px-6 py-8 lg:px-12 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-md font-body "
      >
        {/* mapping the items */}
        {details.map((item, index) => {
          const Icons = item.imgIcon;
          return (
            // items div
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "backInOut" }}
              whileHover={{ y: -6 }}
              className="separate-content flex gap-5 text-primary "
            >
              <div className="left text-accent ">
                <Icons size={40} />
              </div>
              <div className="right  flex flex-col h-full gap-2 text-left">
                <h3 className="text-lg font-bold ">{item.title}</h3>
                <p className="text-base font-semibold w-60 text-balance ">
                  {item.subTitle}
                </p>
                <p className="mt-auto flex items-center gap-0.5 text-base font-medium">
                  <Link to={item.routes}>Learn more </Link>
                  <GoArrowRight />
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Education;
