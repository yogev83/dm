import React from "react";

import "./choice.css";

export function Choice({ choice, onRestart }) {
  return (
    <div className="choice">
      <form>
        <h1>Well, there you have it!</h1>
        <div className="yourChoiceWrapper">
          <h1>Your choice is: </h1>
          <h1 className="yourChoice">{choice.title}</h1>
        </div>
        <button onClick={onRestart}>Start Over</button>
      </form>
    </div>
  );
}
