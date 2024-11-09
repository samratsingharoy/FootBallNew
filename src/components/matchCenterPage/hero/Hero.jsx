import React from "react";
import styles from "./Hero.module.css";
import LeagueCard from "../leagueCard/LeagueCard";
import { LeaguesAndMatches } from "../../../data/matchcenterInfo";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>Match Center</h4>
      </div>

      <div className={styles.leagueContainer}>
        {LeaguesAndMatches.map((leagueData, i) => {
          return <LeagueCard key={i} leagueData={leagueData} />;
        })}
      </div>
    </div>
  );
};

export default Hero;
