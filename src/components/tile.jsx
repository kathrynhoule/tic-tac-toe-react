import React from "react";
import "./tile.css";

function Tile({className, value, onClick}) {
     return (
          <div onClick={onClick} className={`tile ${className}`}>{value}</div>
     );
}

export default Tile;