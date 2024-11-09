import React from "react";
import Hero from "../../components/homePage/hero/Hero";
import TournamentsSection from "../../components/homePage/tournamentsSection/TournamentsSection";
import MatchCentre from "../../components/homePage/matchCentre/MatchCentre";
import PressCorner from "../../components/homePage/pressCorner/PressCorner";
import SocialSection from "../../components/homePage/socialSection/SocialSection";
import Initiatives from "../../components/homePage/initiatives/Initiatives";

const Home = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <TournamentsSection />
      <MatchCentre />
      <PressCorner />
      <SocialSection />
      <Initiatives />
    </div>
  );
};

export default Home;
