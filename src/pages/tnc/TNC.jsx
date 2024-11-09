import React from "react";
import Hero from "../../components/tncPage/Hero";
import Donations from "../../components/donations/Donations";
import styles from "./TNC.module.css";

const TNC = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <div className={styles.donationWrapper}>
        <Donations />
      </div>
    </div>
  );
};

export default TNC;
