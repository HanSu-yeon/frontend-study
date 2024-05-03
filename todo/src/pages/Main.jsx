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

  //아이템 삭제
  const deleteItem = (delIdx) => {
    console.log(delIdx);
    const newItems = items.filter((item, idx) => {
      return idx !== delIdx;
    });
    setItems(newItems);
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <div>
      <List items={items} deleteItem={deleteItem} />
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
