import React, { useState } from "react";
// import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { idx: "0", text: "item1", status: "active" },
    { idx: "1", text: "item2", status: "active" },
  ]);

  return (
    <section>
      <ul>
        {todos.map((item) => {
          return <li key={item.idx}>{item.text}</li>;
        })}
      </ul>
    </section>
  );
}
