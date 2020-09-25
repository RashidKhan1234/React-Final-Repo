import React, { Component } from "react";
import RegularCom from "./RegulatCom";
import PureComp from "./PureComponent";
class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rashid"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Rashid"
      });
    }, 2000);
  }
  render() {
    return (
      <>
        <PureComp name={this.state.name} />
        <RegularCom name={this.state.name} />
      </>
    );
  }
}
export default Parent;
