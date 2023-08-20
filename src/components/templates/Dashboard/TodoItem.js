import React from "react";
import "./Dashboard.style";
import DashboardStyleWrapper from "./Dashboard.style";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleUpdate = () => {
    onUpdate(todo);
  };

  return (
    <DashboardStyleWrapper>
      <li className="todo-item">
        <span>{todo?.title}</span>
        <span>{todo?.description}</span>
        <div className="todo-item-buttons">
          <button onClick={handleUpdate}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </li>
    </DashboardStyleWrapper>
  );
};

export default TodoItem;
