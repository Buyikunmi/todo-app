import React, { Component } from "react";

import Form from "../common/form";
import TodoList from "./todoList";

// container
// state list of todo
// delete button
// add button
// todo list

class Todo extends Component {
  state = {
    todoList: [
      {
        id: 1,
        desc: "Eat Food",
        isCompleted: false,
      },
      {
        id: 2,
        desc: "Sleep",
        isCompleted: false,
      },
      {
        id: 3,
        desc: "Code",
        isCompleted: false,
      },
      {
        id: 4,
        desc: "Repeat",
        isCompleted: false,
      },
    ],
    inputValue: "",
  };

  handleDelete = (todoItem) => {
    const todoList = [...this.state.todoList].filter(
      (item) => item !== todoItem
    );

    this.setState({ todoList });
  };

  handleCheckBox = (todoItem) => {
    const todoList = [...this.state.todoList].map((item) => {
      if (item === todoItem) item.isCompleted = !item.isCompleted;
      return item;
    });

    this.setState({ todoList });
  };

  handleOnChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { inputValue, todoList: formerList } = this.state;
    const newItem = {
      id: formerList.length + 1,
      desc: inputValue,
      isCompleted: false,
    };
    const todoList = [...formerList, newItem];
    this.setState({ todoList, inputValue: "" });
  };
  render() {
    return (
      <div className="container center my-2 w-50">
        <Form
          inputValue={this.state.inputValue}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
        />
        <TodoList
          todoList={this.state.todoList}
          onCheck={(todoItem) => this.handleCheckBox(todoItem)}
          onDelete={(todoItem) => this.handleDelete(todoItem)}
        />
      </div>
    );
  }
}

export default Todo;
