import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddItem({ addTodo }) {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //빈문자열 입력 x
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    addTodo({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="text" type="text" onChange={handleText} value={text} />
      <button type="submit">add</button>
    </form>
  );
}
