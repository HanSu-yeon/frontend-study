import React, { useState } from "react";

import List from "../components/List";

export default function Main() {
  //아이템 관리
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  //버튼 클릭시... itmes에 추가하는 함수
  const addItem = (e) => {
    e.preventDefault();
    setItems((prev) => [...prev, item]);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <div>
      <List items={items} />
      <form onSubmit={addItem}>
        <input
          placeholder="할 일 입력"
          type="text"
          name="item"
          value={item}
          onChange={handleChange}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
