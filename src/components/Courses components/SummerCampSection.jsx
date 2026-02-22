import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Gamepad2, Palette, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SummerCampSection = () => {
  return (
    <section className="w-full bg-[#9BCB3B]/10 py-28 px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Small Label */}
        <motion.p
          variants={fadeUp}
          className="text-accent text-sm uppercase tracking-wider font-body"
        >
          Seasonal Enrichment
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-heading text-primary font-semibold"
        >
          Summer Camp at Inodai
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed font-body"
        >
          The Outreach wing of the school organizes an exciting Summer Camp
          every year, offering a blend of movement, games, artistic expression
          and team-building activities in a vibrant and safe environment.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
        >
          {[
            {
              icon: <Sparkles className="w-10 h-10 text-primary" />,
              title: "Movement",
              desc: "Engaging physical activities that promote energy, balance and coordination.",
            },
            {
              icon: <Gamepad2 className="w-10 h-10 text-primary" />,
              title: "Games",
              desc: "Fun group games that foster cooperation and joyful participation.",
            },
            {
              icon: <Palette className="w-10 h-10 text-primary" />,
              title: "Artistic Activities",
              desc: "Creative expression through crafts, art and imaginative exploration.",
            },
            {
              icon: <Users className="w-10 h-10 text-primary" />,
              title: "Team Building",
              desc: "Collaborative experiences that build confidence and social connection.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-11 rounded-2xl shadow-md "
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-heading text-primary text-lg mb-3 font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm font-body">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Line */}
        <motion.p
          variants={fadeUp}
          className="text-gray-700 font-body text-lg pt-10"
        >
          Open to students of various age groups in a safe and nurturing
          setting.
        </motion.p>

        {/* Announcement */}
        <motion.p variants={fadeUp} className="text-primary font-semibold">
          The details of the next summer camp will be announced soon.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SummerCampSection;
