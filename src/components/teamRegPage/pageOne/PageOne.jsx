import React from "react";
import styles from "./PageOne.module.css";

const PageOne = ({ nextPage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>TEAM REGISTER</h4>
        </div>

        <form className={styles.formContainer}>
          <div className={styles.userInputContainer}>
            <input
              type="text"
              placeholder="Team Name"
              className={styles.userInput}
            />
            <input
              type="text"
              placeholder="Name of POC (Person of Conatct)"
              className={styles.userInput}
            />
            <input
              type="text"
              placeholder="Company Name "
              className={styles.userInput}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={styles.userInput}
            />
            <input
              type="text"
              placeholder="Tournament Name"
              className={styles.userInput}
            />
            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="terms" className={styles.checkInput} />
              <label htmlFor="terms" className={styles.checkText}>
                Click to agree to terms & conditions
              </label>
            </div>
          </div>

          <div className={styles.btnContainer} onClick={nextPage}>
            <button className={styles.btn}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageOne;
