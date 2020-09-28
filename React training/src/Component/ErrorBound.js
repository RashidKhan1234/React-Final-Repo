import React, { Component } from "react";

class ErrorBounding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: true
    };
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something Went Wrong</h1>;
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBounding;
