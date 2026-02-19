import React from "react";
import { motion } from "framer-motion";

const SupportUs = () => {
  return (
    <section className="py-24 ">
      <div className="grid grid-cols-2 mx-auto max-w-7xl p-8 items-start gap-16">
        {/* left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-heading font-semibold text-primary mb-6">
            {" "}
            Support Us
          </h2>
          <p className="text-gray-700 font-body leading-relaxed mb-6">
            Inodai Waldorf School is a non-profit organization operating under
            the rules of a Section 8 Company. We believe in providing education
            on a no-profit basis, ensuring accessibility and integrity in
            holistic learning.
          </p>
          <p className="text-gray-700 leading-relaxed font-body">
            To strengthen and expand the Waldorf movement, we invite like-minded
            individuals and institutions to support our mission and contribute
            towards the continued growth of our educational initiatives.
          </p>
        </motion.div>

        {/* right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-100 "
        >
          <h3 className="text-xl font-semibold text-primary mb-6">
            {" "}
            Bank Details
          </h3>

          <div className="text-gray-700 font-body space-y-5">
            <div>
              <p className="font-semibold">Account Name</p>
              <p>TRAIBHAAVYA VIDYA FOUNDATION</p>
            </div>

            <div>
              <p className="font-semibold">Account Type</p>
              <p>Current Account</p>
            </div>

            <div>
              <p className="font-semibold">Account Number</p>
              <p>001105031482</p>
            </div>

            <div>
              <p className="font-semibold">Bank Name</p>
              <p>ICICI Bank, Andheri West Branch</p>
            </div>

            <div>
              <p className="font-semibold">IFSC Code</p>
              <p>ICIC0000011</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportUs;
