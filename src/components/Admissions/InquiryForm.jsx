import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars } from 'react-loading-icons'

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const InquiryForm = ({ type }) => {
  //  state for storing the form data
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
    subject: "",
  });

  // or submit status

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  //  function for handling the changes
  const handleChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //  validate email
  const ValidateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // prevent reloading the page
  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setStatus({ type: "loading", message: "Submitting form..." });

    //  for delay
    await new Promise((resolve) => setTimeout(resolve, 1000));


    if (
      !formData.parentName ||
      !formData.email ||
      !formData.phone ||
      (type === "admission" && (!formData.studentName || !formData.program)) ||
      (type === "contact" && !formData.subject)
    ) {
      setStatus({ type: "error", message: "Please fill all required fields." });
      setLoading(false)
      return;
    }
    if (!ValidateEmail(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });

      setLoading(false)
      return;
    }

    try {
      const res = await fetch("https://inodai-school-website.onrender.com/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: type
        })
      })


      const data = await res.json();
      console.log("Backend respone", data)

      setStatus({ type: "success", message: "Inquiry submitted successfully!" });


      // reset form data

      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        program: "",
        message: "",
      });


    } catch (error) {
      console.log(error)
      setStatus({ type: "error", message: "something wents wrong, try submiting" })
    } finally {
      setLoading(false)
    }

    // message disappear after 3 seconds
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className=" py-10 bg-white px-6 relative"
    >
      <motion.h2
        variants={fadeUp}
        className="font-heading font-semibold text-3xl md:text-4xl text-primary text-center pb-7 md:pb-10"
      >
        {type === "admission" ? "Admission Inquiry" : "Contact Us"}
      </motion.h2>
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-10 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={slideLeft} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading text-primary leading-snug">
            {type === "admission"
              ? "Begin Your Child’s Beautiful Learning Journey"
              : "Get in Touch With Us"}
          </h2>

          <p className="text-gray-600 leading-relaxed font-body">
            {type === "admission"
              ? "At Inodai Waldorf School, we nurture imagination, creativity, and independent thinking through a holistic approach."
              : "We welcome your inquiries and look forward to assisting you. Please feel free to reach out for information about admissions, programs, or any other questions you may have."}
          </p>

          <p className="text-gray-600 leading-relaxed font-body">
            Our environment encourages curiosity, confidence, and joyful
            learning.
          </p>
        </motion.div>

        {/* right form */}
        <motion.div variants={slideRight}>
          <motion.form
            variants={container}
            className="grid  grid-cols-1 md:grid-cols-2 gap-6 "
            onSubmit={handleSubmit}
            action=""
          >
            {/* Student name */}
            {type === "admission" && (
              <motion.div variants={fadeUp} className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Student Name *
                </label>
                <input
                  className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9bcb3b]/50 transition"
                  type="text"
                  name="studentName"
                  placeholder="Student Name *"
                  onChange={handleChanges}
                  value={formData.studentName}
                />
              </motion.div>
            )}
            {/* parent name */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">
                Parent Name *
              </label>
              <input
                className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9bcb3b]/50 transition"
                type="text"
                name="parentName"
                placeholder="Parent Name *"
                onChange={handleChanges}
                value={formData.parentName}
              />
            </motion.div>

            {/* email  */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9bcb3b]/50 transition"
                type="email"
                name="email"
                placeholder="Email Address*"
                onChange={handleChanges}
                value={formData.email}
              />
            </motion.div>

            {/* phone  */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <label className="mb-2 text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9bcb3b]/50 transition"
                type="tel"
                name="phone"
                minLength={"10"}
                maxLength={"10"}
                placeholder="Phone Number *"
                onChange={handleChanges}
                value={formData.phone}
              />
            </motion.div>

            {type === "contact" && (
              <motion.div
                variants={fadeUp}
                className="flex flex-col md:col-span-1"
              >
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChanges}
                  className="border border-gray-300 py-3 px-4 rounded-lg"
                >
                  <option value="">Select subject *</option>
                  <option>General Inquiry</option>
                  <option>Admission Related</option>
                  <option>Fee Structure</option>
                  <option>Events</option>
                  <option>Other</option>
                </select>
              </motion.div>
            )}

            {/* program */}
            {type === "admission" && (
              <motion.div
                variants={fadeUp}
                className="flex flex-col  md:col-span-2"
              >
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Select program *
                </label>
                <select
                  className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 transition"
                  name="program"
                  id=""
                  value={formData.program}
                  onChange={handleChanges}
                >
                  <option value="">Select program *</option>
                  <option>Playgroup</option>
                  <option>Kindergarten</option>
                  <option>Grades</option>
                </select>
              </motion.div>
            )}

            <motion.div
              variants={fadeUp}
              className="flex flex-col md:col-span-2"
            >
              <label className="mb-2 text-sm font-medium text-gray-700">
                Additional Message (Optional)
              </label>
              <textarea
                className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-none focus:ring-1 resize-none focus:ring-[#9bcb3b]/50 transition"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChanges}
              />{" "}
            </motion.div>

            <motion.button

              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="md:col-span-2 bg-primary text-white py-3 rounded-lg 
               hover:opacity-90 transition font-medium flex justify-center items-center cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? <Bars className="h-6" /> : "Submit Inquiry"}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      {/* notification */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-30 right-6 z-50  p-4 rounded-lg text-center font-medium ${status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default InquiryForm;
