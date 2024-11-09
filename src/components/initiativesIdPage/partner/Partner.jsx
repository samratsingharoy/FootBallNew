import React from "react";
import styles from "./Partner.module.css";
import { partnerData } from "../../../data/initiativesIdInfo";

const Partner = () => {
  return (
    <div className={styles.contentContainer}>
      {partnerData.map((val, i) => {
        return (
          <p className={styles.content} key={i}>
            {val}
          </p>
        );
      })}
    </div>
  );
};

export default Partner;
