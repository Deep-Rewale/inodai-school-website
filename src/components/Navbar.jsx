import React from "react";
import Logo from "../assets/School-logo.png";
import { Link } from "react-router-dom";
import svg from "../assets/dropdown-arrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Turn as Hamburger, Rotate } from 'hamburger-react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";





const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  // mobile states 

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = "auto"; }
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileOpen]);

  return (
    <nav className="w-full bg-white shadow-md z-40 fixed top 0  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 cursor-pointer">
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
                About Us <img className={`h-5  transition ease-in delay-100 ${aboutOpen ? "rotate-180" : "rotate-0"}`} src={svg} alt="" />
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
              <img className={`h-5  transition ease-in delay-100 ${pagesOpen ? "rotate-180" : "rotate-0"}`} src={svg} alt="" />
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
                      Programs Offered <img className={`h-5  transition ease-in delay-100 ${programsOpen ? "rotate-180" : "rotate-0"}`} src={svg} alt="" />
                    </span>
                    <AnimatePresence>
                      {programsOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 pl-3 space-y-2 divide-y w-[80%] divide-[#9bcb3b]"
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
          <div className="md:hidden block relative z-50 text-primary">
            < Hamburger direction="right" toggled={mobileOpen}
              toggle={setMobileOpen} />
          </div>
        </div>
      </div>


      {/* mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-y-auto fixed top-0 pt-12 right-0 h-screen w-full bg-white font-body flex flex-col text-primary py-4 font-semibold   divide-y divide-gray-400  text-lg "
          >
            <Link className="py-3 px-7 " to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link className="py-3 px-7 " to="/programs" onClick={() => setMobileOpen(false)}>Programs</Link>
            <Link className="py-3 px-7 " to="/events" onClick={() => setMobileOpen(false)}>Events</Link>

            {/* About Us Accordion */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full text-left font-semibold flex justify-between py-3 px-7 divide- "
              >
                About Us  <span>{mobileAboutOpen ? <FaMinus /> : <FaPlus />}</span>
              </button>

              <AnimatePresence>
                {mobileAboutOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 flex flex-col divide-y divide-gray-400 text-[#3f3c77]/80  "
                  >
                    <Link onClick={() => setMobileOpen(false)} className="py-3 px-7 border-t pl-10 border-gray-400 " to="/about">About Page</Link>
                    <Link onClick={() => setMobileOpen(false)} className="py-3 px-7 pl-10  " to="/board">Board of Directors</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* Explore Waldorf Accordion */}
            <div>
              <button
                onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                className="w-full text-left font-semibold  flex justify-between  py-3 px-7"
              >
                Explore Waldorf <span>{mobilePagesOpen ? <FaMinus /> : <FaPlus />}</span>
              </button>

              <AnimatePresence>
                {mobilePagesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className=" overflow-hidden flex flex-col divide-y divide-gray-600  text-[#3f3c77]/80"
                  >
                    <Link onClick={() => setMobileOpen(false)} className="py-3 px-7  border-t border-gray-400" to="/waldorf-education">Waldorf Education</Link>
                    <Link onClick={() => setMobileOpen(false)} className="py-3 px-7 " to="/waldorf-faq">Waldorf FAQs</Link>

                    {/* Nested Programs */}
                    <div>
                      <button
                        onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                        className="w-full text-left flex justify-between py-3 px-7 text-primary"
                      >
                        Programs Offered <span>{mobileProgramsOpen ? <FaMinus /> : <FaPlus />}</span>
                      </button>

                      <AnimatePresence>
                        {mobileProgramsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="  overflow-hidden flex flex-col  divide-y divide-gray-400 "
                          >
                            <Link onClick={() => setMobileOpen(false)} className="py-3 px-7 " to="/playgroup">Playgroup</Link>
                            <Link onClick={() => setMobileOpen(false)} className="py-3 px-7 " to="/kindergarten">Kindergarten</Link>
                            <Link onClick={() => setMobileOpen(false)} className="py-3 px-7 " to="/daycare">Day Care</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link className="py-3 px-7" to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 bg-accent text-white px-4 py-3 mx-4 rounded-md text-center font-semibold"
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
