import React from "react";
import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(0, 5).map((col) => (
        <span key={col} className="cell">
          {word && word[col]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
