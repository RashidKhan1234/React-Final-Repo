import React, { Component } from "react";

class Counter extends Component {
  constructor(count) {
    super();
    this.state = {
      count: 0
    };
  }
  Increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
  IncTen() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.IncTen()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
