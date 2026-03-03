import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ContactHero = () => {
  return (
    <section className="w-full bg-page-bg py-28 px-6 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div variants={fadeUp} className="space-y-8">
          <div>
            <p className="text-accent uppercase tracking-wider text-sm font-body">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-heading text-primary font-semibold mt-3">
              We’d Love to Hear From You
            </h2>
            <p className="text-gray-600 font-body mt-4 leading-relaxed max-w-lg">
              Whether you have a question about admissions, programs, events, or
              simply wish to visit our campus — we are here to help.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 font-body text-gray-700">
            <div>
              <h4 className="text-primary font-semibold text-lg mb-1">
                Our Location
              </h4>
              <p>
                Amba Shanti Chambers, Marol Church Rd, Bori Colony, Vijay Nagar
                Colony West, Marol, Andheri East, Mumbai 400059.
              </p>
            </div>

            <div>
              <h4 className="text-primary font-semibold text-lg mb-1">
                Phone Number
              </h4>
              <p>+91 98198 55336</p>
            </div>

            <div>
              <h4 className="text-primary font-semibold text-lg mb-1">
                E-mail Address
              </h4>
              <p>contactus@inodai.com</p>
            </div>

            {/* Direction Button */}
            <a
              href="https://maps.app.goo.gl/N3QRTMPU7F4mFuwZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Inodai Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.935376373297!2d72.87164897595865!3d19.110490750887458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90042b4ddb7%3A0x4b2c553d761f94bf!2sAmba%20Shanti%20Chambers!5e0!3m2!1sen!2sus!4v1772380759692!5m2!1sen!2sus"
            className="w-full h-[450px] border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
