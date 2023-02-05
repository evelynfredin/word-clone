import React, { useState } from "react";

function GuessInput({ handleDisplayGuesses, disabled }) {
  const [guess, setGuess] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) return;
    console.log({ guess: guess });
    handleDisplayGuesses(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        minLength={5}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
