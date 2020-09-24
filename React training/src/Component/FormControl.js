import React, { Component } from "react";

class FormContr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      textarea: "",
      select: ".Net"
    };
  }
  UserNameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };
  TextAreaHandler = (event) => {
    this.setState({
      textarea: event.target.value
    });
  };
  DDHandler = (event) => {
    this.setState({
      select: event.target.value
    });
  };
  SubmitHandler = (event) => {
    alert(`${this.state.username} ${this.state.textarea} ${this.state.select}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.UserNameHandler}
          />
          <label>Text Area</label>
          <textarea
            type="text"
            value={this.state.textarea}
            onChange={this.TextAreaHandler}
          />
          <label>drop down</label>
          <select value={this.state.select} onChange={this.DDHandler}>
            <option>.Net</option>
            <option>React</option>
            <option>Sql</option>
          </select>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
export default FormContr;
