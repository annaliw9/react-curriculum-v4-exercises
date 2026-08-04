// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(e) {
    e.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

//EXPLANATION:
//There are two click events in this component: one for the outer div and one for the inner button. When the button is clicked, the event bubbles up to the outer div, triggering both click hadlers. To prevent this, we use e.stopPropagation() in the inner button's click handler, which stops the event from propagating to the outer div. This ensures that only the inner button's action triggers an alert when clicked.
