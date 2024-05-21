import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdateTodo, onDelTodo }) {
  const { id, text, status } = todo;
  const handleUpdate = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdateTodo({ ...todo, status });
  };
  const handleDelete = () => {
    onDelTodo(todo);
  };

  return (
    <>
      <li key={id}>
        <input
          type="checkbox"
          onChange={handleUpdate}
          checked={status === "completed"}
        />
        {text}
        <button type="submit" onClick={handleDelete}>
          <FaRegTrashAlt />
        </button>
      </li>
    </>
  );
}
