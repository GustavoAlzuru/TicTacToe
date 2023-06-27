import { WINNER } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
  for (const combos of WINNER) {
    const [a, b, c] = combos
    if (
      boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}
