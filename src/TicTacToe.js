import React, { useState } from "react"
import Board from "./Board"
function TicTacToe(props){
    return (
      <div>
        <div className="game">
            <Board />
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>        
      </div>
    );
}

export default TicTacToe