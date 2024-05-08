import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
// import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { idx: "0", text: "item1", status: "active" },
    { idx: "1", text: "item2", status: "active" },
  ]);

  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트
    console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map((item) => {
          return <li key={item.idx}>{item.text}</li>;
        })}
      </ul>
      {/* 등록되면 콜백함수 호출 */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
