import { motion } from "framer-motion";
import React from "react";

const WhatIsWaldorf = () => {
  return (
    <section className="py-13 md:py-14 mx-auto max-w-6xl p-6 ">
      {/* main div */}
      <div className="main-container grid md:grid-cols-3 grid-cols-1 items-start gap-12">
        {/* left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-1"
        >
          <div className="border-l-4  border-[#9bcb3b] pl-6">
            <h2 className="text-primary font-heading lg:text-4xl text-3xl font-semibold">
              What is Waldorf Education?
            </h2>
          </div>
        </motion.div>
        {/* right text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 text-gray-600 leading-relaxed text-lg space-y-5"
        >
          <p>
            {" "}
            Developed by Rudolf Steiner in 1919, Waldorf Education is based on a
            developmental approach that addresses the needs of the growing child
            and maturing adolescent.
          </p>
          <p>
            {" "}
            Waldorf teachers strive to transform education into an art -
            educating the whole child: the head, the heart and the hands.
            Learning extends beyond intellectual achievement to nurture
            imagination, creativity, emotional intelligence and practical
            capability.
          </p>
          <p>
            Through this balanced and developmentally appropriate approach,
            children grow into confident, compassionate and capable individuals
            prepared to meet life with clarity and purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsWaldorf;
