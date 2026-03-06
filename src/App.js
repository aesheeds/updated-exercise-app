import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import WeightExercise from "./components/WeightExercise";
import "./App.css";

// Exercise data
const Exercises = [
  {
    id: "pushups",
    name: "Push-ups",
    type: "repetition",
  },
  {
    id: "plank",
    name: "Plank",
    type: "duration",
  },
  {
    id: "bench-press",
    name: "Bench Press",
    type: "weight",
  },
];

// Main App
export default function App() {
  // Tracks the selected exercise. If null, shows the menu.
  const [selectedExercise, setSelectedExercise] = useState(null);

  // If no exercise is selected, show the menu
  if (!selectedExercise) {
    return (
      <div className="app">
        <h1 className="title">Exercise App</h1>

        <div className="menu">
          {
            // Map over the exercises and create a button for each
            Exercises.map((ex) => (
              <button
                // Use the exercise id as the key, and set the selected exercise on click
                key={ex.id}
                className="menuButton"
                onClick={() => setSelectedExercise(ex)}
              >
                {ex.name}
              </button>
            ))
          }
        </div>
      </div>
    );
  }

  // If an exercise is selected, show the appropriate screen
  let exerciseScreen = null;

  // Check the type of the selected exercise and render the corresponding component

  // If it's a repetition exercise, render the RepetitionExercise component. Else if it's a duration exercise, render the DurationExercise component.
  if (selectedExercise.type === "repetition") {
    exerciseScreen = <RepetitionExercise name={selectedExercise.name} />;
  } else if (selectedExercise.type === "duration") {
    exerciseScreen = <DurationExercise name={selectedExercise.name} />;
  }
  // If it's a weight exercise, render the WeightExercise component
  else if (selectedExercise.type === "weight") {
    exerciseScreen = <WeightExercise name={selectedExercise.name} />;
  }

  // Render the exercise screen with a back button to return to the menu
  return (
    <div className="app">
      <div className="topBar">
        <button
          className="backButton"
          onClick={() => setSelectedExercise(null)}
        >
          ←
        </button>
        <h1 className="screenTitle">{selectedExercise.name}</h1>
      </div>

      {exerciseScreen}
    </div>
  );
}
