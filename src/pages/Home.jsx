import React from 'react'
import Hero from '../components/home components/Hero'
import { div } from 'framer-motion/client'
import Education from '../components/home components/Education'
import WhyWaldorf from '../components/home components/WhyWaldorf'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='bg-page-bg '>
      <Hero />
      <Education />
      <WhyWaldorf />
      <Footer />
    </div>
  )
}

export default Home