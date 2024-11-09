import React from "react";
import styles from "./Gallery.module.css";
import { galleryImages } from "../../../data/tournamentInfo";
const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {galleryImages.map((link, i) => {
          return (
            <div className={styles.imageContainer} key={i}>
              <img src={link} alt="" className={styles.galImage} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
