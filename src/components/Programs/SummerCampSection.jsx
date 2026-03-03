import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Movement",
      desc: "Engaging physical activities that promote energy, balance and coordination.",
      details:
        "Children build physical confidence through guided and playful movement sessions.",
      points: [
        "Yoga & rhythm exercises",
        "Outdoor obstacle activities",
        "Balance & coordination games",
      ],
    },
    {
      icon: <Gamepad2 className="w-10 h-10 text-primary" />,
      title: "Games",
      desc: "Fun group games that foster cooperation and joyful participation.",
      details:
        "Interactive experiences that strengthen teamwork and joyful engagement.",
      points: [
        "Team relay challenges",
        "Circle games",
        "Listening & response activities",
      ],
    },
    {
      icon: <Palette className="w-10 h-10 text-primary" />,
      title: "Artistic Activities",
      desc: "Creative expression through crafts, art and imaginative exploration.",
      details:
        "Art-based activities encourage imagination and hands-on creativity.",
      points: ["Painting & drawing", "Clay modeling", "Craft making"],
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Team Building",
      desc: "Collaborative experiences that build confidence and social connection.",
      details:
        "Children learn communication and leadership through group participation.",
      points: [
        "Group problem solving",
        "Cooperative challenges",
        "Leadership activities",
      ],
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#9BCB3B]/10 py-15 md:py-28 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto text-center space-y-12"
      >
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

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 pt-8 items-start">
          {items.map((item, index) => (
            <motion.div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="bg-white p-8 rounded-2xl shadow-md cursor-pointer transition-all h-fit"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>

              <h3 className="font-heading text-primary text-lg mb-3 font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base font-body">{item.desc}</p>

              {/* EXPAND AREA */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden mt-4 text-left bg-gray-100 py-2 px-5 rounded-2xl"
                  >
                    <p className="text-gray-600 text-sm font-body mb-3">
                      {item.details}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-700 font-body list-disc list-inside">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      className="inline-block mt-4 text-accent font-semibold text-sm hover:underline"
                    >
                      Learn More →
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
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
