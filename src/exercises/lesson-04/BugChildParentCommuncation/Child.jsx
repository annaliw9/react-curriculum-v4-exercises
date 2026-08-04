export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

//EXPLANATION:
//We need to pass the increment function from the Parent component to the Child component as a prop. This allows the Child component to call the increment function when the button is clicked, which updates the counter in the Parent component.
