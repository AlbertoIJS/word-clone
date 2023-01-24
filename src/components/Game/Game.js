import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import SubmittedGuesses from "../SubmitedGuesses";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addGuess(guess) {
    setGuesses([...guesses, guess.toUpperCase()]);
  }

  return (
    <>
      <SubmittedGuesses guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
