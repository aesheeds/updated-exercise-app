import React, { useState } from "react";

// component for weight exercises, with sets, reps, and weight 
export default function WeightExercise({ name }) {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  // function to reset values
  const reset = () => {
    setSets(0);
    setReps(0);
    setWeight(0);
  };

  // component has buttons to increase and decrease sets, reps, and weight (by 5 lbs). Reset button at the bottom. 
  return (
    <div>
      <h2>Weight</h2>

      <div style={{ display: "grid", gap: "16px", maxWidth: "420px" }}>
        <div>
          <div style={{ fontWeight: 700 }}>Sets</div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button onClick={() => setSets((s) => Math.max(0, s - 1))}>
              -
            </button>
            <div style={{ fontSize: "48px", fontWeight: 700 }}>{sets}</div>
            <button onClick={() => setSets((s) => s + 1)}>+</button>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700 }}>Reps</div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button onClick={() => setReps((r) => Math.max(0, r - 1))}>
              -
            </button>
            <div style={{ fontSize: "48px", fontWeight: 700 }}>{reps}</div>
            <button onClick={() => setReps((r) => r + 1)}>+</button>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: 700 }}>Weight (lbs)</div>

          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <button onClick={() => setWeight((w) => Math.max(0, w - 5))}>
                -5
            </button>
            <div style={{ fontSize: "48px", fontWeight: 700 }}>{weight}</div>
            <button onClick={() => setWeight((w) => w + 5)}>
                +5
            </button>
          </div>
        </div>

        <button onClick={reset}>Reset</button>
        
      </div>
    </div>
  );
}
