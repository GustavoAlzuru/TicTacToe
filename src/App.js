import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import Restart from './Components/Restart'
import Winnerplayer from './Components/Winnerplayer'
import { TURNS } from './constants'
import { checkWinnerFrom } from './Logic/CheckWinner'

function App () {
  const [winner, setWinner] = useState(null)
  const [turns, setTurns] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ? JSON.parse(turnFromLocalStorage) : TURNS.x
  })
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })

  const checkEndGame = (newBoard) => {
    return newBoard.every(square => square !== null)
  }

  function handleClick (index) {
    if (board[index] || winner) return
    const newBoard = [...board]
    const newTurn = turns === TURNS.x ? TURNS.o : TURNS.x
    setTurns(newTurn)
    newBoard[index] = turns
    setBoard(newBoard)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
    const checkwinner = checkWinnerFrom(newBoard)
    if (checkwinner) {
      setWinner(checkwinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  const text = winner === null ? `It is the turn of ${turns}` : ''

  return (
    <div className='App'>
      <Container>
        <main>
          <h1>Tic Tac Toe</h1>
          <Row>
            {board.map((square, index) =>
              <Col xs={4} key={index}>
                <div className='my-col' onClick={() => handleClick(index)}>
                  {square}
                </div>
              </Col>
            )}
          </Row>
          <Restart setWinner={setWinner} setTurns={setTurns} setBoard={setBoard} />
        </main>

        <div>
          <Winnerplayer winner={winner} turns={turns} />
          <p>{text}</p>
        </div>
      </Container>
    </div>
  )
}

export default App
