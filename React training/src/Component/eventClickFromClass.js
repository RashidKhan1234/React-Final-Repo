import React, { Component } from "react";

class ClickFromClass extends Component {
  Click_() {
    alert("click from class");
  }
  render() {
    return (
      <div>
        <button onClick={this.Click_}>click me from class</button>
      </div>
    );
  }
}
export default ClickFromClass;
