// imports
import React from "react";
import Tile from "./tile";
import Strike from "./strike";
import "./board.css";

// renders a 3x3 grid of tiles, and a strikethrough when it is called
function Board({tiles, onTileClick, playerTurn, strikeClass}) {
     return (
          <div className="board">
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={tiles[1]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)} value={tiles[2]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={tiles[3]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)} value={tiles[4]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)} value={tiles[5]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)} value={tiles[6]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)} value={tiles[7]} />
               <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tiles[8]} />
               <Strike strikeClass={strikeClass} />
          </div>
     );
}

export default Board;