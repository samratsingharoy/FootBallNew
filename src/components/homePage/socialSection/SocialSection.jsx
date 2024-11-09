import React from "react";
import styles from "./SocialSection.module.css";

const SocialSection = () => {
  const data = [
    { image: "./images/homepage/social/insta.png", link: "" },
    { image: "./images/homepage/social/fb.png", link: "" },
    { image: "./images/homepage/social/linkdin.png", link: "" },
    { image: "./images/homepage/social/yt.png", link: "" },
    { image: "./images/homepage/social/x.png", link: "" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h4 className={styles.header}>Follow us on</h4>
      </div>

      <div className={styles.socialIconsContainer}>
        {data.map((val, i) => {
          return (
            <a
              href={val.link}
              key={i}
              target="/blank"
              className={styles.socialLink}
            >
              <div className={styles.socialWrapper}>
                <img src={val.image} className={styles.socialImage} alt="" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialSection;
