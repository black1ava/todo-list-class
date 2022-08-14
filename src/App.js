import React, { Component } from "react";

import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Modal from "./component/Modal";
import Button from "./component/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      modalStatus: false,
      task: "",
      tasks: [],
    };

    this.modalStatusToggle = this.modalStatusToggle.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskStatusToggle = this.handleTaskStatusToggle.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  modalStatusToggle() {
    this.setState({
      ...this.state,
      modalStatus: !this.state.modalStatus,
    });
  }

  handleTaskChange(event) {
    this.setState({
      ...this.state,
      task: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.task === "") {
      return;
    }

    this.setState({
      ...this.state,
      tasks: [
        ...this.state.tasks,
        {
          name: this.state.task,
          completed: false,
        },
      ],
      task: "",
      modalStatus: false,
    });
  }

  handleTaskStatusToggle(_index) {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task, index) =>
        _index === index
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      ),
    });
  }

  handleDeleteTask(_index) {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task, index) => index !== _index),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <Header className="header-container" name="Todo List" />
          <TodoList
            onModalStatusToggle={this.modalStatusToggle}
            tasks={this.state.tasks}
            onTaskStatusToggle={this.handleTaskStatusToggle}
            onDeleteTask={this.handleDeleteTask}
          />
        </div>
        <Modal status={this.state.modalStatus} onClose={this.modalStatusToggle}>
          <form onSubmit={this.handleSubmit}>
            <label>Task</label>
            <input value={this.state.task} onChange={this.handleTaskChange} />
            <Button name="Submit" className="submit" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default App;
