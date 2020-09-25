import React from "react";
function Memo({ name }) {
  console.log("Child");
  return <div>RK {name}</div>;
}
export default React.memo(Memo);
