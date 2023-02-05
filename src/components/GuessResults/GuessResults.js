import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ results, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((slot) => (
        <Guess key={slot} guess={results[slot]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
