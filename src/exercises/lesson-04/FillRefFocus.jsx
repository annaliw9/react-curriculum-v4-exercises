// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';
export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" placeholder="Type here..." ref={inputRef} />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

//EXPLANATION:
//In this component, we use the useRef hook to create a reference to the input element. The inputRef variable holds a reference to the input DOM node. When the button is clicked, the focusInput function is called, which uses inputRef.current.focus() to programmatically focus the input field. This demostrates how useRef can be used to directly interact with DOM elements without causing re-renders, making it a powerful tool for managing focus and other imperative actions in React components.
