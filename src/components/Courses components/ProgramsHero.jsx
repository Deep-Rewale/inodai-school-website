import { motion } from "framer-motion";
import { section } from "framer-motion/client";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProgramsHero = () => {
  return (
    <section className="w-full bg-page-bg pt-30 pb-12 flex items-center justify-center ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className=" text-center space-y-4"
      >
        <motion.h4
          variants={itemVariants}
          className="text-accent  text-lg font-body"
        >
          Our Learning Initiatives
        </motion.h4>
        <motion.h1
          variants={itemVariants}
          className="text-primary font-bold font-heading text-4xl"
        >
          Learning Programs at Inodai Waldorf School
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-[600px] mx-auto text-gray-600 text-base font-body leading-relaxed"
        >
          Empowering educators, parents and children through meaningful,
          holistic experiences rooted in Waldorf philosophy.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ProgramsHero;
