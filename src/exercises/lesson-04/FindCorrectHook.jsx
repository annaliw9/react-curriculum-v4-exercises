// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';
export default function FindCorrectHook() {
  const count = useRef(0);

  function handleClick() {
    count.current += 1;
    console.log(count.current);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}> Clicks</button>
    </div>
  );
}

//EXPLANATION:
//We need to use useRef here because we want to update the count without causing a re-render of the component. If we used useSate instead, every time we updated the count, it would trigger a re-render, which is unnecessary for this use case. By using useRef, we can maintain the count value across renders without affecting the component's rendering behaviour.
