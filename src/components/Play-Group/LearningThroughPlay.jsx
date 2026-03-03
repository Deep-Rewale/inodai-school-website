import React from "react";
import { motion } from "framer-motion";

const LearningThroughPlay = () => {
  return (
    <section className="py-28 bg-page-bg">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-heading text-primary">
            Learning Through Imitation & Play
          </h2>
          <p className="text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Young children learn primarily through imitation and imaginative
            play. Our teachers nurture creativity, focus and follow-through
            through storytelling, music, modelling of daily chores, outdoor play
            and artistic activities.
          </p>
        </div>

        {/* Gentle Flow Items */}
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            "Storytelling & Music",
            "Outdoor Exploration",
            "Artistic Activities",
            "Daily Rhythm & Routine",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <p className="font-body text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningThroughPlay;
