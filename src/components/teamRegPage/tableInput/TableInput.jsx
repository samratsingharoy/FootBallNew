import React from "react";
import styles from "./TableInput.module.css";

const TableInput = () => {
  const inputNames = [
    { inputName: "name", inputClassName: styles.name },
    { inputName: "shirtnum", inputClassName: styles.shirtnum },
    { inputName: "shirtsize", inputClassName: styles.shirtsize },
    { inputName: "address", inputClassName: styles.address },
    { inputName: "phone", inputClassName: styles.phone },
    { inputName: "bloodGroup", inputClassName: styles.bloodGroup },
    { inputName: "guardian", inputClassName: styles.guardian },
    { inputName: "id", inputClassName: styles.id },
  ];
  return (
    <div className={styles.container}>
      <form action="" className={styles.tableForm}>
        <div className={styles.tableRowsContainer}>
          {inputNames.map((val, i) =>
            val.inputName === "address" ? (
              <textarea
                name={val.inputName}
                key={i}
                className={`${val.inputClassName}  ${styles.inputColumn}`}
              />
            ) : (
              <input
                type="text"
                name={val.inputName}
                key={i}
                className={`${val.inputClassName} ${styles.inputColumn}`}
              />
            )
          )}
        </div>
      </form>
    </div>
  );
};

export default TableInput;
