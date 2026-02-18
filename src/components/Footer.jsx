import React from 'react'
import { Link } from "react-router-dom";
import schoolLogo from "../assets/School-logo.png"

const Footer = () => {
  return (
    <footer className='bg-primary px-16 py-10'>
     <div className='max-w-7xl  grid grid-cols-4 text-white mx-auto gap-12'>
       {/* column 1 */}
       <div className="column1 space-y-3">
        <img className='w-20 rounded-lg' src={schoolLogo} alt="School logo" />
        <h3 className='font-semibold text-xl font-heading'>Inodai Waldorf School</h3>
        <p className='font-body'> Nurturing creativity, imagination and confidence
            through holistic Waldorf education.</p>
       </div>

        {/* column 2 */}
       <div className="column2 space-y-2">
         <h4 className='font-semibold text-xl font-heading '>Quick Links</h4>  
        <ul className='space-y-2'>
          <li><Link to="/" className="hover:text-accent transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/courses" className="hover:text-accent transition">Courses</Link></li>
            <li><Link to="/events" className="hover:text-accent transition">Events</Link></li>
        </ul>
       </div>

       {/* column 3 */}
       <div className="column3 space-y-2">
          <h4 className='font-semibold text-xl font-heading '>Programs</h4>
          <ul className='space-y-2'>
            <li><Link to="/playgroup" className="hover:text-accent transition">Playgroup</Link></li>
            <li><Link to="/kindergarten" className="hover:text-accent transition">Kindergarten</Link></li>
            <li><Link to="/daycare" className="hover:text-accent transition">Day Care</Link></li>
          </ul>
       </div>
       {/* column 4 */}
         <div className="column4 space-y-2">
            <h4 className='font-semibold text-xl font-heading '>Contact</h4> 
            <p className='text-sm leading-relaxed text-gray-200'>
              Amba Shanti Chambers, Marol Church Rd,<br />
              Bori Colony, Vijay Nagar Colony West, Marol,<br />
              Andheri East, Mumbai 400 059. <br />
              +91 98198 55336 <br />
              contactus@inodai.com
            </p>
         </div>
     </div>
    </footer>
  )
}

export default Footer