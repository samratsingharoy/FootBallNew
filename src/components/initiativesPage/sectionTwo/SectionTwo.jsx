import React from "react";
import styles from "./SectionTwo.module.css";
import Card from "../card/Card";

const SectionTwo = () => {
  const initData = [
    {
      image: "/images/homepage/init/init1.jpeg",
      title: "FOOTBALL TRAINING CAMP IN COLLEGES/UNIVERSITIES",
      content:
        "Our goal is to provide a comprehensive football development program led by licensed coaches, aimed at refining skills and fostering a competitive spirit on the field. Our commitment extends beyond training sessions to biweekly fitness programs, ensuring holistic player development.",
    },

    {
      image: "/images/homepage/init/init2.jpeg",
      title: "FOOTBALL TRAINING CAMP IN LOCAL COMMUNITY CLUBS (PARA CLUBS)",
      content:
        "Introducing “Football Unites Communities” - a dynamic initiative aimed at bringing football training directly to local community clubs in residential areas. Our project, “Football Unites Communities,” is centered on fostering a sense of harmony, teamwork, and football passion within the heart of local neighbourhood.",
    },

    {
      image: "/images/homepage/init/init3.jpeg",
      title: "FOOTBALL TRAINING CAMP IN SCHOOLS",
      content:
        "Introducing “Football Unites Communities” - a dynamic initiative aimed at bringing football training directly to local community clubs in residential areas. Our project, “Football Unites Communities,” is centered on fostering a sense of harmony, teamwork, and football passion within the heart of local neighbourhood.",
    },
    {
      image: "/images/homepage/init/init4.jpeg",
      title: "MAKING COMMUNITY STADIUMS STAND OUT",
      content:
        "Introducing “Football Unites Communities” - a dynamic initiative aimed at bringing football training directly to local community clubs in residential areas. Our project, “Football Unites Communities,” is centered on fostering a sense of harmony, teamwork, and football passion within the heart of local neighbourhood.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.headeContainer}>
        <h4 className={styles.header}>
          Top football Initiatives by Football Junction
        </h4>
      </div>

      <div className={styles.cardContainer}>
        {initData.map((init, index) => {
          return (
            <div className={styles.card} key={index}>
              <Card initDetails={init} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionTwo;
