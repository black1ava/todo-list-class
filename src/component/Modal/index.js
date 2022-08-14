import React, { Component } from "react";

import Header from "../Header";
import Button from "../Button";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modalMarkup = this.props.status && (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header-container">
            <Header name="New Task" className="modal-header" />
            <Button
              name="x"
              className="modal-close"
              onAction={this.props.onClose}
            />
          </div>
          {this.props.children}
        </div>
      </div>
    );

    return <>{modalMarkup}</>;
  }
}

export default Modal;
