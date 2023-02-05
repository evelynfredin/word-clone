import React from "react";

function GameResult({ totalGuesses, answer, winningGuess }) {
  const setResult = !winningGuess && totalGuesses >= 5 ? "sad" : "happy";

  return (
    <div className={`banner ${setResult}`}>
      {setResult === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {totalGuesses} {totalGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong> {totalGuesses}.
        </p>
      )}
    </div>
  );
}

export default GameResult;
