import React from "react";
import Tile from "./tile";
import Strike from "./strike";

function Board() {
     return (
          <div>
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