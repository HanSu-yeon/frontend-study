import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
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
  //선택한 필터에 해당하는 todo만 들어있음
  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
      <ul>
        {filtered.map((item) => {
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

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
