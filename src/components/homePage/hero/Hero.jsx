import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="./images/homepage/heroBg.jpeg"
          className={styles.bgImage}
          alt=""
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h5 className={styles.header}>Current Updates</h5>

          <p className={styles.content}>
            Details of current updates that needs to go on website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
