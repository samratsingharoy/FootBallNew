import React, { useState } from "react";
import styles from "./HomeHero.module.css";
import Slider from "react-slick";
import PressCorner from "../../pages/pressCorner/PressCorner";
const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    waitForAnimate: false,
    speed: 2000,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentIndex(next),
  };
  return (
    <div className={styles.homeHeroContainer}>
      <div className={styles.homeHeroWrapper}>
        <Slider {...settings} className={styles.heroSlider}>
          
          <div className={styles.imageWrapper}>
            <img src="public\images\homepage\heroBg.jpeg" className={styles.heroImage} alt="" />
          </div>
          
          
          <div className={styles.imageWrapper}>
          <img src="public\images\homepage\carousel1.png" className={styles.heroImage} alt="" />
          </div>

          <div className={styles.imageWrapper}>
            <img src="public\images\homepage\carousel3.png" className={styles.heroImage} alt="" />
          </div>
          
          <div className={styles.imageWrapper}>
            <img src="public\images\homepage\carousel2.png" className={styles.heroImage} alt="" />
          </div>
        </Slider>

        <div className={styles.circleContainer}>
          {[0, 1, 2,3].map((index) => (
            <div
              key={index}
              className={styles.circle}
              style={{
                backgroundColor: currentIndex === index ? "#e57c23" : "#f2f2f2",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
