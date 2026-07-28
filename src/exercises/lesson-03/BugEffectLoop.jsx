//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

//Explanation:
//The problem with this component is that the useEffect hook is being called on every render, which causes the setCount function to be called repeatedly and creates an infinite loop. To fix this, we need to add an empty dependency array as the second argument to the useEffect hook. This will ensure that the effect only runs once when the component mounts, and not on every render.
