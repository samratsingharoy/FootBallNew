import React, { useState } from "react";
import styles from "./MatchesMod.module.css";
import { matchData } from "../../../data/tournamentInfo";
import ScoresTable from "../scoresTable/ScoresTable";

const MatchesMod = () => {
  const [selectedRound, setSelectedRound] = useState("2");
  const rounds = ["1", "2", "3", "4"];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
                  <p
                    className={styles.roundtext}
                    style={{
                      color: item === selectedRound ? "#fff" : "black",
                    }}
                  >{`Round ${item}`}</p>
                </div>
              );
            })}
          </div>

          <div className={styles.pointsTableContainer}>
            <ScoresTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesMod;
