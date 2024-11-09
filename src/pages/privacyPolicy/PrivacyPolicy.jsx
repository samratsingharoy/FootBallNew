import React from "react";
import styles from "./PrivacyPolicy.module.css";
import Hero from "../../components/privacyPolicyPage/Hero";
import Donations from "../../components/donations/Donations";

const PrivacyPolicy = () => {
  return (
    <div className="paddingLeftRight">
      <Hero />
      <div className={styles.donationWrapper}>
        <Donations />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
