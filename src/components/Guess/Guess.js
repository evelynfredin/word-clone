import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const checkGuessResult = (slot) => {
    const check = checkGuess(guess, answer);
    return check[slot].status;
  };
  return (
    <p className="guess">
      {range(5).map((slot) => (
        <span key={slot} className={`cell ${guess && checkGuessResult(slot)}`}>
          {guess ? guess[slot] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
