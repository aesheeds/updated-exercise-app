import React, { useEffect, useMemo, useState } from "react";

// Function to pad nummbers to 2 digits. for timer display
function pad2(n) {
  return String(n).padStart(2, "0");
}

// Function to pad numbers to 3 digits. for timer display (milliseconds)
function pad3(n) {
  return String(n).padStart(3, "0");
}

// Component for duration based exercises. Displays a timer with start/stop and reset buttons.
export default function DurationExercise({ name }) {
  // State to track elapsed time in milliseconds
  const [elapsedMs, setElapsedMs] = useState(0);
  // State to track if the timer is running
  const [isRunning, setIsRunning] = useState(false);

  // Effect to update the timer every 10 milliseconds when running
  useEffect(() => {
    // If not running, do nothing
    if (!isRunning) return;

    // Set up an interval to update elapsed time every 10ms
    const id = setInterval(() => {
      setElapsedMs((ms) => ms + 10);
    }, 10);

    // Clean up fucnttion to clear interval when component is no longer on screen or when isRunning changes
    return () => clearInterval(id);
  }, [isRunning]);

  // Formt the elapsed time into a reasonable value 00:00.000 using useMemo
  const formatted = useMemo(() => {
    // Calculate minutes, seconds, and milliseconds from elapsedMs
    const totalSeconds = Math.floor(elapsedMs / 1000);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = elapsedMs % 1000;
    // Return the formatted string
    return `${pad2(minutes)}:${pad2(seconds)}.${pad3(milliseconds)}`;
  }, [elapsedMs]);

  // Reset funtion to stop timer and reset elapsed time to 0
  const handleReset = () => {
    setIsRunning(false);
    setElapsedMs(0);
  };

  return (
    <div>
      <h2>Duration</h2>

      <div style={{ fontSize: "64px", fontWeight: "700", margin: "16px 0" }}>
        {formatted}
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        {!isRunning ? (
          // If not running, show start button. Else show stop button.
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  );
}
