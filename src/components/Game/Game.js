import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameResult from "../GameResult/GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningGuess, setWinningGuess] = useState("");

  const handleDisplayGuesses = (newGuess) => {
    const newGuessList = [...guessList];
    newGuessList.push(newGuess);
    setGuessList(newGuessList);
    gameResult(newGuess);
  };

  const gameResult = (attempt) => {
    const win = attempt === answer;
    const lose = guessList.length >= 5;
    setIsGameOver(win || lose);
    setWinningGuess(win && attempt);
  };

  return (
    <>
      <GuessResults results={guessList} answer={answer} />
      <GuessInput
        handleDisplayGuesses={handleDisplayGuesses}
        disabled={isGameOver}
      />
      {isGameOver && (
        <GameResult
          totalGuesses={guessList.length}
          answer={answer}
          winningGuess={winningGuess}
        />
      )}
    </>
  );
}

export default Game;
