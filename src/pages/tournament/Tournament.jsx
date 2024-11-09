import React from "react";
import Hero from "../../components/tournamentPage/hero/Hero";
import SectionTwo from "../../components/tournamentPage/sectionTwo/SectionTwo";
import { motion } from "framer-motion";

const Tournament = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <SectionTwo />
    </div>
  );
};

export default Tournament;
