import React, { useEffect, useState } from "react";
import styles from "./Details.module.css";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Details = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.left}>
          <div className={styles.leftTop}>
            <div className={styles.fbIcon}>
              <FaFacebook />
            </div>

            <div className={styles.twitterIcon}>
              <FaTwitter />
            </div>

            <div className={styles.ytIcon}>
              <FaYoutube />
            </div>

            <div className={styles.instaIcon}>
              <FaInstagram />
            </div>

            <div className={styles.linkedinIcon}>
              <FaLinkedin />
            </div>
          </div>
          <div className={styles.addressContainer}>
            <p className={styles.leftContent}>
              224, Ashoke Road, Kolkata - 700084
            </p>
          </div>

          <div className={styles.phoneContainer}>
            <p className={styles.leftContent}>(+91) 9330300937</p>
          </div>
        </div>
      )}

      <div className={styles.mid}>
        <div className={styles.logoContainer}>
          <img src="/images/logo.png" className={styles.logoImage} alt="" />
        </div>
        <div className={styles.midContentContainer}>
          <p className={styles.midContent}>
            Transforming Lives Through Football! Football Junction Foundation, a
            registered Section 8 non-profit, is on a mission to revolutionize
            football in our nation.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        {isMobile && (
          <div className={styles.modRightContainer}>
            <div className={styles.leftTop}>
              <div className={styles.fbIcon}>
                <FaFacebook />
              </div>

              <div className={styles.twitterIcon}>
                <FaTwitter />
              </div>

              <div className={styles.ytIcon}>
                <FaYoutube />
              </div>

              <div className={styles.instaIcon}>
                <FaInstagram />
              </div>

              <div className={styles.linkedinIcon}>
                <FaLinkedin />
              </div>
            </div>
            <div className={styles.addressContainer}>
              <p className={styles.leftContent}>
                224, Ashoke Road, Kolkata - 700084
              </p>
            </div>

            <div className={styles.phoneContainer}>
              <p className={styles.leftContent}>(+91) 9330300937</p>
            </div>
          </div>
        )}

        <div className={styles.mainRightContent}>
          <Link to={"/about-us"}>
            <p className={styles.footerLink}>About Us</p>
          </Link>

          <Link to={"/terms-and-conditions"}>
            <p className={styles.footerLink}>Terms & Conditions</p>
          </Link>

          <Link to={"/privacy-policy"}>
            <p className={styles.footerLink}>Privacy Policy</p>
          </Link>

          <Link>
            <p className={styles.footerLink}>Powered by InfluCon Digitals</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
