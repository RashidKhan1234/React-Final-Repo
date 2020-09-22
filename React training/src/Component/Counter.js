import React, { Component } from "react";

class Counter extends Component {
  constructor(count) {
    super();
    this.state = {
      count: 0
    };
  }
  Increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.Increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
