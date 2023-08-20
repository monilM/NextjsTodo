import React from "react";
import TodoItem from "./TodoItem";
import DashboardStyleWrapper from "./Dashboard.style";
import Heading from "@/components/atoms/Heading";

const Dashboard = ({ onClickAddTodo, todos, onUpdateTodo, handleDelete }) => {
  return (
    <DashboardStyleWrapper>
      <div className="container">
        <div className="dashboardBox">
          <Heading type="h2" className="titleStyle">
            Dashboard
          </Heading>
          <button onClick={onClickAddTodo}>Add Todo</button>
          {todos && todos.length > 0 && (
            <>
              <label className="listTitleStyle">Todo list:</label>
              <ul className="todo-list">
                {todos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={handleDelete}
                    onUpdate={onUpdateTodo}
                  ></TodoItem>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </DashboardStyleWrapper>
  );
};

export default Dashboard;
