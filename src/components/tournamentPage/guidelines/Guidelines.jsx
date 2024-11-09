import React from "react";
import styles from "./Guidelines.module.css";
import { tournamentGuidelines } from "../../../data/tournamentInfo";

const Guidelines = () => {
  return (
    <div className={styles.container}>
      {tournamentGuidelines.map((item, i) => {
        return (
          <div className={styles.listWrapper}>
            <div className={styles.listHeaderContainer}>
              <h4 className={styles.listHeader}>{item.title}</h4>
            </div>

            <ul className={styles.listContainer}>
              {item.content.map((val, index) => {
                return (
                  <li className={styles.content} key={index}>
                    {val}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Guidelines;
