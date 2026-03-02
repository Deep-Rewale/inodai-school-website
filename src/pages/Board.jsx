import React from 'react'
import BoardOfHero from '../components/aboutUs components/Board Of Directors/BoardOfHero'
import Directors from '../components/aboutUs components/Board Of Directors/Directors'
import BoardMembers from '../components/aboutUs components/Board Of Directors/BoardMembers'
import Footer from "../components/Footer"

const Board = () => {
  return (
    <>
      <BoardOfHero />
      <Directors />
      <BoardMembers />
      <Footer />
    </>

  )
}

export default Board