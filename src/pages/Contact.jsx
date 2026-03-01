import React from "react";
import ContactHero from "../components/ContactUs/ContactHero";
import InquiryForm from "../components/Admissions/InquiryForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <InquiryForm type="contact" />
      <Footer />
    </>
  );
};

export default Contact;
