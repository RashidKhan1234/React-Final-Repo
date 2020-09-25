import React, { Component } from "react";

class Focus_Ref extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();
    this.CBRef = null;
    this.ABC = (element) => {
      this.CBRef = element;
    };
  }
  componentDidMount() {
    // this.Ref.current.focus();
    if (this.CBRef) {
      this.CBRef.focus();
    }
  }
  HandleClick = () => {
    alert(this.Ref.current.value);
  };
  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.Ref}></input>
        <input type="text" ref={this.ABC}></input>
        <button onClick={this.HandleClick}>Submit</button>
      </React.Fragment>
    );
  }
}
export default Focus_Ref;
