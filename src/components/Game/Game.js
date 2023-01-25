import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessSlots from "../GuessSlots";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");

  function addGuess(guess) {
    const uppercaseWord = guess.toUpperCase();
    const newGuesses = [...guesses, uppercaseWord];
    setGuesses(newGuesses);

    if (
      newGuesses.length === NUM_OF_GUESSES_ALLOWED &&
      uppercaseWord !== answer
    )
      setGameStatus("lose");
    if (guess === answer) setGameStatus("win");
  }

  return (
    <>
      <GuessSlots guesses={guesses} answer={answer} />
      <GuessInput
        addGuess={addGuess}
        disabled={guesses.length === 6 || gameStatus !== "playing"}
      />
      {gameStatus !== "playing" &&
        (gameStatus === "win" ? (
          <WonBanner numOfGuesses={guesses.length} />
        ) : (
          <LostBanner answer={answer} />
        ))}
    </>
  );
}

export default Game;
