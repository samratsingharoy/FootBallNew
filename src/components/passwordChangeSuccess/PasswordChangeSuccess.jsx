import React from "react";
import styles from "./PasswordChangeSuccess.module.css";
import { useNavigate } from "react-router-dom";

const PasswordChangeSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img src="./images/success.svg" className={styles.tqImage} alt="" />
        </div>

        <div className={styles.textContainer}>
          <p className={styles.text}>Password Changed Successfully</p>
        </div>

        <div className={styles.btnContainer}>
          <button
            onClick={() => {
              navigate("/sign-in");
            }}
            className={styles.btn}
          >
            Go to LOG-IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangeSuccess;
