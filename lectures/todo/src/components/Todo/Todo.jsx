import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, idx } = todo;

  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status: status });
  };

  const handleDelete = () => onDelete(todo);
  return (
    <li key={idx} className={styles.todo}>
      <input
        type="checkbox"
        id={idx}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={idx} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaRegTrashAlt />
        </button>
      </span>
    </li>
  );
}
