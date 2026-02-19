import { motion } from "framer-motion";
import React from "react";
import OurTeachersImg from "../../assets/About us/Our teachers img/our-teachers.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const OurTeachers = () => {
  return (
    <section className=" bg-white h-screen  pt-22 ">
      {/* main container */}
      <div className="max-w-7xl grid grid-cols-2 items-center py-24 mx-auto gap-15">
        {/* left image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            className="w-full rounded-2xl shadow-lg object-cover hover:shadow-xl"
            src={OurTeachersImg}
            alt="teachers img"
          />
        </motion.div>
        {/* right content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="text-4xl font-heading text-primary font-semibold mb-3"
          >
            Our Teachers
          </motion.h2>
          <motion.p
            variants={item}
            className="font-body text-gray-700 leading-7 mb-6"
          >
            {" "}
            Teachers in Waldorf schools are dedicated to generating an inner
            enthusiasm for learning within every child. Inner work and
            self-development are integral to a Waldorf teacher’s daily rhythm.
          </motion.p>

          {/* structure sub section */}
          <motion.div variants={item} className="space-y-6">
            <div>
              <h4 className="font-semibold text-primary mb-2"> Kindergarten</h4>
              <p className="text-gray-600 leading-7">
                {" "}
                The Kindergarten is an extension of home. The teacher serves as
                a nurturing role model, whose actions are worthy of imitation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2">
                Grades I – VII
              </h4>
              <p className="text-gray-600 leading-7">
                {" "}
                In the grade classes, the teacher becomes a loving authority,
                guiding children with compassion and clarity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-2"> High School</h4>
              <p className="text-gray-600 leading-7">
                {" "}
                In high school, teachers nurture independent thinking, intuition
                and intellectual growth, preparing students for higher
                education.
              </p>
            </div>
          </motion.div>
          {/* Credibility Line */}
          <motion.p
            variants={item}
            className="mt-8 text-gray-700 font-semibold"
          >
            {" "}
            Our teaching staff boasts exceptional qualifications and extensive
            experience in Waldorf pedagogy.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeachers;
