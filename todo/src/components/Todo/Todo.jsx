import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, idx } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <li key={idx}>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
