import React from "react";
import styles from "./PageThree.module.css";
import TableInput from "../tableInput/TableInput";

const PageThree = ({ nextPage }) => {
  const tableHeaders = [
    "Name",
    "Shirt Number",
    "Shirt Size",
    "Address",
    "Phone Number",
    "Blood Group",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>TEAM REGISTER</h4>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.tableHeaderContainer}>
            {tableHeaders.map((val, i) => {
              return (
                <div className={styles.headerColumn} key={i}>
                  <p className={styles.tableheaderText}>{val}</p>
                </div>
              );
            })}
            <div className={styles.headerColumn}>
              <p className={styles.tableheaderText}>Guardian</p>
              <p className={styles.tablesubHeaderText}>(in case of minor )</p>
            </div>

            <div className={styles.headerColumn}>
              <p className={styles.tableheaderText}>ID</p>
            </div>
          </div>

          <div className={styles.tableRowContainer}>
            {Array.from({ length: 11 }).map((_, index) => (
              <TableInput key={index} />
            ))}
          </div>
        </div>

        <div className={styles.btnContainer} onClick={nextPage}>
          <button className={styles.btn}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
