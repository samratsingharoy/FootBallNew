import React from "react";
import styles from "./Donations.module.css";

const Donations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>Donations</h4>
      </div>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src="/images/donations.jpeg"
            className={styles.donationImage}
            alt=""
          />
        </div>

        <div className={styles.right}>
          <div className={styles.subHeaderContainer}>
            <h4 className={styles.subHeader}>
              The Beautiful game will help support a beautiful{" "}
              <span className={styles.smile}>SMILE</span>
            </h4>
          </div>

          <div className={styles.contentContainer}>
            <p className={styles.content}>
              our generous donation will help us empower young football
              talent,providing them with the resources and opportunities to
              pursue their passion and build a brighter future through the
              beautiful game
            </p>
          </div>

          <div className={styles.contriContainer}>
            <h4 className={styles.contriText}>Contribution Frequency</h4>

            <div className={styles.contriTypeContainer}>
              <div className={styles.monthlyContainer}>
                <p className={styles.contriType}>Monthly</p>
              </div>

              <div className={styles.yearlyContainer}>
                <p className={styles.contriType}>Yearly</p>
              </div>
            </div>
          </div>

          <div className={styles.amountContainer}>
            <h4 className={styles.amountText}>
              Select an amount to contribute
            </h4>

            <div className={styles.priceContainer}>
              <div className={styles.amountWrapper}>
                <p className={styles.amount}>₹100</p>
              </div>

              <div className={styles.amountWrapper}>
                <p className={styles.amount}>₹500</p>
              </div>
              <div className={styles.amountWrapper}>
                <p className={styles.amount}>₹1000</p>
              </div>
              <div className={styles.amountWrapper}>
                <p className={styles.amount}>₹5000</p>
              </div>
              <div className={styles.enterWrapper}>
                <p className={styles.enterText}>Enter any amount</p>
              </div>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <button className={styles.contriBtn}>Contribute</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
