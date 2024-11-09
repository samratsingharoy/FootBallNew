import React from "react";
import styles from "./MatchCard.module.css";

const MatchCard = ({ match }) => {
  const {
    isLive,
    team1,
    team1Logo,
    team2,
    team2Logo,
    team1Score,
    team2Score,
    time,
  } = match;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {isLive && (
          <div className={styles.liveContainer}>
            <div className={styles.dot}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 6 7"
                fill="none"
              >
                <circle cx="3" cy="3.5" r="3" fill="#05CD05" />
              </svg>
            </div>

            <div className={styles.liveTextContainer}>
              <p className={styles.liveText}>Live</p>
            </div>
          </div>
        )}
        <div className={styles.minuteContainer}>
          <p className={styles.minutes}>55'</p>
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.teamContainer}>
            <div className={styles.teamLogoContainer}>
              <img src={team1Logo} className={styles.teamImage} alt="" />
            </div>
            <h5 className={styles.teamName}>{team1}</h5>
          </div>

          <div className={styles.scoresContainer}>
            <p className={styles.score}>{team1Score}</p>
            <p className={styles.score}>-</p>
            <p className={styles.score}>{team2Score}</p>
          </div>

          <div className={styles.teamContainer}>
            <div className={styles.teamLogoContainer}>
              <img src={team2Logo} className={styles.teamImage} alt="" />
            </div>
            <h5 className={styles.teamName}>{team2}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
