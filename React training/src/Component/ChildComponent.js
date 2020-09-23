import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHand("Child")}>
        Get Message From Parent
      </button>
    </div>
  );
}
export default ChildComponent;
