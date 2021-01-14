import React from "react";

import CheckButton from "./../common/check";
import EditButton from "./../common/edit";
import Delete from "./../common/delete";

const TodoList = ({ todoList, onCheck, onDelete }) => {
  return (
    <ul className="list-group ">
      {todoList.map((todoItem) => (
        <li
          key={todoItem.id}
          className={
            todoItem.isCompleted
              ? "list-group-item list-group-item-warning d-flex  justify-content-between align-items-center"
              : "list-group-item d-flex justify-content-between align-items-center"
          }
        >
          <CheckButton
            isChecked={todoItem.isCompleted}
            onCheck={() => onCheck(todoItem)}
          />
          {todoItem.desc}
          <EditButton />
          <Delete onDelete={() => onDelete(todoItem)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
