import React, { Component } from "react";

class Task extends Component {
  render() {
    return (
      <div className="task">
        <div onClick={this.props.onToggleStatus}>
          <p
            className={
              this.props.completed ? "task-completed" : "task-incompleted"
            }
          >
            {this.props.name}
          </p>
        </div>
        <img
          className="icon"
          alt="trash"
          src={require("../../assets/trash.png")}
          onClick={this.props.onDelete}
        />
      </div>
    );
  }
}

export default Task;
