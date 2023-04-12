import React, { useState, useEffect } from "react";
import axios from "axios";

interface Obj {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const Todos = () => {
  const [todoList, setTodoList] = useState<Obj[]>();

  useEffect(() => {
    (async () => {
      const todos = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodoList(todos.data);
    })();
  }, []);

  return todoList ? (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index} data-testid="todo">
          {todo.title}
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading ....</p>
  );
};
export default Todos;
