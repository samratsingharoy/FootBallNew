import React, { useState } from "react";
import styles from "./Details.module.css";

import Overview from "../overview/Overview";
import Guidelines from "../guidelines/Guidelines";
import Facilities from "../facilities/Facilities";

import { guidelineData, facilitiesData } from "../../../data/initiativesIdInfo";
import Partner from "../partner/Partner";
import Gallery from "../../tournamentPage/gallery/Gallery";

const Details = () => {
  const [currentHeader, setCurrentHeader] = useState("Overview");

  const headers = [
    "Overview",
    "Guidelines",
    "Facilities",
    "Partner",
    "Gallery",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        {headers.map((val, i) => {
          return (
            <div className={styles.headerWrapper} key={i}>
              <h4
                className={styles.header}
                onClick={() => {
                  setCurrentHeader(val);
                }}
              >
                {val}
              </h4>

              <div
                className={styles.underline}
                style={{ width: val === currentHeader ? "100%" : "0%" }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className={styles.subCatContentContainer}>
        {currentHeader === "Overview" && (
          <div>
            <Overview />
          </div>
        )}

        {currentHeader === "Guidelines" && (
          <div>
            <Guidelines data={guidelineData} />
          </div>
        )}

        {currentHeader === "Facilities" && (
          <div>
            <Guidelines data={facilitiesData} />
          </div>
        )}

        {currentHeader === "Partner" && (
          <div>
            <Partner />
          </div>
        )}

        {currentHeader === "Gallery" && (
          <div>
            <Gallery />
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
