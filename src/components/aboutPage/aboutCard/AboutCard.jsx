import React from "react";
import styles from "./AboutCard.module.css";

const AboutCard = ({ data, flexDirection }) => {
  const { image, header, content } = data;
  return (
    <div className={styles.container} style={{ flexDirection: flexDirection }}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.leftImage} alt="" />
      </div>

      <div className={styles.right}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>{header}</h4>
        </div>

        <div className={styles.contentContainer}>
          {content.map((val, i) => (
            <p key={i} className={styles.content}>
              {val}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
