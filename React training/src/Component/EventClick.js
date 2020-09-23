import React from "react";

function Click_() {
  function clickHandler() {
    alert("button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>click me</button>
    </div>
  );
}

export default Click_;
