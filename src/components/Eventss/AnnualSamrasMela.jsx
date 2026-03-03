import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/eventsImg/AnnualsamrasMela/samras1.jpg";
import img2 from "../../assets/eventsImg/AnnualsamrasMela/samras2.jpg";
import img3 from "../../assets/eventsImg/AnnualsamrasMela/samras3.jpg";
import imgBg from "../../assets/eventsImg/AnnualsamrasMela/melaBg.png";

const container = {
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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cinematicTitle = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AnnualSamrasMela = () => {
  return (
    <section className="min-h-screen relative flex items-center py-18 border border-b-gray-500 ">
      {/* bg image */}
      <div className="absolute  inset-0 -z-10 ">
        <img
          className="w-full h-full object-cover"
          src={imgBg}
          alt="Bg image"
        />
      </div>

      <div className="absolute inset-0 bg-[#3F3C77]/70 -z-10"></div>

      {/* full content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center space-y-10"
      >
        {/* heading  */}
        <motion.div
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto space-y-5 px-5"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-accent md:text-lg text-base font-medium"
          >
            Annual Celebration
          </motion.p>
          <motion.h3
            variants={cinematicTitle}
            className="font-heading text-gray-300 md:text-4xl text-3xl font-semibold"
          >
            Annual Samras Mela
          </motion.h3>
          <motion.p variants={fadeUp} className="font-body text-gray-300 ">
            At Inodai Waldorf School, we take immense pride in celebrating our
            Annual Samras Mela - a vibrant gathering lovingly organized by our
            school management, teachers and parent community.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-gray-300 ">
            More than just an event, Samras Mela is a celebration of
            inclusivity, collaboration and shared values. Parents, families,
            friends and well-wishers come together to participate, contribute
            and experience the spirit of Waldorf education in action.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-gray-300 ">
            It serves as a joyful platform to strengthen bonds within our
            community, raise awareness about the Waldorf approach and support
            meaningful initiatives through collective effort.
          </motion.p>
        </motion.div>
        {/* images card  */}
        <motion.div
          variants={container}
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mx-4 lg:mx-10 py-10"
        >
          <motion.img
            variants={imageVariant}
            whileHover={{
              scale: 1.07,
              rotate: 0.5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-90 w-full object-cover rounded-2xl"
            src={img1}
            alt="kids images"
          />
          <motion.img
            variants={imageVariant}
            whileHover={{
              scale: 1.07,
              rotate: 0.5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-90 w-full object-cover rounded-2xl"
            src={img2}
            alt="kids images"
          />
          <motion.img
            variants={imageVariant}
            whileHover={{
              scale: 1.07,
              rotate: 0.5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="h-90 w-full object-cover rounded-2xl "
            src={img3}
            alt="kids images"
          />
        </motion.div>
        {/* small para last */}
        <motion.p variants={fadeUp} className="font-body text-gray-300 px-5">
          We warmly invite you to be a part of this special celebration - where
          togetherness blossoms and the true essence of community shines.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AnnualSamrasMela;
