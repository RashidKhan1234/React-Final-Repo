import React, { Component } from "react";

class Event_Four_Method extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hello"
    };
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  ClickHandler() {
    this.setState({
      message: "Thank You"
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message} .</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>Click </button> */}
        {/* <button onClick={() => this.ClickHandler()}>Click ME</button> */}
        <button onClick={this.ClickHandler}>Click </button>
      </div>
    );
  }
}
export default Event_Four_Method;
