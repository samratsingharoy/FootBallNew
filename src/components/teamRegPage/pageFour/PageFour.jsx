import React from "react";
import styles from "./PageFour.module.css";

const PageFour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>Team details sent for approval </h4>
        </div>

        <div className={styles.tick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            fill="none"
          >
            <path
              d="M9.3335 27.9998L20.8829 39.5492L45.6337 14.8008"
              stroke="#05CD05"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className={styles.buttonContainer}>
          <h4 className={styles.adminBtn}>Go to Admin Panel</h4>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
