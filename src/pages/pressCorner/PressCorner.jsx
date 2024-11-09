import React from "react";
import Hero from "../../components/pressPage/hero/Hero";
import PressCardsSection from "../../components/homePage/pressCardsSection/PressCardsSection";
import SectionTwo from "../../components/aboutPage/sectionTwo/SectionTwo";
import SectionThree from "../../components/pressPage/sectionThree/SectionThree";
import YTSection from "../../components/pressPage/ytSection/YTSection";

const PressCorner = () => {
  return (
    <div>
      <div className="paddingLeftRight">
        <Hero />
        <SectionTwo />
        <SectionThree />
      </div>
      <div className="paddingLeft">
        <YTSection />
      </div>
    </div>
  );
};

export default PressCorner;
