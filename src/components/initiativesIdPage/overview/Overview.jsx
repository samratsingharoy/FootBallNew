import React from "react";
import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Introducing “Football Unites Communities” - a dynamic initiative aimed
          at bringing football training directly to local community clubs in
          residential areas. Our project, “Football Unites Communities,” is
          centered on fostering a sense of harmony, teamwork, and football
          passion within the heart of local neighbourhood. This program is
          tailored to cater specifically to the vibrant fabric of local
          communities, emphasizing inclusivity and accessibility to all
          residents. Under the guidance of present and former professional
          footballers, our licensed coaches and physical trainers provide
          comprehensive training sessions five days a week for three distinct
          age groups. This initiative goes beyond just football training; it's
          about building strong community bonds through the shared love of the
          sport. Local community clubs engage in friendly tournaments, creating
          an atmosphere of healthy competition and unity. Exceptional talents
          identified during these events have the opportunity for trials in
          local premier or Div 1 football clubs, creating a direct pathway for
          community members to pursue professional football careers.
        </p>

        <p className={styles.content}>
          Our project proudly collaborates with local community clubs, medical
          partners, MSO tie-ups, media partnerships, the Chamber of Commerce,
          educational institutions, and marketing revenue streams. By fostering
          ties within the community, “Football Unites Communities” aims to not
          only enhance football skills but also contribute to the social fabric
          and spirit of togetherness within local neighbourhood. Join us in this
          exciting journey of football and community-building right in your
          local area!
        </p>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.bottomHeaderContainer}>
          <h4 className={styles.bottomHeader}>
            Bytes from our latest training session
          </h4>
        </div>

        <div className={styles.videoContainer}>
          <img src="/images/init/video.jpeg" className={styles.video} alt="" />
          <div className={styles.playpause}>
            <div className={styles.playpauseWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M31.3561 25.6772L69.9811 47.9772C71.5381 48.8762 71.5381 51.1242 69.9811 52.0232L31.3561 74.3232C29.7991 75.2222 27.8521 74.0982 27.8521 72.3002V27.7002C27.8521 25.9022 29.7981 24.7782 31.3561 25.6772Z"
                  fill="url(#paint0_radial_967_2217)"
                />
                <path
                  d="M69.9811 47.977L31.3561 25.677C31.1231 25.543 30.8821 25.467 30.6401 25.418L67.9811 46.977C69.5381 47.876 69.5381 50.124 67.9811 51.023L29.3561 73.323C29.0071 73.524 28.6401 73.611 28.2781 73.624C28.9341 74.562 30.2391 74.967 31.3561 74.323L69.9811 52.023C71.5381 51.124 71.5381 48.876 69.9811 47.977Z"
                  fill="url(#paint1_radial_967_2217)"
                />
                <path
                  d="M31.3561 25.6772L69.9811 47.9772C71.5381 48.8762 71.5381 51.1242 69.9811 52.0232L31.3561 74.3232C29.7991 75.2222 27.8521 74.0982 27.8521 72.3002V27.7002C27.8521 25.9022 29.7981 24.7782 31.3561 25.6772Z"
                  stroke="url(#paint2_radial_967_2217)"
                  stroke-miterlimit="10"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_967_2217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(49.5004 50.0002) rotate(90) scale(24.6394 52.4372)"
                  >
                    <stop stop-color="#1C1C1C" stop-opacity="0.88" />
                    <stop offset="1" stop-color="#0D0D0D" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_967_2217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(49.7135 50.0272) rotate(90) scale(24.6092 51.9213)"
                  >
                    <stop stop-color="#1C1C1C" stop-opacity="0.88" />
                    <stop offset="1" stop-color="#0D0D0D" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_967_2217"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(49.5004 50.0002) rotate(90) scale(24.6394 52.4372)"
                  >
                    <stop stop-color="#1C1C1C" stop-opacity="0.88" />
                    <stop offset="1" stop-color="#0D0D0D" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
