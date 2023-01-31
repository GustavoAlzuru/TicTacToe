import React from 'react'
import { TURNS } from '../constants'

const Winnerplayer = ({ winner, turns }) => {
  if (winner === null) return
  const textWinner = winner === false ? 'It is a tie' : `The winner is ${turns === TURNS.x ? TURNS.o : TURNS.x}`
  return (
    <>
      <p>{textWinner}</p>
    </>
  )
}

export default Winnerplayer
