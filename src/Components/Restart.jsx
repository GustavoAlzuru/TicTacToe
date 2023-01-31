import React from 'react';
import { Button } from 'react-bootstrap';
import { TURNS } from '../constants';

const Restart = ({setWinner, setTurns, setBoard}) => {
    const restart = () =>{
        setWinner(null)
        setTurns(TURNS.x)
        setBoard(Array(9).fill(null))
        window.localStorage.clear()
    }
    return (
        <Button style={{margin: '20px'}} onClick={restart}>Restart the game</Button>
    );
}

export default Restart;
