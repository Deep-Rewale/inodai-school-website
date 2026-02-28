import React from 'react'
import { motion } from "framer-motion";
import img1 from "../../assets/eventsImg/AnnualsamrasMela/samras1.jpg"
import { AiOutlineSafety } from "react-icons/ai";
import { GiMeal } from "react-icons/gi";
import { IoMdHappy } from "react-icons/io";
import DayCare1 from "../../assets/Day-care/Day-care-content/DayCare1.avif"
import DayCare2 from "../../assets/Day-care/Day-care-content/DayCare2.avif"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideTop = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideBottom = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const DayCareContent = () => {
  return (
   <section className="py-28 bg-white px-6">
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
  >

    {/* LEFT CONTENT */}
    <motion.div variants={slideLeft} className="space-y-8">

      <h2 className="text-3xl md:text-4xl font-semibold font-heading text-primary">
        A Safe & Loving Space After School
      </h2>

      <p className="text-gray-700 text-base font-body leading-relaxed">
        To support our parent community, Inodai offers a Daycare facility
        designed to provide a safe, nurturing and loving environment where
        young children can learn, play and grow with comfort.
      </p>

      <p className="text-gray-700 font-body leading-relaxed">
        Nutritious vegetarian meals are provided daily to support your child’s
        physical well-being and healthy development.
      </p>

      {/* Feature Tags */}
      <div className="flex flex-wrap gap-4 pt-4">
     <div className="bg-[#F8F9FC] flex gap-2 items-center px-6 py-4 rounded-full text-primary font-body text-base shadow-sm">   <AiOutlineSafety size={25} /> <span> Safe Environment </span></div>

     <div className="bg-[#F8F9FC] flex gap-2 items-center px-6 py-4 rounded-full text-primary font-body text-base shadow-sm">   <GiMeal  size={25} /> <span>   Nutritious Meals </span></div> 

     <div className="bg-[#F8F9FC] flex gap-2 items-center px-6 py-4 rounded-full text-primary font-body text-base shadow-sm">   <IoMdHappy size={25} /> <span>  Caring Supervision </span></div>  
       
      </div>

    </motion.div>


    {/* RIGHT IMAGE COLLAGE */}
    <div className="relative h-[420px]">

      <motion.img
        variants={slideTop}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        src={ DayCare1}
        alt="Daycare environment"
        className="absolute top-0 left-0 w-3/4 h-64 object-cover rounded-2xl shadow-xl"
      />

      <motion.img
        variants={slideBottom}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        src={ DayCare2}
        alt="Children in daycare"
        className="absolute bottom-0 right-0 w-3/4 h-64 object-cover rounded-2xl shadow-xl border-4 border-white"
      />

    </div>

  </motion.div>
</section>
  )
}

export default DayCareContent