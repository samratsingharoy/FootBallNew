import React from "react";
import styles from "./Hero.module.css";
import TournamentCard from "../tournamentCard/TournamentCard";
import { Link } from "react-router-dom";

const tournaments = [
  "Corporate Football",
  "College Football",
  "Para Football",
  "School Football",
  "Sunday Football",
  "Club Football",
];
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tournamentsContainer}>
        {tournaments.map((val, i) => {
          return (
            <TournamentCard key={i} tournament={val} className={styles.card} />
          );
        })}
      </div>

      <div className={styles.singleTournamentContainer}>
        <div className={styles.singleLeft}>
          <div className={styles.headerContainer}>
            <h4 className={styles.header}>Corporate Ball Game</h4>
            <h4 className={styles.header}>Season 2</h4>
          </div>

          <div className={styles.modlogoContainer}>
            <img
              src="/images/cupImage.png"
              className={styles.tournamentLogo}
              alt=""
            />
          </div>

          <div className={styles.scheduleContainer}>
            <h4 className={styles.scheduleHeader}>
              SCHEDULE <span className={styles.colan}>:</span>
            </h4>

            <ul className={styles.scheduleList}>
              <li className={styles.item}>
                Venue: NKDA Football Stadium, New Town
              </li>
              <li className={styles.item}>
                Dates: June 28th, 29th, and 30th, 2024
              </li>
              <li className={styles.item}>Duration: Three consecutive days</li>
            </ul>
          </div>
          <Link to={"/team-register"}>
            <div className={styles.registratioContainer}>
              <p className={styles.registrationText}>Click to Register</p>
            </div>
          </Link>
        </div>

        <div className={styles.logoContainer}>
          <img
            src="/images/cupImage.png"
            className={styles.tournamentLogo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
