import React from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../assets/School-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import FooterLogo from "../assets/Footer/footer-log.png"



const Footer = () => {
  return (
    <footer className="bg-primary px-0 lg:px-16 py-8 overflow-x-hidden">
      <div className="max-w-7xl  grid divide-y  divide-gray-400 lg:divide-none lg:grid-cols-4 text-white mx-auto gap-4 lg:gap-12">
        {/* column 1 */}
        <div className="column1 space-y-3 max-lg:px-7 pb-5 lg:pb-0">
          <img className="w-20 rounded-lg" src={schoolLogo} alt="School logo" />
          <h3 className="font-semibold text-xl font-heading">
            Inodai Waldorf School
          </h3>
          <p className="font-body text-sm  leading-relaxed">
            {" "}
            Nurturing creativity, imagination and confidence through holistic
            Waldorf education.
          </p>
        </div>

        {/* column 2 */}
        <div className="column2 space-y-2 max-lg:px-7  pb-5 lg:pb-0">
          <h4 className="font-semibold text-xl font-heading ">Quick Links</h4>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              <Link to="/" className="hover:text-accent transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-accent transition">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-accent transition">
                Events
              </Link>
            </li>
          </ul>
        </div>

        {/* column 3 */}
        <div className="column3 space-y-2 max-lg:px-7  pb-5 lg:pb-0">
          <h4 className="font-semibold text-xl font-heading ">Programs</h4>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              <Link to="/playgroup" className="hover:text-accent transition">
                Playgroup
              </Link>
            </li>
            <li>
              <Link to="/kindergarten" className="hover:text-accent transition">
                Kindergarten
              </Link>
            </li>
            <li>
              <Link to="/daycare" className="hover:text-accent transition">
                Day Care
              </Link>
            </li>
          </ul>
        </div>
        {/* column 4 */}
        <div className="column4 space-y-2 max-lg:px-7">
          <h4 className="font-semibold text-xl font-heading ">Contact</h4>
          <p className="text-sm leading-relaxed font-body  text-gray-200">
            Amba Shanti Chambers, Marol Church Rd,
            <br />
            Bori Colony, Vijay Nagar Colony West, Marol,
            <br />
            Andheri East, Mumbai 400 059. <br />
            +91 98198 55336 <br />
            Enquiries : contactus@inodai.com <br />
            Admissions : admissions@inodai.com  </p>
        </div>
      </div>
      <div className="max-md:flex-col max-md:space-y-2  border-t border-white/20 mt-12 pt-3 text-center text-sm text-gray-300 flex justify-around">
       <p>©{new Date().getFullYear()} Inodai Waldorf School. All rights reserved.</p> 
       <p className="capitalize">Developed and designed by <a href="https://tekunik.in/" target="_blank" className="font-bold">tekunik</a></p>
       <div className="quick-links flex gap-3 items-center max-md:flex-col">
        <a href="https://www.inodai.com/wall.html" target="_blank"><img className="w-40" src={FooterLogo} alt="footer logo"/></a>
        <div className="flex gap-3"><a href="https://www.facebook.com/InodaiWaldorf" target="_blank"><FaFacebook size={25} /></a>
        <a href="https://www.instagram.com/inodai_waldorf_school?igsh=MTN5eHIwMDhjM3lnNA==" target="_blank"><FaInstagram size={25} /></a>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
