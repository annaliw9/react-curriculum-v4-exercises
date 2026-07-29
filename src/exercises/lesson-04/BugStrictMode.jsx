// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
//StrictMode intentionnally double-invokes certain lifecycle methods and effects in development mode to help identify side effects and potential bugs. In this case, the useEffect hook is being called twice, which causes the setInterval to be set up twice, leading to the count incrementing encorrectly. By using the cleanup function to clear the interval, we ensure that only one interval is active at a time, preventing the count from incrementing too quickly.
