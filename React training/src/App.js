import React, { Component } from "react";
import "./styles.css";
import Greet from "./Component/Greeting";
import Welcome from "./Component/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet></Greet>
        <Welcome></Welcome>
      </div>
    );
  }
}

export default App;
