import React from "react";
import Hero from "../../components/initiativesPage/hero/Hero";
import SectionTwo from "../../components/initiativesPage/sectionTwo/SectionTwo";
import styles from "./Initiatives.module.css";
import Donations from "../../components/donations/Donations";
const Initiatives = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <SectionTwo />
      <div className={styles.donationWrapper}>
        <Donations />
      </div>
    </div>
  );
};

export default Initiatives;
