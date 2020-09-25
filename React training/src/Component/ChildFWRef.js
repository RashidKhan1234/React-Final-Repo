import React from "react";

// function ForwardRef() {
//   return <input type="text"></input>;
// }

const ForwardRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}></input>
    </div>
  );
});

export default ForwardRef;
