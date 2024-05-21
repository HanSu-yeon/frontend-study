import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdateTodo, onDelTodo }) {
  const { id, text, status } = todo;

  const handleDelete = (todo) => {
    onDelTodo(todo);
  };
  return (
    <>
      <li key={id}>
        <input type="checkbox" />
        {text}
        <button
          type="submit"
          onClick={() => {
            handleDelete(todo);
          }}
        >
          <FaRegTrashAlt />
        </button>
      </li>
    </>
  );
}
