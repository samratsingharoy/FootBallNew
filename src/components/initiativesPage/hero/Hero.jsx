import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pagenameContainer}>
        <h4 className={styles.pagename}>Initiatives</h4>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>Overview</h4>
        </div>

        <div className={styles.contentContainer}>
          <p className={styles.content}>
            West Bengal, known for its rich football heritage, continues to
            nurture and develop the sport through various grassroots initiatives
            and community programs. These initiatives aim to promote football
            across all age groups, with a focus on youth development, talent
            identification, and fostering a passion for the game at the local
            level. Partnering with local clubs, schools, and organizations, the
            programs offer training camps, leagues, and tournaments that help
            young players hone their skills and gain exposure to competitive
            football. The state's commitment to expanding football
            infrastructure and providing opportunities for all reflects its
            ongoing dedication to strengthening the sport and building a bright
            future for football in West Bengal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
