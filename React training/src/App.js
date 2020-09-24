import React, { Component } from "react";
import "./styles.css";
import Greet from "./Component/Greeting";
import Welcome from "./Component/Welcome";
import Hello from "./Component/HelloWithJSX";
import HelloProps from "./Component/Props";
import Message from "./Component/MessageWithState";
import Counter from "./Component/Counter";
import ClickMe from "./Component/EventClick";
import ClickfromClass from "./Component/eventClickFromClass";
import EventBind from "./Component/EventBindFour";
import PareCom from "./Component/ParentComponent";
import Conditional from "./Component/COnditionalBased";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome name="Rashid Props Class" />
        <Hello />
        <HelloProps name="Rashid Props">
          <p>Rashid Paragraph</p>
        </HelloProps>
        <Message />
        <Counter />
        <ClickMe />
        <ClickfromClass />
        <EventBind />
        <PareCom />
        <Conditional />
      </div>
    );
  }
}

export default App;
