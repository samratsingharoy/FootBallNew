import React from "react";
import styles from "./MatchCentreCard.module.css";
import { Link } from "react-router-dom";

const MatchCentreCard = () => {
  return (
    <div className={styles.container}>
      {/* --top-- */}
      <div className={styles.top}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>Match Centre</h4>
        </div>

        <div className={styles.liveContainer}>
          <div className={styles.liveDot}></div>
          <p className={styles.liveText}>Live</p>
        </div>
      </div>
      {/* --top-- */}

      {/* --Mid Match Content== */}
      <div className={styles.matchTimeContainer}>
        <p className={styles.matchTime}>33'</p>
      </div>

      <div className={styles.matchesContainer}>
        <div className={styles.leftArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 37"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.0317 1.73792C19.739 2.52869 20.1363 3.60061 20.1363 4.71823C20.1363 5.83585 19.739 6.90778 19.0317 7.69855L9.11638 18.7763L19.0368 29.8541C19.7244 30.6498 20.1046 31.7154 20.0956 32.8212C20.0865 33.927 19.6889 34.9845 18.9883 35.7661C18.2877 36.5477 17.3402 36.9908 16.35 36.9998C15.3597 37.0089 14.4058 36.5833 13.6939 35.8147L1.10454 21.7566C0.397265 20.9658 -1.69532e-06 19.8939 -1.59762e-06 18.7763C-1.49991e-06 17.6587 0.397265 16.5868 1.10454 15.796L13.6939 1.73792C14.0446 1.34601 14.4611 1.03512 14.9194 0.823001C15.3778 0.610887 15.8691 0.50171 16.3653 0.50171C16.8615 0.50171 17.3528 0.610887 17.8112 0.823001C18.2696 1.03512 18.686 1.34601 19.0368 1.73792L19.0317 1.73792ZM34.1389 1.73792C34.8462 2.52869 35.2435 3.60061 35.2435 4.71823C35.2435 5.83585 34.8462 6.90778 34.1389 7.69855L24.2236 18.7763L34.1439 29.8541C34.8316 30.6498 35.2118 31.7154 35.2028 32.8212C35.1937 33.927 34.796 34.9845 34.0955 35.7661C33.3949 36.5477 32.4474 36.9908 31.4571 36.9998C30.4669 37.0089 29.513 36.5833 28.801 35.8147L16.2117 21.7566C15.5044 20.9659 15.1072 19.8939 15.1072 18.7763C15.1072 17.6587 15.5044 16.5868 16.2117 15.796L28.801 1.73792C29.1518 1.34601 29.5682 1.03512 30.0266 0.823002C30.485 0.610888 30.9763 0.501712 31.4725 0.501712C31.9687 0.501712 32.46 0.610888 32.9184 0.823002C33.3768 1.03512 33.7932 1.34601 34.144 1.73792L34.1389 1.73792Z"
              fill="#FFC700"
            />
          </svg>
        </div>

        <div className={styles.matchesMidContainer}>
          <div className={styles.teamDetailsContainer}>
            <div className={styles.teamImageContainer}>
              <img
                src="./images/homepage/team1Mc.png"
                className={styles.teamImage}
                alt=""
              />
            </div>

            <p className={styles.teamName}>Mohun Bagan Super Giant</p>
          </div>

          <div className={styles.scoresContainer}>
            <p className={styles.score}>3</p>
            <p className={styles.dash}>-</p>
            <p className={styles.score}>2</p>
          </div>

          <div className={styles.teamDetailsContainer}>
            <p className={styles.teamName}>East Bengal FC </p>
            <div className={styles.teamImageContainer}>
              <img
                src="./images/homepage/team2Mc.png"
                className={styles.teamImage}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={styles.rightArrow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 37"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.2117 35.2621C15.5045 34.4713 15.1072 33.3994 15.1072 32.2818C15.1072 31.1641 15.5045 30.0922 16.2117 29.3015L26.1271 18.2237L16.2067 7.14593C15.519 6.35016 15.1388 5.28462 15.1479 4.17883C15.1569 3.07304 15.5546 2.01545 16.2552 1.23388C16.9558 0.452297 17.9032 0.00925064 18.8935 0.000167847C19.8838 -0.00891495 20.8376 0.416691 21.5496 1.18531L34.1389 15.2434C34.8462 16.0342 35.2435 17.1061 35.2435 18.2237C35.2435 19.3413 34.8462 20.4132 34.1389 21.204L21.5496 35.2621C21.1989 35.654 20.7824 35.9649 20.324 36.177C19.8656 36.3891 19.3743 36.4983 18.8781 36.4983C18.382 36.4983 17.8906 36.3891 17.4323 36.177C16.9739 35.9649 16.5574 35.654 16.2067 35.2621H16.2117ZM1.10454 35.2621C0.397266 34.4713 0 33.3994 0 32.2818C0 31.1641 0.397266 30.0922 1.10454 29.3015L11.0199 18.2237L1.0995 7.14593C0.411858 6.35016 0.03162 5.28462 0.0406876 4.17883C0.0497551 3.07304 0.447407 2.01545 1.14799 1.23388C1.84857 0.452297 2.79603 0.00925064 3.7863 0.000167847C4.77658 -0.00891495 5.73042 0.416691 6.44241 1.18531L19.0317 15.2434C19.739 16.0342 20.1363 17.1061 20.1363 18.2237C20.1363 19.3413 19.739 20.4132 19.0317 21.204L6.44241 35.2621C6.09167 35.654 5.67521 35.9649 5.21684 36.177C4.75846 36.3891 4.26714 36.4983 3.77096 36.4983C3.27478 36.4983 2.78346 36.3891 2.32508 36.177C1.8667 35.9649 1.45024 35.654 1.0995 35.2621H1.10454Z"
              fill="#FFC700"
            />
          </svg>
        </div>
      </div>
      {/* --Mid Match Content== */}

      <div className={styles.leagueLogoContainer}>
        <img
          src="./images/homepage/league1Mc.png"
          className={styles.leagueLogo}
          alt=""
        />
      </div>

      <div className={styles.allLeaguesContainer}>
        <img
          src="./images/homepage/league1Mc.png"
          className={styles.leagueLogo}
          alt=""
        />
        <img
          src="./images/homepage/league2Mc.png"
          className={styles.leagueLogo}
          alt=""
        />
        <img
          src="./images/homepage/league3Mc.png"
          className={styles.leagueLogo}
          alt=""
        />
        <img
          src="./images/homepage/league4Mc.png"
          className={styles.leagueLogo}
          alt=""
        />
      </div>

      <div className={styles.viewAllContainer}>
        <Link to={"/match-center"}>
          <div className={styles.viewAllWrapper}>
            <p className={styles.viewalltext}>View All</p>
            <div className={styles.viewAllArrow}>
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
      </div>
    </div>
  );
};

export default MatchCentreCard;
