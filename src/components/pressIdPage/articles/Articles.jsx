import React from "react";
import styles from "./Articles.module.css";
import ArticleCard from "../articleCard/ArticleCard";

const articleData = [
  {
    image: "/images/pressidpage/article1.jpeg",
    content: "India Begin AFC Asian Cup Qualifiers Journey Against Cambodia",
    link: "",
  },
  {
    image: "/images/pressidpage/article2.jpeg",
    content: "India Begin AFC Asian Cup Qualifiers Journey Against Cambodia",
    link: "",
  },
  {
    image: "/images/pressidpage/article3.jpeg",
    content: "India Begin AFC Asian Cup Qualifiers Journey Against Cambodia",
    link: "",
  },
];
const Articles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {articleData.map((val, i) => {
          return <ArticleCard key={i} data={val} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
