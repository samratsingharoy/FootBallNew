import React from "react";
import styles from "./ArticleCard.module.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ data }) => {
  const { image, content } = data;
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" className={styles.articleImage} />
      </div>

      <div className={styles.bottom}>
        <div className={styles.contentContainer}>
          <p className={styles.content}>{content}</p>
        </div>

        <Link>
          <div className={styles.linkContainer}>
            <p className={styles.linkText}>Full Story</p>
            <div className={styles.linkArrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.5398 23.1871C11.0582 22.6671 10.7877 21.9623 10.7877 21.2274C10.7877 20.4925 11.0582 19.7876 11.5398 19.2676L18.2919 11.9833L11.5364 4.6989C11.0681 4.17563 10.8092 3.47497 10.8154 2.74784C10.8215 2.0207 11.0923 1.32528 11.5694 0.811337C12.0465 0.297396 12.6917 0.00606537 13.366 9.15527e-05C14.0404 -0.00588226 14.6899 0.273983 15.1748 0.779402L23.7478 10.0235C24.2295 10.5435 24.5 11.2483 24.5 11.9833C24.5 12.7182 24.2295 13.423 23.7478 13.943L15.1748 23.1871C14.9359 23.4448 14.6523 23.6493 14.3402 23.7887C14.0281 23.9282 13.6935 24 13.3556 24C13.0177 24 12.6831 23.9282 12.371 23.7887C12.0588 23.6493 11.7752 23.4448 11.5364 23.1871H11.5398ZM1.25216 23.1871C0.770531 22.6671 0.5 21.9623 0.5 21.2274C0.5 20.4925 0.770531 19.7876 1.25216 19.2676L8.0043 11.9833L1.24874 4.6989C0.780466 4.17563 0.521532 3.47497 0.527708 2.74784C0.533882 2.0207 0.804672 1.32528 1.28175 0.811337C1.75883 0.297396 2.40403 0.00606537 3.07839 9.15527e-05C3.75274 -0.00588226 4.40229 0.273983 4.88714 0.779402L13.4602 10.0235C13.9418 10.5435 14.2123 11.2483 14.2123 11.9833C14.2123 12.7182 13.9418 13.423 13.4602 13.943L4.88714 23.1871C4.64829 23.4448 4.36469 23.6493 4.05255 23.7887C3.7404 23.9282 3.40582 24 3.06794 24C2.73005 24 2.39547 23.9282 2.08333 23.7887C1.77118 23.6493 1.48758 23.4448 1.24874 23.1871H1.25216Z"
                  fill="#FFC700"
                />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
