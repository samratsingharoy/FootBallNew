import React from "react";
import styles from "./TournamentCard.module.css";

const TournamentCard = ({ tournament }) => {
  return (
    <div className={styles.container}>
      <div className={styles.accContainer}>
        <div className={styles.headerCotainer}>
          <p className={styles.accHeader}>{tournament}</p>
          <div className={styles.downArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 10L12 14L8 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className={styles.list}>
          <ul className={styles.listContainer}>
            <li className={styles.item}>U-19</li>
            <li className={styles.item}>U-17</li>
            <li className={styles.item}>U-12</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
