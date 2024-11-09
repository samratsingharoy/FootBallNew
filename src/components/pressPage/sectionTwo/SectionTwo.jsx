import React from "react";
import styles from "./SectionTwo.module.css";
import PressCardsSection from "../../homePage/pressCardsSection/PressCardsSection";

const SectionTwo = () => {
  return (
    <div className={styles.container}>
      <PressCardsSection />
      <PressCardsSection />
    </div>
  );
};

export default SectionTwo;
