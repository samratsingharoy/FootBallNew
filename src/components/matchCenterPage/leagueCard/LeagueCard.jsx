import React from "react";
import styles from "./LeagueCard.module.css";
import MatchCard from "../matchCard/MatchCard";

const LeagueCard = ({ leagueData }) => {
  const { league, logo, matches } = leagueData;
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.leagueLogoContainer}>
          <img src={logo} className={styles.leagueLogo} alt="" />
        </div>

        <h4 className={styles.leagueName}>{league}</h4>
      </div>

      <div className={styles.matchCardWrapper}>
        <div className={styles.matchCardContainer}>
          {matches.map((val, index) => (
            <MatchCard match={val} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeagueCard;
