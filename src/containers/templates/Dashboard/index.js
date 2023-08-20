import React, { useState, useEffect } from "react";
import Dashboard from "@/components/templates/Dashboard";
import { NextRouterWrapper } from "@/routes";
import { TODO_PAGE } from "@/routes/paths";
import { getAllDocs } from "@/utils/todotasksUtil";
import { deleteTodo } from "@/utils/todotasksUtil";
import Loader from "@/components/atoms/Loader";

const DashboardContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllTasks = async () => {
    await getAllDocs()
      .then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("alltodos", newData);
        setIsLoading(false);
        setTodos(newData);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
        return error;
      });
  };
  // Fetch todos when the component mounts
  useEffect(() => {
    getAllTasks();
  }, []);

  const handleDelete = async (todoId) => {
    // Implement logic to delete the todo with the specified ID
    setIsLoading(true);
    await deleteTodo(todoId);
    await getAllTasks();
  };

  const onClickAddTodo = (todo) => {
    console.log("tododashbaord", todo);
    if (todo && todo.id) {
      NextRouterWrapper({
        as: `${TODO_PAGE}/${todo.id}`,
        pathName: `${TODO_PAGE}?todo=${JSON.stringify(todo)}`,
      });
    } else {
      NextRouterWrapper({
        pathName: TODO_PAGE,
      });
    }
  };
  const onUpdateTodo = (todo) => {
    onClickAddTodo(todo);
  };

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display the loader while loading
      ) : null}
      <Dashboard
        onClickAddTodo={onClickAddTodo}
        todos={todos}
        handleDelete={handleDelete}
        onUpdateTodo={onUpdateTodo}
      ></Dashboard>
    </div>
  );
};

export default DashboardContainer;
