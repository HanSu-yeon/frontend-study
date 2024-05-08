import React, { useState } from "react";

import List from "../components/TodoList/TodoList";
import styles from "../css/todo.module.css";

const DUMMY = [
  { idx: 0, title: "item1", checked: false },
  { idx: 1, title: "item2", checked: false },
];
export default function Main() {
  //아이템 관리
  const [item, setItem] = useState("");
  // const [items, setItems] = useState([
  //{idx: 1, title: ㅇㅇㅇ }
  // ]);

  //all
  const [items, setItems] = useState(DUMMY);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);

  //버튼 클릭시... itmes에 추가하는 함수
  const addItem = (e) => {
    e.preventDefault();
    setItems((prev) => [
      ...prev,
      { idx: items.length, title: item, checked: false },
    ]);
    setItem("");
    //TODO completed에 추가해야되나
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

  /**
   * 예상 로직
   * 필터 총 3가지: all/active/completed
   *
   * 체크 -> 완료 추가, 진행 중(active)에서 해당 아이템 삭제
   * 체크 해지 -> 완료(completed)에서 해당 아이템 삭제, 진행 중 추가
   */
  const filterItem = (checked, checkedIdx) => {
    // console.log(checked, checkedIdx);

    if (checked) {
      const completedItem = items.filter((item) => {
        return item.idx == checkedIdx;
      });
      // console.log("완료", completedItem);
      setCompleted((prev) => [...prev, ...completedItem]);

      // setActive()
      // console.log(completed);
    } else {
      //check 해지 -> false
      // const activeItem = items.filter((item, idx) => {
      //   return idx == checkedIdx;
      // });
      // console.log("진행중", activeItem);
      // setActive((prev) => [...prev, ...activeItem]);
    }
    console.log(items);
  };
  return (
    <div>
      <div className={styles.tab}>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <List items={items} deleteItem={deleteItem} filterItem={filterItem} />
      <form onSubmit={addItem}>
        <input
          placeholder="할 일 입력"
          type="text"
          name="item"
          value={item}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
