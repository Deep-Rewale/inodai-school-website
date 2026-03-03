import React from "react";
import BoardOfHero from "../components/About-us/Board Of Directors/BoardOfHero";
import Directors from "../components/About-us/Board Of Directors/Directors";
import BoardMembers from "../components/About-us/Board Of Directors/BoardMembers";
import Footer from "../components/Footer";

const Board = () => {
  return (
    <>
      <BoardOfHero />
      <Directors />
      <BoardMembers />
      <Footer />
    </>
  );
};

export default Board;
