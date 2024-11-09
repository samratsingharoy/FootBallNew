import React from "react";
import Hero from "../../components/aboutPage/hero/Hero";
import SectionTwo from "../../components/aboutPage/sectionTwo/SectionTwo";
import ContactInfo from "../../components/aboutPage/contactInfo/ContactInfo";
import ContactForm from "../../components/aboutPage/contactForm/ContactForm";

const About = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <SectionTwo />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default About;
