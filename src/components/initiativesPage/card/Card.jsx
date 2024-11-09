import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ initDetails }) => {
  const { image, title, content } = initDetails;
  return (
    <div className={styles.container}>
      <div
        className={styles.cardWrapper}
        style={{
          background: `linear-gradient(
        104deg,
        rgba(0, 0, 0, 0) 2.51%,
        rgba(0, 0, 0, 0.2) 59.96%
      ),
      url("${image}") lightgray 50% / cover
        no-repeat`,
        }}
      >
        <div className={styles.innerWrapper}>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>{title}</h4>
          </div>

          <div className={styles.contentContainer}>
            <h4 className={styles.content}>{content}</h4>
          </div>
          <Link to={"/initiatives-id"}>
            <div className={styles.btnContainer}>
              <h4 className={styles.btn}>Know More</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
