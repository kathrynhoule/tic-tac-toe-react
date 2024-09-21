// imports
import React from "react"
import "./Reset.css"
import GameState from "./GameState";

// renders a play again button when the game state is not in progress
// resets the game when the button is clicked
function Reset({gameState, onReset}) {
     if (gameState === GameState.inProgress) {
          return;
     }
     return (
          <button onClick={onReset} className="reset-button">Play Again</button>
     )
}

export default Reset;