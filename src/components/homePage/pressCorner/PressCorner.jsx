import React from "react";
import styles from "./PressCorner.module.css";
import { Link } from "react-router-dom";

import PressCardsSection from "../pressCardsSection/PressCardsSection";

const PressCorner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>Press Corner</h4>
      </div>
      <Link to={"/press-corner"}>
        <div className={styles.linkContainer}>
          <p className={styles.linkText}>View all Press Releases</p>
          <div className={styles.linkArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0398 23.1871C10.5582 22.6671 10.2877 21.9623 10.2877 21.2274C10.2877 20.4925 10.5582 19.7876 11.0398 19.2676L17.7919 11.9833L11.0364 4.6989C10.5681 4.17563 10.3092 3.47497 10.3154 2.74784C10.3215 2.0207 10.5923 1.32528 11.0694 0.811337C11.5465 0.297396 12.1917 0.00606537 12.866 9.15527e-05C13.5404 -0.00588226 14.1899 0.273983 14.6748 0.779402L23.2478 10.0235C23.7295 10.5435 24 11.2483 24 11.9833C24 12.7182 23.7295 13.423 23.2478 13.943L14.6748 23.1871C14.4359 23.4448 14.1523 23.6493 13.8402 23.7887C13.5281 23.9282 13.1935 24 12.8556 24C12.5177 24 12.1831 23.9282 11.871 23.7887C11.5588 23.6493 11.2752 23.4448 11.0364 23.1871H11.0398ZM0.752165 23.1871C0.270531 22.6671 0 21.9623 0 21.2274C0 20.4925 0.270531 19.7876 0.752165 19.2676L7.5043 11.9833L0.748737 4.6989C0.280466 4.17563 0.0215321 3.47497 0.0277081 2.74784C0.0338821 2.0207 0.304672 1.32528 0.781754 0.811337C1.25883 0.297396 1.90403 0.00606537 2.57839 9.15527e-05C3.25274 -0.00588226 3.90229 0.273983 4.38714 0.779402L12.9602 10.0235C13.4418 10.5435 13.7123 11.2483 13.7123 11.9833C13.7123 12.7182 13.4418 13.423 12.9602 13.943L4.38714 23.1871C4.14829 23.4448 3.86469 23.6493 3.55255 23.7887C3.2404 23.9282 2.90582 24 2.56794 24C2.23005 24 1.89547 23.9282 1.58333 23.7887C1.27118 23.6493 0.987583 23.4448 0.748737 23.1871H0.752165Z"
                fill="#FFC700"
              />
            </svg>
          </div>
        </div>
      </Link>

      <div className={styles.cardContainer}>
        <PressCardsSection />
        <PressCardsSection />
      </div>
    </div>
  );
};

export default PressCorner;
