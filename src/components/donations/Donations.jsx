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
              Your generous donation will help us empower young football
              talent, providing them with the resources and opportunities to
              pursue their passion and build a brighter future through the
              beautiful game.
            </p>
          </div>   

          {/* Updated hi class usage */}
          <div className={styles.hi}>
  <div className={styles.donation}>
    <div className={styles.kart}>
      <p className={styles.joke}>₹300</p>
    </div>
    <img src="public/images/donation/Donation1.png" alt="" />
  </div>
  <div className={styles.donation}>
    <div className={styles.kart}>
      <p className={styles.joke}>₹500</p>
    </div>
    <img src="public/images/donation/Donation3.png" alt="" />
  </div>
  <div className={styles.donation}>
    <div className={styles.kart}>
      <p className={styles.joke}>₹700</p>
    </div>
    <img src="public/images/donation/Donation2.png" alt="" />
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
