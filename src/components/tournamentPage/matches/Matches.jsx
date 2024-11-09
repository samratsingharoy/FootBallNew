import React, { useState } from "react";
import styles from "./Matches.module.css";
import { matchData } from "../../../data/tournamentInfo";

const Matches = () => {
  const [selectedRound, setSelectedRound] = useState("2");
  const rounds = ["1", "2", "3", "4"];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.groupContainer}>
          <div className={styles.group}>
            <p className={styles.grouptext}>Group A</p>
          </div>

          <div className={styles.group}>
            <p className={styles.grouptext}>Group B</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.roundsContainer}>
          {rounds.map((item, i) => {
            return (
              <div
                className={styles.round}
                key={i}
                style={{
                  backgroundColor:
                    item === selectedRound
                      ? "var(--forms-selected-bg)"
                      : "#fff",
                }}
              >
                <p className={styles.roundtext}>{`Round ${item}`}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.pointsTableContainer}>
          <table className={styles.tournamentTable}>
            <thead className={styles.headContent}>
              <tr>
                <th className={styles.tableHeader}>DATE</th>
                <th className={styles.tableHeader}>TEAM 1</th>
                <th className={styles.tableHeader}>SCORE</th>
                <th className={styles.tableHeader}>TEAM 2</th>
                <th className={styles.tableHeader}>PITCH</th>
              </tr>
            </thead>
            <tbody className={styles.bodyContent}>
              {matchData.map((match, index) => (
                <tr key={index}>
                  <td className={styles.matchDate}>{match.matchDate}</td>
                  <td>{match.team1}</td>
                  <td>{match.score}</td>
                  <td>{match.team2}</td>
                  <td>{match.pitch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Matches;
