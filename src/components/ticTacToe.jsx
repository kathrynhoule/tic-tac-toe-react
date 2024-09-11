import React from "react";
import { useState } from "react";
import Board from "./board";

function TicTacToe() {
     const [tiles, setTiles] = useState(Array(9).fill(null));
     return (
          <div>
               <h1>Tic Tac Toe</h1>
               <Board tiles={tiles} />
          </div>
     );
}

export default TicTacToe;