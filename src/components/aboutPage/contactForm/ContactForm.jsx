import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>CONTACT HERE</h4>
        </div>
        <form action="" className={styles.contactForm}>
          <div className={styles.userDetails}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className={styles.userInput}
            />

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className={styles.userInput}
            />

            <input
              type="text"
              placeholder="Website Url"
              name="website"
              className={styles.userInput}
            />
          </div>

          <div className={styles.commentsContainer}>
            <textarea
              name="comments"
              id=""
              placeholder="Comments"
              className={styles.comments}
            />
          </div>

          <div className={styles.btnContainer}>
            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
