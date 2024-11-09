import React, { useRef, useState } from "react";
import styles from "./SectionTwo.module.css";
import Overview from "../overview/Overview";
import Guidelines from "../guidelines/Guidelines";
import MatchesMod from "../matches/MatchesMod";
import PointsTable from "../pointsTable/PointsTable";
import Teams from "../teams/Teams";
import Gallery from "../gallery/Gallery";
import { useGSAP } from "@gsap/react";
import "./SectionTwo.css";
import gsap from "gsap";

const subHeaders = [
  "Overview",
  "Guidelines",
  "Matches",
  "Table",
  "Teams",
  "Gallery",
];

const SectionTwo = () => {
  const [currentSubheader, setCurrentSubheader] = useState("Overview");
  const container = useRef();
  useGSAP(
    () => {
      gsap.to(".tournamentSubCatWrapper", {
        opacity: 1,
        duration: 1.2,
      });
    },
    { dependencies: [currentSubheader], scope: container }
  );

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <img src="/images/cupImage.png" className={styles.cupImage} alt="" />
        </div>
        <div className={styles.headerText}>
          <h4 className={styles.header}>Corporate Ball Game</h4>
          <h4 className={styles.header}>SEASON 2</h4>
        </div>
      </div>

      <div className={styles.subHeaderContainer}>
        {subHeaders.map((item, i) => {
          return (
            <div className={styles.subHeaderWrapper} key={i}>
              <h5
                className={styles.subHeader}
                onClick={() => {
                  setCurrentSubheader(item);
                }}
              >
                {item}
              </h5>

              <div
                className={`${styles.underline} ${
                  currentSubheader === item ? styles.showunderline : ""
                }`}
              ></div>
            </div>
          );
        })}
      </div>

      <div className={styles.subCatContentContainer} ref={container}>
        {currentSubheader === "Overview" && (
          <div className="tournamentSubCatWrapper">
            <Overview />
          </div>
        )}

        {currentSubheader === "Guidelines" && (
          <div className="tournamentSubCatWrapper">
            <Guidelines />
          </div>
        )}

        {currentSubheader === "Matches" && (
          <div className="tournamentSubCatWrapper">
            <MatchesMod />
          </div>
        )}

        {currentSubheader === "Table" && (
          <div className="tournamentSubCatWrapper">
            <PointsTable />
          </div>
        )}

        {currentSubheader === "Teams" && (
          <div className="tournamentSubCatWrapper">
            <Teams />
          </div>
        )}

        {currentSubheader === "Gallery" && (
          <div className="tournamentSubCatWrapper">
            <Gallery />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
