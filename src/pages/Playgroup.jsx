import React from "react";
import PlayGroupHero from "../components/playGroup components/playGroupHero";
import HomeAway from "../components/playGroup components/HomeAway";
import LearningThroughPlay from "../components/playGroup components/LearningThroughPlay";
import DraggableCardDemo from "../components/playGroup components/DraggableCardDemo";
import Footer from "../components/Footer"

const Playgroup = () => {
  return (
    <>
      <PlayGroupHero />
      <HomeAway />
      <LearningThroughPlay />
      <DraggableCardDemo/>
      <Footer />
    </>
  );
};

export default Playgroup;
