import React from "react";
import styles from "./ScoresTable.module.css";
import { matchData } from "../../../data/tournamentInfo";

const ScoresTable = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.column} ${styles.column1}`}>
        <div className={styles.headerContainer}>
          <p className={styles.tableHeader}>DATE</p>
        </div>

        {matchData.map((item, i) => {
          return (
            <div className={styles.contentContainer} key={i}>
              <p className={styles.matchDate}>{item.date}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.column}>
        <div className={styles.headerContainer}>
          <p className={styles.tableHeader}>TEAM 1</p>
        </div>

        {matchData.map((item, i) => {
          return (
            <div className={styles.contentContainer} key={i}>
              <p className={styles.content}>{item.team1}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.column}>
        <div className={styles.headerContainer}>
          <p className={styles.tableHeader}>SCORE</p>
        </div>

        {matchData.map((item, i) => {
          return (
            <div className={styles.contentContainer} key={i}>
              <p className={styles.content}>{item.score}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.column}>
        <div className={styles.headerContainer}>
          <p className={styles.tableHeader}>TEAM 2</p>
        </div>

        {matchData.map((item, i) => {
          return (
            <div className={styles.contentContainer} key={i}>
              <p className={styles.content}>{item.team2}</p>
            </div>
          );
        })}
      </div>

      <div className={`${styles.column} ${styles.column5}`}>
        <div className={styles.headerContainer}>
          <p className={styles.tableHeader}>PITCH</p>
        </div>

        {matchData.map((item, i) => {
          return (
            <div className={styles.contentContainer} key={i}>
              <p className={styles.content}>{item.pitch}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoresTable;
