import React, { useState } from "react";
import TodoForm from "@/components/templates/TodoForm";
import { auth } from "@/utils/firebase";
import { addTodo, updateTodo } from "@/utils/todotasksUtil";
import { NextRouterWrapper } from "@/routes";

import { DASHBOARD_PAGE } from "@/routes/paths";
import { useRouter } from "next/router";
import Loader from "@/components/atoms/Loader";

const TodoEditAddPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userId = auth?.currentUser?.uid;

  const router = useRouter();
  console.log("router.query", router.query);
  const { todo } = router.query;
  let todoData = null;
  console.log("todo", todo);
  if (todo) {
    todoData = JSON.parse(todo);
  }

  const handleSubmit = async (data) => {
    setIsLoading(true);
    if (todoData) {
      // Perform update logic using data
      console.log("Updating todo:", data);
      await updateTodo(todoData.id, data);
      setIsLoading(false);
      NextRouterWrapper({ pathName: DASHBOARD_PAGE });
    } else {
      // Perform add logic using data
      await addTask(data);
      setIsLoading(false);
    }
  };

  const addTask = async (todoData) => {
    // const todosCollectionRef = await firestore
    //   .collection(`${userId}-tasks`)
    //   .doc(userId)
    //   .collection(`${userId}-tasks`);

    try {
      await addTodo(userId, todoData);
      console.log("Adding todo1:", todoData);
      NextRouterWrapper({ pathName: DASHBOARD_PAGE });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader /> // Display the loader while loading
      ) : null}
      <TodoForm todoData={todoData} onSubmit={handleSubmit} />
    </div>
  );
};

export default TodoEditAddPage;
