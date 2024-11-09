import React from "react";
import styles from "./Sub.module.css";
import { Link } from "react-router-dom";
const Sub = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>
          Don't miss out, Subscribe to our Newsletter
        </h4>
      </div>

      <div className={styles.subBtnContainer}>
        <Link>
          <p className={styles.subBtn}>Subscribe</p>
        </Link>
      </div>
    </div>
  );
};

export default Sub;
