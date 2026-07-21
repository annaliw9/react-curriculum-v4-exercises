// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

import { useState } from 'react';
export default function BugProps({ name = 'friend' }) {
  // let message = 'Hello, ' + name;
  const [message, setMessage] = useState('Hello,' + name);

  function handleChange() {
    // message = 'Hi, ' + name + '!';
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// The probleme with this component is that the message variable is being declared as a regular/local variable, which means that React does not track its value. When the handleChange function is called, it updates the message variable, but React does not know that it needs to re-render the component to reflect the new value. To fix this, we need to use the useState hook to decleare the message variable as a state variable. This way, when we call setMessage to update the value, React will know to re-render the component and display the new message.
