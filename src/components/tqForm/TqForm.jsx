import React from "react";
import styles from "./TqForm.module.css";
import { useNavigate } from "react-router-dom";

const TqForm = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src="./images/tq.svg" className={styles.tqImage} alt="" />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>for signing up & now you can login</p>
        </div>

        <div className={styles.btnContainer}>
          <button
            onClick={() => {
              navigate("/sign-in");
            }}
            className={styles.btn}
          >
            LOG-IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default TqForm;
