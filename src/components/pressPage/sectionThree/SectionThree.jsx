import React from "react";
import styles from "./SectionThree.module.css";
import PressSmallCard from "../../homePage/pressSmallCard/PressSmallCard";
import NewsCard from "../newsCard/NewsCard";

const SectionThree = () => {
  const scaleValue = "1.06";
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.newsContainer}>
          <NewsCard />
        </div>

        <div className={styles.leftSmallCardContainer}>
          <PressSmallCard scaleValue={scaleValue} />
          <PressSmallCard scaleValue={scaleValue} />
        </div>
      </div>

      <div className={styles.right}>
        <PressSmallCard scaleValue={scaleValue} />
        <PressSmallCard scaleValue={scaleValue} />
      </div>
    </div>
  );
};

export default SectionThree;
