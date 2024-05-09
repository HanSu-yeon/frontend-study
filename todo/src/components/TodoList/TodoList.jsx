import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { idx: "0", text: "item1", status: "active" },
    { idx: "1", text: "item2", status: "active" },
  ]);

  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트
    setTodos([...todos, todo]);
  };
  //check여부
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.idx === updated.idx ? updated : t)));
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.idx !== deleted.idx));
  };

  return (
    <section>
      <ul>
        {todos.map((item) => {
          return (
            <Todo
              key={item.idx}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      {/* 등록되면 콜백함수 호출 */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
