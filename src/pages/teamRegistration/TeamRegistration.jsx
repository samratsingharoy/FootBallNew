import React, { useState } from "react";
import PageOne from "../../components/teamRegPage/pageOne/PageOne";
import PageTwo from "../../components/teamRegPage/pageTwo/PageTwo";
import PageThree from "../../components/teamRegPage/pageThree/PageThree";
import PageFour from "../../components/teamRegPage/pageFour/PageFour";

const TeamRegistration = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div className="paddingLeftRight">
      {currentPage === 1 && <PageOne nextPage={nextPage} />}
      {currentPage === 2 && <PageTwo nextPage={nextPage} />}
      {currentPage === 3 && <PageThree nextPage={nextPage} />}
      {currentPage === 4 && <PageFour nextPage={nextPage} />}
    </div>
  );
};

export default TeamRegistration;
