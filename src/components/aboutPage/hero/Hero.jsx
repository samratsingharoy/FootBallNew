import React from "react";
import styles from "./Hero.module.css";
import CommonHeroComp from "../../commonHeroComp/CommonHeroComp";
import { h1, h4 } from "framer-motion/client";

const Hero = () => {
  const header = "What is Football Junction";

  const bgImage = "/images/aboutpage/heroImage.jpeg";

  const content = [
    "Welcome to Football Junction, a Kolkata-based nonprofit organization dedicated to fostering a love for football and nurturing talent from the grassroots to the professional level. Established with a vision to create a thriving football community in the City of Joy, we strive to bridge the gap between local enthusiasts, aspiring players, and corporate professionals through a variety of engaging initiatives.",
    "Our organization is passionate about the beautiful game, and our mission is to make football accessible to everyone, regardless of age, background, or skill level. We organize local and corporate tournaments, providing a platform for people to come together, showcase their talent, and celebrate the spirit of sportsmanship. These events not only promote fitness and team-building but also strengthen community ties and inspire a competitive spirit.",
    "At Football Junction, we believe in starting young. Our grassroots development programs are designed to identify and nurture emerging talent from an early age, offering specialized coaching, mentorship, and opportunities to compete at various levels. Through these initiatives, we aim to create a strong foundation for the future stars of Indian football and contribute to the sport's development at a national level.",
    "With a dedicated team of coaches, volunteers, and football enthusiasts, Football Junction is committed to making a lasting impact on the footballing landscape of Kolkata and beyond. Join us in our journey to transform the game, one goal at a time!",

    <h4>Anik Mitra: Director, Football Junction Foundation</h4>,
    "Anik Mitra, Director of Football Junction Foundation, brings over 14 years of expertise in sports content production. With a career spanning Zee, Times Now, and Star TV Network, he has played a pivotal role in producing and managing broadcast coverage and regional language commentary for prestigious tournaments such as the Premier League, AFC Tournaments, FIFA World Cup Qualifiers, Pro-Kabaddi League ISL, IPL, and Hockey India League.",
    "His extensive experience in professional sports broadcasting, combined with a passion for football, shapes the Foundation’s vision of fostering grassroots development and using the sport as a platform to drive education and empower communities.",

    <h4>Mentors</h4>,
    "Football Development",
    "Sanjoy Sen: An AFC Pro Licensed coach, Sanjoy Sen is a veteran football coach with over 25 years of experience. Presently Mr. Sen is the coach of senior Bengal football team. Earlier he has managed several top-tier football clubs in India, including Mohun Bagan, where he led the team to victories in the I-League and Federation Cup. His strategic insights and leadership in football coaching are invaluable to our grassroots and professional training programs.",
    "Soumitra Chakraborty: A creative midfielder who played for Mohun Bagan and East Bengal, Mr. Soumitra Chakraborty is now a popular football expert and commentator on national sports television. Renowned for his excellent match analysis, Soumitra has transitioned into a mentor role, contributing significantly to youth development programs in football.",
    "Arnab Mondal: A former Indian national team defender, Arnab Mondal served Indian football with distinction over a long career. He also captained East Bengal. His experience as a stalwart defender and his dedication to nurturing young talent are crucial to our foundation’s objectives, ensuring that our training programmes meet the highest standards of professional football.",

    <h4>Education</h4>,
    "Parvati Sengupta: Parvati Sengupta, with over a decade of expertise in education and curriculum development, has led projects at Leadership for Equity and K12 Technoservices, creating teacher training programs, textbooks, and e-learning modules. Qualified in Education Management and Instructional Design, she has collaborated with state education departments and developed gamified learning content, driving impactful education reform across India.",
    "Dhritiman Gupta: Dhritiman Gupta has 13 years of experience in the education sector, with a strong background in research and teaching. He completed his PhD from ISI Delhi in 2021 and is currently an Assistant Professor at Jindal University. Previously, he has taught at TERI, Shiv Nadar, and Ashoka University. Outside of academia, Dhritiman is passionate about football and believes that India holds immense potential for football development, and his dedication to both fields drives his mission to make a lasting impact."
  ];
  return (
    <div className={styles.container}>
      <CommonHeroComp
        header={header}
        bgImage={bgImage}
        content={content}
        pageName={"About Us"}
      />
    </div>
  );
};

export default Hero;
