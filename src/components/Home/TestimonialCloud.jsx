import React from 'react'
import { motion , AnimatePresence} from "framer-motion";
import cloudBg from "../../assets/home page/testimonial-section-img/cloud.png";
import { useState } from 'react';
const testimonials = [
  {
    quote:
      "Inodai has given our child the freedom to explore, create, and grow with confidence. It truly feels like a nurturing second home.",
    name: "Mrs. Kavita Iyer",
    role: "Parent of Grade 6 Student",
  },
  {
    quote:
      "The warmth of the teachers and the strong sense of community make this school feel like a second home for our child.",
    name: "Mr. Rohan Shah",
    role: "Parent of Kindergarten Student",
  },
  {
    quote:
      "Our child comes home joyful and excited to share new discoveries every day. Waldorf education truly nurtures curiosity.",
    name: "Mrs. Ananya Mehta",
    role: "Parent of Grade 3 Student",
  },
  {
    quote:
      "The emphasis on creativity and character building has made a visible difference in our child's confidence and independence.",
    name: "Mr. Amit Desai",
    role: "Parent of Grade 8 Student",
  },
];


export const TestimonialCloud = () => {

  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevReview = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
        <section className=" py-3 md:py-24 relative overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto py-none md:px-6 md:py-18 text-center relative">

        {/* Cloud Background */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  animate={{ y: [0, -12, 0] }}
  transition={{
    opacity: { duration: 1.1 },
    scale: { duration: 1.1},
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
          className="absolute inset-0 bg-center bg-[length:120%] bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${cloudBg})` }}
        ></motion.div>

        <div className="relative z-10 py-20 px-10">

          <p className="text-accent font-semibold tracking-wide mb-4">
            Parents' Voices
          </p>

          <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-6">
            “More Than Education - A Beautiful Childhood”
          </h2>

          {/* Animated Review */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed font-body mb-8">
                {testimonials[index].quote}
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="text-left">
                  <p className="font-semibold text-primary">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-8 ">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition flex items-center justify-center cursor-pointer  p-4"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition flex items-center justify-center cursor-pointer"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
