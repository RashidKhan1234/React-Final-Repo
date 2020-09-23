import React, { Component } from "react";
import ChildElem from "./ChildComponent";
class ParentCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Parent"
    };
    this.EventHand = this.EventHand.bind(this);
  }
  EventHand(childMessage) {
    alert(`Hello ${this.state.message} from ${childMessage}`);
  }

  render() {
    return <ChildElem greetHand={this.EventHand} />;
  }
}
export default ParentCom;
