import React from "react";
import { motion } from "framer-motion";

const RealWorldPreparation = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-accent uppercase tracking-wider text-sm font-body">
            Life Preparation
          </p>
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
            Preparing Children for the Real World
          </h2>
        </div>

        {/* Center Line */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary-soft -translate-x-1/2 rounded-2xl"></div>

          <div className="space-y-15">
            {/* Intellect */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 md:pr-12 border-b-2 pb-5 border-[#9bcb3b] "
            >
              <h3 className="text-2xl font-heading text-primary mb-4">
                Intellectual Clarity
              </h3>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                Students develop strong academic foundations while cultivating
                independent thinking, discernment and confidence in their ideas.
              </p>
            </motion.div>

            {/* Emotion */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 md:ml-auto md:pl-12 border-b-2 pb-5 border-[#9bcb3b]"
            >
              <h3 className="text-2xl font-heading text-primary mb-4">
                Emotional & Moral Depth
              </h3>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                Through the arts and community life, children develop empathy,
                aesthetic sensitivity and a strong moral compass.
              </p>
            </motion.div>

            {/* Will */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 md:pr-12 border-b-2 pb-5 border-[#9bcb3b]"
            >
              <h3 className="text-2xl font-heading text-primary mb-4">
                Initiative & Practical Skill
              </h3>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                Practical arts and hands-on experiences nurture resilience,
                responsibility and the confidence to act freely in the world.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <p className="text-xl font-heading text-primary leading-relaxed">
            Waldorf Education seeks to cultivate whole human beings - capable in
            thought, grounded in feeling and confident in action.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealWorldPreparation;
