import React from "react";
import PlayGroupHero from "../components/Play-Group/PlayGroupHero";
import HomeAway from "../components/Play-Group/HomeAway";
import LearningThroughPlay from "../components/Play-Group/LearningThroughPlay";
import DraggableCardDemo from "../components/Play-Group/DraggableCardDemo";
import Footer from "../components/Footer";

const Playgroup = () => {
  return (
    <>
      <PlayGroupHero />
      <HomeAway />
      <LearningThroughPlay />
      <DraggableCardDemo />
      <Footer />
    </>
  );
};

export default Playgroup;
