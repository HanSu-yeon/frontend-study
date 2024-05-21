import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "아이템1", status: "active" },
    { id: 2, text: "아이템2", status: "active" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (updated) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === updated.id ? updated : todo;
      })
    );
  };

  const deleteTodo = (deleted) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== deleted.id;
      })
    );
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} onDelTodo={deleteTodo} onUpdateTodo={updateTodo} />
        ))}
      </ul>
      <AddItem addTodo={addTodo} />
    </div>
  );
}
