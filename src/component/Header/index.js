import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Header;
