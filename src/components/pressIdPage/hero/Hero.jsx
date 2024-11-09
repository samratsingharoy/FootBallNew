import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.topImage}
          src="/images/pressidpage/idbgimage.jpeg"
          alt=""
        />
      </div>

      <div className={styles.articleContainer}>
        <div className={styles.articleWrapper}>
          <div className={styles.top}>
            <p className={styles.topText}>
              Analysis <span className={styles.dot}>.</span> WC qualifiers
            </p>
          </div>

          <div className={styles.titelContainer}>
            <h4 className={styles.title}>
              Chettri shines again against Cambodia
            </h4>
          </div>

          <div className={styles.authorContainer}>
            <p className={styles.author}>Joy Banerjee | 9 Jul 2022</p>
          </div>

          <div className={styles.subHeaderContainer}>
            <p className={styles.subHeader}>
              Sunil Chettri scores a brace against Cambodia as he lead India to
              a Convincing 4-0 Victory
            </p>
          </div>

          <div className={styles.contentContainer}>
            <p className={styles.content}>
              On July 9, 2022, a meeting was held at the IFA office with the
              teams from Premier Division A group. Joy Banerjee, a notable
              figure, was present at the event. The meeting focused on
              discussing important matters related to the upcoming football
              season, addressing concerns of the participating teams, and
              ensuring that the competition runs smoothly. This gathering served
              as an opportunity for team representatives to voice their
              opinions, strategize, and align with the IFA's guidelines and
              objectives for the league.
            </p>
            <p className={styles.content}>
              The session, led by Joy Banerjee, centered on discussions about
              the upcoming football season, covering key issues and concerns
              raised by the participating teams. The gathering provided a
              platform for team officials to engage in productive dialogue,
              align their strategies with the league's guidelines, and ensure
              the smooth execution of the competition. This meeting was pivotal
              in fostering collaboration and setting the tone for a successful
              season ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
