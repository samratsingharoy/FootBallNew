import React from "react";
import styles from "./CommonHeroComp.module.css";

const CommonHeroComp = ({ pageName, header, content, bgImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.pageNameContainer}>
        <h4 className={styles.pageName}>{pageName}</h4>
      </div>
      <div className={styles.bottomContentWrapper}>
        <div className={styles.imageContainer}>
          <img className={styles.topImage} src={bgImage} alt="Image" />
        </div>

        <div className={styles.articleContainer}>
          <div className={styles.articleWrapper}>
            <div className={styles.headerContainer}>
              <h4 className={styles.header}>{header}</h4>
            </div>

            <div className={styles.contentContainer}>
              {content.map((val, i) => {
                return (
                  <p className={styles.content} key={i}>
                    {val}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonHeroComp;
