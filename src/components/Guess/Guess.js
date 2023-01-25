import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const validation = word && checkGuess(word, answer);
  return (
    <p className="guess">
      {range(0, 5).map((col) => (
        <Cell
          key={col}
          letter={word && validation[col].letter}
          status={word && validation[col].status}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  const className = status ? `${status} cell` : "cell";
  return <span className={className}>{letter}</span>;
}

export default Guess;
