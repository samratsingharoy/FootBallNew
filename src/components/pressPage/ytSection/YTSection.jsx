import React from "react";
import styles from "./YTSection.module.css";
import YTSlider from "../ytSlider/YTSlider";

const YTSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>Our Top Videos from Youtube</h4>
      </div>

      <div className={styles.sliderContainer}>
        <YTSlider />
      </div>
    </div>
  );
};

export default YTSection;
