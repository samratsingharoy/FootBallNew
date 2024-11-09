import React from "react";
import styles from "./PageTwo.module.css";

const PageTwo = ({ nextPage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <h4 className={styles.header}>TEAM REGISTER</h4>
        </div>

        <form className={styles.formContainer}>
          <div className={styles.userInputContainer}>
            <input
              type="text"
              placeholder="Primary Jersey Color"
              className={styles.userInput}
            />
            <input
              type="text"
              placeholder="Secondary Jersey Color"
              className={styles.userInput}
            />
            <div className={styles.uploadContainer}>
              <div className={styles.uploadWrapper}>
                <label htmlFor="teamLogo" className={styles.uploadLabel}>
                  <div className={styles.uploadImage}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 65"
                      fill="none"
                    >
                      <path
                        d="M46.332 22.5773C46.5898 22.5773 46.7988 22.369 46.7988 22.1112V19.9367H48.9727C49.2305 19.9367 49.4395 19.7284 49.4395 19.4705C49.4395 19.2127 49.2305 19.0044 48.9727 19.0044H46.7988V16.8299C46.7988 16.5721 46.5898 16.3638 46.332 16.3638C46.0742 16.3638 45.8652 16.5721 45.8652 16.8299V19.0044H43.6914C43.4336 19.0044 43.2246 19.2127 43.2246 19.4705C43.2246 19.7284 43.4336 19.9367 43.6914 19.9367H45.8652V22.1112C45.8652 22.369 46.0742 22.5773 46.332 22.5773Z"
                        fill="#9C9C9C"
                      />
                      <path
                        d="M30.4548 42.6712C33.3252 42.6712 35.6598 40.3353 35.6598 37.4655C35.6598 34.5957 33.3252 32.2598 30.4548 32.2598C27.5843 32.2598 25.249 34.5957 25.249 37.4655C25.249 40.3353 27.5843 42.6712 30.4548 42.6712ZM30.4548 33.2559C32.7764 33.2559 34.665 35.1439 34.665 37.4655C34.665 39.7871 32.7764 41.6751 30.4548 41.6751C28.1331 41.6751 26.2438 39.7871 26.2438 37.4655C26.2438 35.1439 28.1331 33.2559 30.4548 33.2559Z"
                        fill="#9C9C9C"
                      />
                      <path
                        d="M36.1427 35.1831C36.4275 35.8901 36.5933 36.6578 36.5933 37.4657C36.5933 40.8511 33.8394 43.6037 30.4546 43.6037C27.0692 43.6037 24.3153 40.8511 24.3153 37.4657C24.3153 36.6578 24.4811 35.8901 24.766 35.1831H15.4937H14.5601V47.2782C14.5601 48.0269 15.1701 48.6362 15.9201 48.6362H44.9741C45.7319 48.6362 46.3485 48.0203 46.3485 47.2625V35.1831H45.4149H36.1427Z"
                        fill="#9C9C9C"
                      />
                      <path
                        d="M44.9884 26.2845H37.1655L35.4995 23.3288C35.2664 22.9121 34.825 22.6543 34.3485 22.6543H26.5601C26.0835 22.6543 25.6421 22.9121 25.4097 23.3275L23.7424 26.2845H15.9058C15.1636 26.2845 14.5601 26.8874 14.5601 27.6295V34.2506H15.4937H25.2483C26.3316 32.5034 28.2515 31.3275 30.4546 31.3275C32.6573 31.3275 34.577 32.5034 35.6602 34.2506H45.4149H46.3485V27.6439C46.3485 26.8939 45.7384 26.2845 44.9884 26.2845Z"
                        fill="#9C9C9C"
                      />
                    </svg>
                  </div>
                  <p className={styles.uploadLabelText}>
                    Upload Team
                    <br />
                    Logo
                  </p>
                </label>
                <input
                  type="file"
                  id="teamLogo"
                  accept="image/*"
                  className={styles.uploadInput}
                  style={{ display: "none" }}
                />
              </div>

              <div className={styles.uploadWrapper}>
                <label htmlFor="jerseyImage" className={styles.uploadLabel}>
                  <div className={styles.uploadImage}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 65"
                      fill="none"
                    >
                      <path
                        d="M46.332 22.5773C46.5898 22.5773 46.7988 22.369 46.7988 22.1112V19.9367H48.9727C49.2305 19.9367 49.4395 19.7284 49.4395 19.4705C49.4395 19.2127 49.2305 19.0044 48.9727 19.0044H46.7988V16.8299C46.7988 16.5721 46.5898 16.3638 46.332 16.3638C46.0742 16.3638 45.8652 16.5721 45.8652 16.8299V19.0044H43.6914C43.4336 19.0044 43.2246 19.2127 43.2246 19.4705C43.2246 19.7284 43.4336 19.9367 43.6914 19.9367H45.8652V22.1112C45.8652 22.369 46.0742 22.5773 46.332 22.5773Z"
                        fill="#9C9C9C"
                      />
                      <path
                        d="M30.4548 42.6712C33.3252 42.6712 35.6598 40.3353 35.6598 37.4655C35.6598 34.5957 33.3252 32.2598 30.4548 32.2598C27.5843 32.2598 25.249 34.5957 25.249 37.4655C25.249 40.3353 27.5843 42.6712 30.4548 42.6712ZM30.4548 33.2559C32.7764 33.2559 34.665 35.1439 34.665 37.4655C34.665 39.7871 32.7764 41.6751 30.4548 41.6751C28.1331 41.6751 26.2438 39.7871 26.2438 37.4655C26.2438 35.1439 28.1331 33.2559 30.4548 33.2559Z"
                        fill="#9C9C9C"
                      />
                      <path
                        d="M36.1427 35.1831C36.4275 35.8901 36.5933 36.6578 36.5933 37.4657C36.5933 40.8511 33.8394 43.6037 30.4546 43.6037C27.0692 43.6037 24.3153 40.8511 24.3153 37.4657C24.3153 36.6578 24.4811 35.8901 24.766 35.1831H15.4937H14.5601V47.2782C14.5601 48.0269 15.1701 48.6362 15.9201 48.6362H44.9741C45.7319 48.6362 46.3485 48.0203 46.3485 47.2625V35.1831H45.4149H36.1427Z"
                        fill="#9C9C9C"
                      />
                      <path
                        d="M44.9884 26.2845H37.1655L35.4995 23.3288C35.2664 22.9121 34.825 22.6543 34.3485 22.6543H26.5601C26.0835 22.6543 25.6421 22.9121 25.4097 23.3275L23.7424 26.2845H15.9058C15.1636 26.2845 14.5601 26.8874 14.5601 27.6295V34.2506H15.4937H25.2483C26.3316 32.5034 28.2515 31.3275 30.4546 31.3275C32.6573 31.3275 34.577 32.5034 35.6602 34.2506H45.4149H46.3485V27.6439C46.3485 26.8939 45.7384 26.2845 44.9884 26.2845Z"
                        fill="#9C9C9C"
                      />
                    </svg>
                  </div>
                  <p className={styles.uploadLabelText}>
                    Upload Jersey
                    <br />
                    Photo
                  </p>
                </label>
                <input
                  type="file"
                  id="jerseyImage"
                  accept="image/*"
                  className={styles.uploadInput}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="terms" className={styles.checkInput} />
              <label htmlFor="terms" className={styles.checkText}>
                Click to agree to terms & conditions
              </label>
            </div>
          </div>

          <div className={styles.btnContainer} onClick={nextPage}>
            <button className={styles.btn}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageTwo;
