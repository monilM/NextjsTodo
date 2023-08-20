import Heading from "@/components/atoms/Heading";
import React, { useState, useEffect } from "react";
import TodoFormStyleWrapper from "./TodoForm.style";

const TodoForm = ({ todoData, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (todoData) {
      setTitle(todoData.title);
      setDescription(todoData.description);
    }
  }, [todoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <TodoFormStyleWrapper>
      <div className="container">
        <div className="dashboardBox">
          <Heading type="h2" className="titleStyle">
            {todoData ? "Edit Todo" : "Add Todo"}
          </Heading>
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              Title:
              <input
                type="text"
                value={title}
                className="form-input"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label className="form-label">
              Description:
              <input
                type="text"
                value={description}
                className="form-input"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <button className="form-button" stype="submit">
              {todoData ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </TodoFormStyleWrapper>
  );
};

export default TodoForm;
