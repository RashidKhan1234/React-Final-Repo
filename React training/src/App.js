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
import PersonList from "./Component/PersonList";
import CssClass from "./Component/InlineStyle";
import styles from "./Style.module.css";
import "./Style.css";
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
        <PersonList />
        <CssClass />
        <div>
          <h2 className={styles.success}>success</h2>
          <h2 className="error">error</h2>
        </div>
      </div>
    );
  }
}

export default App;
