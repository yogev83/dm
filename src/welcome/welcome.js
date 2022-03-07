import React from "react";

import "./welcome.css";

export function Welcome({ onStart }) {
  const [state, setState] = React.useState([]);
  const [error, setError] = React.useState("");

  const onStartClick = React.useCallback(() => {
    if (state[0] && state[1]) {
      onStart(state);
    } else {
      setError("Both options are required!");
    }
  }, [onStart, state]);

  const onChange = (id, e) => {
    setState((s) => {
      if (id === 0) {
        return [e.target.value, s[1]];
      } else {
        return [s[0], e.target.value];
      }
    });
  };

  return (
    <div className="welcome">
      <form>
        <h1>
          What options do you want <br /> to choose between?
        </h1>
        <div className="question">
          <input
            type="text"
            required
            onChange={(e) => {
              onChange(0, e);
            }}
          />
          <label>First Option</label>
        </div>
        <div className="question">
          <input
            type="text"
            required
            onChange={(e) => {
              onChange(1, e);
            }}
          />
          <label>Second Option</label>
        </div>
        <button onClick={onStartClick}>Lets Go!</button>
        <p className="error">{error}</p>
      </form>
    </div>
  );
}
