import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

//EXPLANATION:
// In order to update the count in the Parent component when the button in the Child component is clicked, we need to pass a function from the Parent to the Child as a prop. The Child component can then call this function when its button is Clicked, which will trigger the state update in the Parent component, incrementing the counter.
