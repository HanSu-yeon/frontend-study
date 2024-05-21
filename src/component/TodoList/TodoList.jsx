import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "아이템1", status: "active" },
    { id: 2, text: "아이템2", status: "active" },
  ]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
