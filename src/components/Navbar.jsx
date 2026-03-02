import React from "react";
import Logo from "../assets/School-logo.png";
import { Link } from "react-router-dom";
import svg from "../assets/dropdown-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'



const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  // mobile states 

const [mobileOpen, setMobileOpen] = useState(false);
const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md z-40 fixed top 0  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <Link to="/" className="cursor-none">
            <img src={Logo} alt="Inodai Logo" className="h-15 object-contain" />
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
            <span className="hover:text-primary-dark transition duration-150">
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
            to="/programs"
            className="hover:text-primary-dark transition duration-150"
          >
            Programs
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
            <span className=" flex  items-center  hover:text-primary-dark transition duration-150">
              Explore Waldorf
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
                    <span className="flex  items-center ">
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
            Contact
          </Link>
        </div>

        {/* RIGHT - ADMISSIONS BUTTON */}
        <div>
          <Link
            to="/admissions"
            className="md:block hidden bg-accent text-white px-5 py-3 rounded-md font-semibold hover:bg-primary-dark  duration-200 transition"
          >
            Admissions
          </Link>

          {/* hamburger menu for mobile phones */}
          <div className="md:hidden block">
            < Hamburger direction="right"  toggled={mobileOpen}
  toggle={setMobileOpen} />
          </div>
        </div>
      </div>

      <AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white px-6 py-6 space-y-4 shadow-lg"
    >
   <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
<Link to="/programs" onClick={() => setMobileOpen(false)}>Programs</Link>
<Link to="/events" onClick={() => setMobileOpen(false)}>Events</Link>

{/* About Us Accordion */}
<div>
  <button
    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
    className="w-full text-left font-semibold"
  >
    About Us
  </button>

  <AnimatePresence>
    {mobileAboutOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pl-4 mt-2 space-y-2 overflow-hidden"
      >
        <Link to="/about">About Page</Link>
        <Link to="/board">Board of Directors</Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>


{/* Explore Waldorf Accordion */}
<div>
  <button
    onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
    className="w-full text-left font-semibold"
  >
    Explore Waldorf
  </button>

  <AnimatePresence>
    {mobilePagesOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pl-4 mt-2 space-y-2 overflow-hidden"
      >
        <Link to="/waldorf-education">Waldorf Education</Link>
        <Link to="/waldorf-faq">Waldorf FAQs</Link>

        {/* Nested Programs */}
<div>
  <button
    onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
    className="w-full text-left"
  >
    Programs Offered
  </button>

  <AnimatePresence>
    {mobileProgramsOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="pl-4 mt-2 space-y-2 overflow-hidden"
      >
        <Link to="/playgroup">Playgroup</Link>
        <Link to="/kindergarten">Kindergarten</Link>
        <Link to="/daycare">Day Care</Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

<Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
<Link
  to="/admissions"
  onClick={() => setMobileOpen(false)}
  className="block mt-4 bg-accent text-white px-4 py-3 rounded-md text-center font-semibold"
>
  Admissions
</Link>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;
