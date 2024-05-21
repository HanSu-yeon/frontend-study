import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Todo({ todo }) {
  const { id, text, status } = todo;
  return (
    <>
      <li key={id}>
        <input type="checkbox" />
        {text}
        <button>
          <FaRegTrashAlt />
        </button>
      </li>
    </>
  );
}
