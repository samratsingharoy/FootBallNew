import React from "react";
import styles from "./Guidelines.module.css";

const guidelineData = [
  {
    title: "Objective of the Camp",
    points: [
      "Promote football at the grassroots level by engaging local talent from the community.",
      "Develop basic football skills and instill a love for the game among children and youth.",
      "Foster teamwork, discipline, and sportsmanship through structured training sessions.",
    ],
  },
  {
    title: "Target Audience",
    points: [
      "Boys and girls aged 8 to 18 years from the local community.",
      "Open to beginners and intermediate players with a focus on skill development.",
    ],
  },
  {
    title: "Camp Structure",
    points: [
      "Duration: 4 to 6 weeks, with 3-4 training sessions per week.",
      "Timing: Morning and evening slots to accommodate school and work schedules.",
      "Group Formation: Divide participants by age and skill level to ensure focused training.",
      "Training Sessions: Include warm-ups, technical drills (dribbling, passing, shooting), small-sided games, and fitness exercises.",
    ],
  },
  {
    title: "Coaching Staff",
    points: [
      "Appoint experienced local coaches and former players to lead the training sessions.",
      "Ensure a minimum of one coach per 10-15 participants for personalized attention.",
      "Coaches should emphasize skill development, physical fitness, and team dynamics.",
    ],
  },
];

const Guidelines = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((val, i) => {
        return (
          <div className={styles.wrapper} key={i}>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>{val.title}</h4>
            </div>

            <ul className={styles.pointsContainer}>
              {val.points.map((item, index) => {
                return (
                  <li className={styles.point} key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Guidelines;
