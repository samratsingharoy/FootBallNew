import React from "react";
import styles from "./PressSmallCard.module.css";
import { Link, useLocation } from "react-router-dom";

const PressSmallCard = ({ scaleValue }) => {
  return (
    <Link
      to={"/press-cornerid"}
      className={styles.container}
      style={{ "--hover-scale": `scale(${scaleValue})` }}
    >
      <div className={styles.imageContainer}>
        <img
          src="./images/homepage/press1.jpeg"
          alt=""
          className={styles.pressImage}
        />
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeft}>
          <p className={styles.title}>Chettri shines again against Cambodia</p>
          <p className={styles.content}>
            Sunil Chettri scores a brace against Cambodia as he lead India to a
            Convincing 4-0 Victory
          </p>
        </div>

        <div className={styles.bottomRight}>
          <div className={styles.bottomRightWrapper}>
            <p className={styles.storyText}>Full story</p>
            <div className={styles.storyArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5398 23.5797C11.0582 23.0597 10.7877 22.3548 10.7877 21.6199C10.7877 20.885 11.0582 20.1802 11.5398 19.6602L18.2919 12.3758L11.5364 5.09148C11.0681 4.5682 10.8092 3.86755 10.8154 3.14041C10.8215 2.41328 11.0923 1.71785 11.5694 1.20391C12.0465 0.689974 12.6917 0.398643 13.366 0.39267C14.0404 0.386696 14.6899 0.666561 15.1748 1.17198L23.7478 10.4161C24.2295 10.9361 24.5 11.6409 24.5 12.3758C24.5 13.1107 24.2295 13.8156 23.7478 14.3356L15.1748 23.5797C14.9359 23.8374 14.6523 24.0418 14.3402 24.1813C14.0281 24.3208 13.6935 24.3926 13.3556 24.3926C13.0177 24.3926 12.6831 24.3208 12.371 24.1813C12.0588 24.0418 11.7752 23.8374 11.5364 23.5797H11.5398ZM1.25216 23.5797C0.770531 23.0597 0.5 22.3548 0.5 21.6199C0.5 20.885 0.770531 20.1802 1.25216 19.6602L8.0043 12.3758L1.24874 5.09148C0.780466 4.5682 0.521532 3.86755 0.527708 3.14041C0.533882 2.41328 0.804672 1.71785 1.28175 1.20391C1.75883 0.689974 2.40403 0.398643 3.07839 0.39267C3.75274 0.386696 4.40229 0.666561 4.88714 1.17198L13.4602 10.4161C13.9418 10.9361 14.2123 11.6409 14.2123 12.3758C14.2123 13.1107 13.9418 13.8156 13.4602 14.3356L4.88714 23.5797C4.64829 23.8374 4.36469 24.0418 4.05255 24.1813C3.7404 24.3208 3.40582 24.3926 3.06794 24.3926C2.73005 24.3926 2.39547 24.3208 2.08333 24.1813C1.77118 24.0418 1.48758 23.8374 1.24874 23.5797H1.25216Z"
                  fill="#FFC700"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PressSmallCard;
