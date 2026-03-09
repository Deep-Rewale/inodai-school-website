import { motion } from "framer-motion";
import React from "react";

const content = [
  {
    title: "Early Childhood (Preschool & Kindergarten)",
    subTtitle:
      " Children learn primarily through imitation and imagination, developing wonder, creativity and reverence for life.",
    points: [
      "Storytelling & puppetry",
      "Creative play",
      "Singing & eurythmy",
      "Painting & beeswax modeling",
      "Baking & nature walks",
      "Festival celebrations",
    ],
    bg: "bg-[#F3EFE8]",
  },
  {
    title: " Elementary & Middle School",
    subTtitle:
      " Guided by a dedicated class teacher, students explore academic, arts and practical skills in an integrated and meaningful way.",
    points: [
      " Literature, myths & legends",
      " Chronological world history",
      "Geography & natural sciences",
      "Arithmetic, algebra & geometry",
      "Foreign languages & gardening",
      "Music, drama & handwork",
    ],
    bg: "bg-[#E8E6F8]",
  },
  {
    title: "High School",
    subTtitle:
      "Students develop as scholars, artists and responsible community members while preparing for higher education and life beyond school.",
    points: [
      " Integrated humanities",
      "Physics, chemistry & biology",
      " College preparatory mathematics",
      "Arts & crafts (pottery, weaving, bookbinding)",
      "Orchestra, choir & drama",
      "Physical education",
    ],
    bg: "bg-[#DDEBCF]",
  },
];
const WaldorfCurriculum = () => {
  return (
    <section className="py-13 md:py-14 bg-page-bg">
      <div className="max-w-7xl mx-auto p-6">
        {/* header */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-8">
          <p className="font-body text-accent  uppercase tracking-wider text-sm">
            {" "}
            Waldorf Curriculum
          </p>
          <h2 className="font-heading text-primary text-2xl md:text-3xl font-semibold">
            A Developmentally Aligned Approach
          </h2>
          <p className="font-body text-gray-600">
            The Waldorf curriculum evolves with the growing child, addressing
            each stage of development with intention, balance and care.
          </p>
        </div>
        {/* box section  */}
        {content.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            key={index}
            className={`rounded-3xl shadow-lg p-7 md:p-10 mb-8 ${item.bg}`}
          >
            <h3 className="text-primary font-heading text-2xl font-semibold mb-6">
              {item.title}
            </h3>
            <p className="text-gray-700 font-body leading-relaxed mb-6">
              {item.subTtitle}
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 font-body">
              {item.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WaldorfCurriculum;
