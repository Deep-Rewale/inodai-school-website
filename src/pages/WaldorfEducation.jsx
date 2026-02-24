import React from 'react'
import MinimalPhilosophicalHero from '../components/WaldorfEducation components/MinimalPhilosophicalHero'
import WholeChild from '../components/WaldorfEducation components/WholeChild'
import Development from '../components/WaldorfEducation components/FinalCTA'
import { StickyScrollRevealDemo } from '../components/WaldorfEducation components/StickyScrollRevealDemo'
import FinalCTA from '../components/WaldorfEducation components/FinalCTA'
import Footer from "../components/Footer"

const WaldorfEducation = () => {
  return (
    <div>
      <MinimalPhilosophicalHero />
      <WholeChild />
      <StickyScrollRevealDemo/>
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default WaldorfEducation