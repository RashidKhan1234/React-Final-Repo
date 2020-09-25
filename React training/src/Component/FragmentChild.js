import React from "react";
import Parent from "./FragmentParent";
function FragmentChild() {
  return (
    <table>
      <tbody>
        <tr>Parent</tr>
        <Parent />
      </tbody>
    </table>
  );
}
export default FragmentChild;
