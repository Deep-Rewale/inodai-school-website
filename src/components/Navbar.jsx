import React from "react";
import Logo from "../assets/School-logo.png";
import { Link } from "react-router-dom";
import svg from "../assets/dropdown-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md z-50 fixed top 0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="Inodai Logo" className="h-13 object-contain" />
          </Link>
        </div>

        {/* CENTER - NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-primary font-semibold font-body">
          <Link
            to="/"
            className="hover:text-primary-dark transition duration-150"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            className="relative group z-50"
          >
            <span className="cursor-pointer hover:text-primary-dark transition duration-150">
              <Link className="flex items-center" to="/about">
                About Us <img className="h-5" src={svg} alt="" />
              </Link>
            </span>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full  hidden group-hover:block bg-white shadow-lg rounded-md p-3 w-48"
                >
                  <Link
                    to="/board"
                    className="block py-2 hover:text-primary-dark transition duration-150"
                  >
                    Board of Directors
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/courses"
            className="hover:text-primary-dark transition duration-150"
          >
            Courses
          </Link>

          <Link
            to="/events"
            className="hover:text-primary-dark transition duration-150"
          >
            Events
          </Link>

          {/* Pages Dropdown */}
          <div
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => {
              setPagesOpen(false);
              setProgramsOpen(false);
            }}
            className="relative group z-50"
          >
            <span className=" flex  items-center cursor-pointer hover:text-primary-dark transition duration-150">
              Pages
              <img className="h-5" src={svg} alt="" />
            </span>

            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md p-3 w-56 space-y-2 divide-y divide-[#9bcb3b]"
                >
                  <Link
                    to="/waldorf-education"
                    className="block hover:text-primary-dark  transition duration-150"
                  >
                    Waldorf Education
                  </Link>

                  <Link
                    to="/waldorf-faq"
                    className="block hover:text-primary-dark transition duration-150"
                  >
                    Waldorf FAQs
                  </Link>

                  {/* Nested Programs */}
                  <div
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                    className="relative group/program"
                  >
                    <span className="flex  items-center cursor-pointer">
                      Programs Offered <img className="h-5" src={svg} alt="" />
                    </span>
                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute left-full top-0 hidden group-hover/program:block bg-white shadow-lg rounded-md p-3 w-44 space-y-2 divide-y divide-[#9bcb3b]"
                        >
                          <Link
                            to="/playgroup"
                            className="block hover:text-primary-dark transition duration-150"
                          >
                            Playgroup
                          </Link>
                          <Link
                            to="/kindergarten"
                            className="block hover:text-primary-dark transition duration-150"
                          >
                            Kindergarten
                          </Link>
                          <Link
                            to="/daycare"
                            className="block hover:text-primary-dark transition duration-150"
                          >
                            Day Care
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/contact"
            className="hover:text-primary-dark duration-150 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT - ADMISSIONS BUTTON */}
        <div>
          <Link
            to="/login"
            className="bg-accent text-white px-5 py-3 rounded-md font-semibold hover:bg-primary-dark  duration-200 transition"
          >
            Admissions
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
