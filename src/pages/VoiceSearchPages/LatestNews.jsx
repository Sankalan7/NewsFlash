import React from "react";
import NewsCardVerticalCarouselContainer from "../../components/NewsCardVerticalCarouselContainer";
import { useLocation } from "react-router-dom";
import NewsCardPlainContainer from "../../components/NewsCardPlainContainer";

const LatestNews = () => {
  const location = useLocation();
  const { articles, heading, activeArticle } = location.state;
  return (
    <>
      <div>
        <NewsCardPlainContainer
          i={articles}
          heading={heading}
          activeArticle={activeArticle}
        />
      </div>
    </>
  );
};

export default LatestNews;
