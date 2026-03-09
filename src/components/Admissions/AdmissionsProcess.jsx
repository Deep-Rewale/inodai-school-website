import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const steps = [
  {
    title: "Orientation Programme",
    desc: "The school conducts Orientation Programmes for prospective parents starting in October every year. Attendance is mandatory before seeking admission.",
  },
  {
    title: "Collection of Admission Forms",
    desc: "Admission forms can be collected from the school office and must be submitted within one week. Admissions are granted on a first-come, first-served basis.",
  },
  {
    title: "Child Assessment",
    desc: "Kindergarten assessment is conducted over two days. Grade assessments are conducted over one week.",
  },
  {
    title: "Parent & Child Meeting",
    desc: "Both parents and the child attend a scheduled meeting with the school.",
  },
  {
    title: "Admission Confirmation",
    desc: "Upon successful completion, parents complete formalities and pay the one-time non-refundable admission fee.",
  },
];

const AdmissionsProcess = () => {
  return (
    <section className="py-13 md:py-14 bg-white px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold">
            Admission Process
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-[#9bcb3b] pl-10 space-y-10">
          {steps.map((step, index) => (
            <motion.div variants={fadeUp} key={index} className="relative">
              <span className="absolute -left-[21px] top-2 w-2 h-2 bg-primary rounded-full"></span>

              <h3 className="text-xl font-heading text-primary font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 font-body leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AdmissionsProcess;
