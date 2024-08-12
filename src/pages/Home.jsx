import React from "react";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";
import HomeContent from "../components/HomeContent";

function Home() {
  usePageTitleAndFavicon("Home", "house-chimney.png");

  return <HomeContent />;
}

export default Home;
