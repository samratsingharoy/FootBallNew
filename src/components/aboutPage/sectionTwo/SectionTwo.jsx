import React from "react";
import styles from "./SectionTwo.module.css";
import AboutCard from "../aboutCard/AboutCard";

const SectionTwo = () => {
  const vision = {
    image: "/images/aboutpage/vision.jpeg",
    header: "Our Vision ",
    content: [
      "At Football Junction, we envision a dynamic and inclusive football ecosystem that becomes a cornerstone of Kolkata's sporting culture. Our goal is to transform the city into a hub for football development, where talent is identified and nurtured at every stage, from aspiring young players to seasoned professionals.",
      "We strive to create an environment where football is more than just a game—it's a way to bring communities together, promote healthy lifestyles, and foster personal growth. By offering a range of programs, tournaments, and grassroots initiatives, we aim to provide opportunities for everyone to experience the sport, regardless of age, background, or skill level.",
    ],
  };

  const mission = {
    image: "/images/aboutpage/mission.jpeg",
    header: "Our Mission",
    content: [
      "At Football Junction, our mission is to make football accessible and enjoyable for all by providing inclusive platforms for players of every age, skill level, and background. We are committed to:",
      "Organizing high-quality local and corporate tournaments that foster a spirit of healthy competition and community engagement.Initiating grassroots development programs that offer young aspiring footballers the opportunity to train, grow, and excel under professional guidance.Building a community where passion for football translates into lifelong skills, discipline, and opportunities, contributing to the overall development of the sport in the region.Through these initiatives, we aim to create a positive, impactful presence in the football community, encouraging a love for the game while driving holistic development for every individual associated with Football Junction.",
    ],
  };
  return (
    <div className={styles.container}>
      <AboutCard data={vision} flexDirection={"row"} />
      <AboutCard data={mission} flexDirection={"row-reverse"} />
    </div>
  );
};

export default SectionTwo;
