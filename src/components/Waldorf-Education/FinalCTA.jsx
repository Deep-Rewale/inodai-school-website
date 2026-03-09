
import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const FinalCTA = () => {
  return (
     <section className="relative py-10 md:py-16 bg-[#F4F3FB] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >

          {/* Small Label */}
          <p className="text-accent uppercase tracking-wider text-sm font-body">
            Discover the Difference
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary font-semibold leading-tight">
            Experience Waldorf at Inodai
          </h2>

          {/* Paragraph */}
          <div className="space-y-6 text-gray-700 font-body text-lg leading-relaxed">
            <p>
              At Inodai Waldorf School, education is not limited to academics — 
              it is a journey of self-discovery, creativity and character formation. 
              We nurture confident thinkers, compassionate hearts and capable hands 
              through a balanced and developmentally appropriate approach to learning.
            </p>

            <p>
              We warmly invite you to visit our campus, meet our educators and 
              experience the living spirit of Waldorf education in action.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              to="/programs"
              className="inline-block bg-primary text-white font-body px-8 py-3 rounded-xl shadow-md transition duration-300 hover:bg-primary-dark"
            >
              Explore Our Programs
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA;