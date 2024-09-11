import React from "react";
import Tile from "./tile";
import Strike from "./strike";
import "./board.css";

function Board() {
     return (
          <div className="board">
               <Tile />
               <Tile />
               <Tile />
               <Tile />
               <Tile />
               <Tile />
               <Tile />
               <Tile />
               <Tile />
               <Strike />
          </div>
     );
}

export default Board;