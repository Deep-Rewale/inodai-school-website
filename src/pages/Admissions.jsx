import React from 'react'
import AdmissionsHero from '../components/Admissions/AdmissionsHero';
import AdmissionsProcess from '../components/Admissions/AdmissionsProcess';
import Assessment from '../components/Admissions/Assessment';
import InquiryForm from '../components/Admissions/InquiryForm';
import Footer from "../components/Footer"

const Admissions = () => {
  return (
   <>
   <AdmissionsHero />
   <AdmissionsProcess />
   <Assessment />
   <InquiryForm type="admission" />
   <Footer />
   </>
  )
}

export default Admissions;