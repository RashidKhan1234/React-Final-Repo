import React, { Component } from "react";
// import RegularCom from "./RegulatCom";
// import PureComp from "./PureComponent";
import Memo from "./Memo";
class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rashid"
    };
  }
  componentDidMount() {
    this.setState({
      name: "Rashid"
    });
    // setInterval(() => {
    //   this.setState({
    //     name: "Rashid"
    //   });
    // }, 2000);
  }
  render() {
    console.log("Parent");
    return (
      <>
        <Memo name={this.state.name} />
        {/* <PureComp name={this.state.name} />
        <RegularCom name={this.state.name} /> */}
      </>
    );
  }
}
export default Parent;
