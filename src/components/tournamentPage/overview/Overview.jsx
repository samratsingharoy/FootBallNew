import React from "react";
import styles from "./Overview.module.css";
const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topParaContainer}>
        <p className={styles.content}>
          A premier football tournament you wouldn't want to miss! This document
          serves as your comprehensive guide to participation, covering
          everything from eligibility requirements to match rules and awards. We
          encourage you to review it carefully to ensure a smooth and enjoyable
          experience throughout the tournament. Should you have any questions or
          require further clarification, please do not hesitate to reach out to
          us. Best of luck to all participating teams!
        </p>
      </div>

      <div className={styles.eligContainer}>
        <div className={styles.listHeaderContainer}>
          <h4 className={styles.listHeader}>ELIGIBILITY</h4>
        </div>

        <ul className={styles.listContainer}>
          <li className={styles.content}>
            Private and public business houses, corporations, state and central
            government departments, professional firms, and other bona fide
            businesses are eligible to participate in this tournament.
          </li>

          <li className={styles.content}>
            Only full-time employees of the above-mentioned types of companies
            are eligible to play
          </li>

          <li className={styles.content}>
            Only registered players are permitted to participate.
          </li>

          <li className={styles.content}>
            Changes to the registered squad are allowed up to two days prior to
            the match day.
          </li>

          <li className={styles.content}>
            Players must submit a copy of their company IDs during registration
            and carry the original ID on match days.
          </li>

          <li className={styles.content}>
            The organizer reserves the right to reject entries in case of any
            discrepancies or disputes during the registration process.
          </li>
        </ul>
      </div>

      <div className={styles.capContainer}>
        <div className={styles.listHeaderContainer}>
          <h4 className={styles.listHeader}>
            CAPTAINS' MEET: (Time and Venue- TBD)
          </h4>
        </div>

        <ul className={styles.listContainer}>
          <li className={styles.content}>
            Captains' meet will take place 2-4 days prior to tournament start
            date.
          </li>

          <li className={styles.content}>
            Tournament jersey, shorts and stockings will be distributed.
          </li>

          <li className={styles.content}>
            Tournament trophies would be unveiled.
          </li>

          <li className={styles.content}>
            Tournament draw would take place in the presence of tournament
            ambassador.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
