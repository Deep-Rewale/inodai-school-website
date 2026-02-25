import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import whywe from "../../assets/whywe/whywe.jpg";
import bgImage from "../../assets/whywe/why-bg.png"


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
const WhyWaldorf = () => {
  return (
    < motion.section initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} className="py-40 h-full  bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="ful-container max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* left img */}
        <motion.div  animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="left-content  max-w-xl ">
          <img
            className="shadow-2xl rounded-2xl w-full"
            src={whywe}
            alt="student studing"
          />
        </motion.div>
        {/* right content */}
        <motion.div  variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }} className="right-content">
          <motion.h2   variants={item} className="text-4xl font-heading font-bold text-primary mb-6 leading-tight">
            Why Waldorf?
          </motion.h2>
          <motion.p  variants={item} className="text-lg text-gray-900 leading-relaxed max-w-xl font-body ">
            {" "}
            Waldorf Education is the fastest growing independent school
            movement...
          </motion.p>
          <motion.ul className="space-y-3 text-gray-900 mt-6 font-body">
            <motion.li  variants={item} className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span> Education of
              Head, Heart & Hands
            </motion.li>
            <motion.li  variants={item} className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span> Balanced Artistic
              & Academic Learning
            </motion.li>
            <motion.li  variants={item} className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span> Development of
              Truth, Beauty & Goodness
            </motion.li>
          </motion.ul>
          {/* button */}
          <Link to={"/waldorf-education"}>
          <button className="bg-primary text-white px-5 py-3 rounded-md font-semibold hover:bg-primary-dark  duration-200 transition mt-6 hover:-translate-y-1 hover:shadow-md cursor-pointer">
            Discover Our Philosophy
          </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyWaldorf;
