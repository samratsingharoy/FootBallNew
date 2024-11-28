import React from "react";
import Hero from "../../components/tournamentPage/hero/Hero";
import { motion } from "framer-motion";
import SectionTwo from "../../components/tournamentPage/sectionTwo/SectionTwo";

const Tournament = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <SectionTwo />
    </div>
  );
};

export default Tournament;
