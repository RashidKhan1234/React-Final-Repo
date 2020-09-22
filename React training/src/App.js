import React, { Component } from "react";
import "./styles.css";
import Greet from "./Component/Greeting";
import Welcome from "./Component/Welcome";
import Hello from "./Component/HelloWithJSX";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Hello />
      </div>
    );
  }
}

export default App;
