import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onAction} className={this.props.className}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
