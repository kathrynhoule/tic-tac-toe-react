import React from "react";
import "./tile.css";

function Tile({className}) {
     return (
          <div className={`tile ${className}`}>X</div>
     );
}

export default Tile;