import React from "react";
import styles from "./MatchCentre.module.css";
import MatchCentreCard from "../matchCentreCard/MatchCentreCard";

const MatchCentre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <MatchCentreCard />
      </div>
    </div>
  );
};

export default MatchCentre;
