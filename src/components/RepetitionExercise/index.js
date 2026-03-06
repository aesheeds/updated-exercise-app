import React, { useState } from "react";

// Repetition exercise component. takes a name and displays a counter with + and reset buttons
export default function RepetitionExercise({ name }) {
  // Count states to track num of reps
  const [count, setCount] = useState(0);

  // Return the UI for the repetition exercise
  return (
    <div>
      <h2>Repetitions</h2>

      <div style={{ fontSize: "64px", fontWeight: "700", margin: "16px 0" }}>
        {count}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      
    </div>
  );
}
