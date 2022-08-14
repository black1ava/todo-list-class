import React, { Component } from "react";

import Button from "../Button";
import Task from "./Task";

class TodoList extends Component {
  render() {
    const taskListMarkup = this.props.tasks.map((task, index) => {
      return (
        <Task
          name={task.name}
          key={index}
          completed={task.completed}
          onToggleStatus={() => this.props.onTaskStatusToggle(index)}
          onDelete={() => this.props.onDeleteTask(index)}
        />
      );
    });

    return (
      <div className="todo-container">
        <div className="tasks">{taskListMarkup}</div>
        <Button
          name="+ New Task"
          className="add-todo"
          onAction={this.props.onModalStatusToggle}
        />
      </div>
    );
  }
}

export default TodoList;
