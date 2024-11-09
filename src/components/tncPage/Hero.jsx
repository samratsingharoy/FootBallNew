import React from "react";
import CommonHeroComp from "../commonHeroComp/CommonHeroComp";

const Hero = () => {
  const header = "Terms & Conditions";

  const bgImage = "/images/tnc/heroImage.jpeg";

  const content = [
    "Welcome to Football Junction, a Kolkata-based nonprofit organization dedicated to fostering a love for football and nurturing talent from the grassroots to the professional level. Established with a vision to create a thriving football community in the City of Joy, we strive to bridge the gap between local enthusiasts, aspiring players, and corporate professionals through a variety of engaging initiatives.",
    "Our organization is passionate about the beautiful game, and our mission is to make football accessible to everyone, regardless of age, background, or skill level. We organize local and corporate tournaments, providing a platform for people to come together, showcase their talent, and celebrate the spirit of sportsmanship. These events not only promote fitness and team-building but also strengthen community ties and inspire a competitive spirit.",
    "At Football Junction, we believe in starting young. Our grassroots development programs are designed to identify and nurture emerging talent from an early age, offering specialized coaching, mentorship, and opportunities to compete at various levels. Through these initiatives, we aim to create a strong foundation for the future stars of Indian football and contribute to the sport's development at a national level.",
    "With a dedicated team of coaches, volunteers, and football enthusiasts, Football Junction is committed to making a lasting impact on the footballing landscape of Kolkata and beyond. Join us in our journey to transform the game, one goal at a time!",
  ];
  return (
    <div>
      <CommonHeroComp
        header={header}
        bgImage={bgImage}
        content={content}
        pageName={"Terms & Conditions"}
      />
    </div>
  );
};

export default Hero;
