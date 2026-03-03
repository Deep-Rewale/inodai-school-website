import React from 'react'
import {motion} from "framer-motion"
import { IoCall } from "react-icons/io5";


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const DayCareCTA = () => {
  return (
    <section className="py-15 md:py-28 bg-[#F8F9FC] px-6">
  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="max-w-4xl mx-auto text-center space-y-12"
  >

    {/* Title */}
    <motion.div variants={fadeUp} className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
        Enroll in Our Daycare
      </h2>
      <p className="text-gray-600 font-body max-w-2xl mx-auto">
        We are here to support your family with a safe and structured after-school
        environment for your child.
      </p>
    </motion.div>

    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Timings Card */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white p-8 rounded-2xl shadow-md space-y-4"
      >
        <h3 className="text-xl font-heading text-primary font-semibold">
          Operating Hours
        </h3>

        <p className="text-gray-700 font-body">
          <strong>Daycare Timings:</strong><br />
          12:30 PM – 3:00 PM
        </p>

        <p className="text-gray-700 font-body">
          <strong>Days:</strong><br />
          Monday to Friday <br />
          (Holidays not included)
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-primary text-white p-8 rounded-2xl shadow-md space-y-4"
      >
        <h3 className="text-xl font-heading font-semibold">
          Contact Us
        </h3>

        <p className="font-body text-lg flex justify-center gap-2 items-center">
          <IoCall /> 98198 55336
        </p>

        <p className="font-body">
          ✉ contactus@inodai.com
        </p>

      </motion.div>

    </div>

  </motion.div>
</section>
  )
}

export default DayCareCTA