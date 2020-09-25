import React from "react";
import ReactDom from "react-dom";

function Portal() {
  return ReactDom.createPortal(
    <div>New Root</div>,

    document.getElementById("portal-demo")
  );
}
export default Portal;
