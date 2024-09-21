// imports
import React from "react";
import "./tile.css";

// displays the translucent current player's symbol on a tile when hovering, if the tile is empty
// renders the tile
function Tile({className, value, onClick, playerTurn}) {
     let hoverClass = null;
     if (value === null && playerTurn != null) {
          hoverClass = `${playerTurn.toLowerCase()}-hover`;
     }
     return (
          <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>{value}</div>
     );
}

export default Tile;