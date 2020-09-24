import React, { Component } from "react";

class ConditionalBasedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsLogIn: true
    };
  }

  render() {
    return this.state.IsLogIn && <div>Welcome Rashid</div>;
    // let message;
    // if (this.state.IsLogIn) {
    //   message = <div>Welcome Rashid</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return this.state.IsLogIn ? (
    //   <div>Welcome Rashid</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // if (this.state.IsLogIn) {
    //   return <div>Welcome Rashid</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default ConditionalBasedApp;
