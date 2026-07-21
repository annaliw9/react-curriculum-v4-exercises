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
    //  setCount(count + 1);
    setCount((prev) => prev + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

//Explanation:
//The problem with this component is that the useEffect hook is running on every render, which causes the component to enter an infinite loop of re-renders. To fix this, we need to add an empty dependency array as the second argument to useEffect. This tells React to only run the effect once when the component mounts, instead of on every render. Also, we should use the functional form of setCount, which takes a function that receives the previous state and returns the new state. This ensures that we are always working witht the most up-to-date value of count, even if multiple updates are queued.
//Count is 2 in the UI because of the strict mode in React 18. In strict mode, React intentionally double-invokes certain lifecycle methods (including useEffect) to help identify side effects and ensure that components are resilient to being mounted and unmounted multiple times. This means that the effect runs twice during development, leading to the count being incremented twice and resulting in a final value of 2.
