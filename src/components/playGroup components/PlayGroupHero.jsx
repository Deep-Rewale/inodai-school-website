import { motion } from "framer-motion";
import playGroup1 from "../../assets/playGroup/playGroup1.avif";
import React from "react";

const PlayGroupHero = () => {
  return (
    // full section
    <section className="min-h-screen bg-page-bg flex items-center">
      {/* main container */}
      <div className="grid md:grid-cols-2 grid-cols-1 items-center max-w-7xl mx-auto gap-16 p-6">
        {/* left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-accent font-body uppercase tracking-wider text-base">
            {" "}
            Early Years Program
          </p>
          <h1 className="text-primary font-heading font-semibold md:text-4xl text-3xl">
            Playgroup (2-3 Years)
          </h1>
          <p className="text-gray-600 font-body leading-relaxed text-lg">
            {" "}
            Our Playgroup Program serves as a gentle extension of the child’s
            home a warm and nurturing first step before formal schooling begins.
            Designed for children aged 2–3 years, this stage honors the natural
            rhythm of early childhood, where learning unfolds through imitation,
            play and meaningful relationships.{" "}
          </p>
          <p className="text-gray-600 font-body leading-relaxed text-lg">
            {" "}
            In a secure and loving environment, children gradually grow
            comfortable being away from home while building trust, confidence
            and independence. Through storytelling, music, movement, artistic
            activities and outdoor play, we nurture imagination, curiosity and a
            joyful connection to the world around them.{" "}
          </p>
        </motion.div>
        {/* right image */}
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover rounded-2xl shadow-xl"
            src={playGroup1}
            alt="kids image"
          />
        </div>
      </div>
    </section>
  );
};

export default PlayGroupHero;
