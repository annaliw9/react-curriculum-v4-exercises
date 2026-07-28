// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The issue with this component is that setCount(count+1) is using the current value of count to update the state. This can lead to unexpected behavior if multiple updates are made in quick succession, as the state may not have updated yet. Instead, we should use the functional form of setCount, which takes a function that receives the previous state ans returns the new state. This ensures that we are alsways working with the most up-to-date value of count, even if multiple updates are queued. Also, we should use const instead of let for the count variable because the useState hook returns a constant value that should not be reassigned.
