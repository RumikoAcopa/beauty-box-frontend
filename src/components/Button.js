import React, { Component } from "react";

class Button extends Component {
  state = {
    name: "",
    counter: 0
  };

  // increaseCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 })
  // }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnClick = () => {
    this.setState({ counter: this.state.counter + this.state.name.length });
  };

  render() {
    return (
      <div>
        <input
          type='text'
          name='name'
          // onChange={this.handleChange}
          value={this.state.name}
          onChange={this.handleOnChange}
          placeholder='name'
          className={`border-double border-2 border-pink-200 w-full p-4 mb-4 ${"border-red-400"}`}
        />

        <button onClick={() => this.handleOnClick()}>Click Me</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Button;
