import React, { Component } from "react";
import ChildFW from "./ChildFWRef";
class ParentFw extends Component {
  constructor() {
    super();
    this.FocusFW = React.createRef();
  }
  CLickHandler = () => {
    this.FocusFW.current.focus();
  };
  render() {
    return (
      <React.Fragment>
        <ChildFW ref={this.FocusFW} />
        <button onClick={this.CLickHandler}>Focus Input</button>
      </React.Fragment>
    );
  }
}
export default ParentFw;
