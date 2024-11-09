import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/pressIdPage/hero/Hero";
import Videos from "../../components/pressIdPage/videos/Videos";
import Articles from "../../components/pressIdPage/articles/Articles";

const PressCornerID = () => {
  const { id } = useParams();
  return (
    <div className="paddingLeftRight">
      <Hero />
      <Videos />
      <Articles />
    </div>
  );
};

export default PressCornerID;
