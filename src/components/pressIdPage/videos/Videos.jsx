import React from "react";
import styles from "./Videos.module.css";
import VideoCard from "../videoCard/VideoCard";

const Videos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>Videos</h4>
      </div>

      <div className={styles.cardContainer}>
        <VideoCard />
      </div>
    </div>
  );
};

export default Videos;
