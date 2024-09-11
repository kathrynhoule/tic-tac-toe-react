import React from "react";
import Tile from "./tile";
import Strike from "./strike";
import "./board.css";

function Board() {
     return (
          <div className="board">
               <Tile className='right-border bottom-border' />
               <Tile className='right-border bottom-border' />
               <Tile className='bottom-border' />
               <Tile className='right-border bottom-border' />
               <Tile className='right-border bottom-border' />
               <Tile className='bottom-border' />
               <Tile className='right-border' />
               <Tile className='right-border' />
               <Tile />
               <Strike />
          </div>
     );
}

export default Board;