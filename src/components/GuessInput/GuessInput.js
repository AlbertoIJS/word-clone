import React, { useState } from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = useState("");

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    addGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        disabled={disabled}
        required
        minLength={5}
        maxLength={5}
        placeholder='e.g. "WORLD"'
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
