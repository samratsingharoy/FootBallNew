import React from "react";
import styles from "./PressCardsSection.module.css";

import PressBigCard from "../pressBigCard/PressBigCard";
import PressSmallCard from "../pressSmallCard/PressSmallCard";
const PressCardsSection = () => {
  const scaleValue = "1.1";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <PressBigCard />
      </div>
      <div className={styles.right}>
        <div className={styles.smallCard}>
          <PressSmallCard scaleValue={scaleValue} />
        </div>
        <div className={styles.smallCard}>
          <PressSmallCard scaleValue={scaleValue} />
        </div>
      </div>
    </div>
  );
};

export default PressCardsSection;
