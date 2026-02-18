import { section } from "framer-motion/client";
import React from "react";
import whywe from "../../assets/whywe/whywe.jpg";

const WhyWaldorf = () => {
  return (
    <section className="py-24 ">
      <div className="ful-container max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* left img */}
        <div className="left-content  max-w-xl ">
          <img
            className="shadow-2xl rounded-2xl w-full"
            src={whywe}
            alt="student studing"
          />
        </div>
        {/* right content */}
        <div className="right-content">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6 leading-tight">
            Why Waldorf?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl font-body ">
            {" "}
            Waldorf Education is the fastest growing independent school
            movement...
          </p>
          <ul className="space-y-3 text-gray-700 mt-6 font-body">
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span> Education of
              Head, Heart & Hands
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span> Balanced Artistic
              & Academic Learning
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent font-bold">✓</span> Development of
              Truth, Beauty & Goodness
            </li>
          </ul>
          {/* button */}
          <button className="bg-accent text-white px-5 py-3 rounded-md font-semibold hover:bg-primary-dark  duration-200 transition mt-6 hover:-translate-y-1 hover:shadow-md cursor-pointer">
            Discover Our Philosophy
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyWaldorf;
