import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";
export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    //양쪽 공백 제거 & 빈문자열 검사
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ idx: uuidv4(), text: text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        placeholder="할 일 입력"
        type="text"
        name="item"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        Add
      </button>
    </form>
  );
}
