import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
    // console.log(todosArr);
  };

  //check여부
  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.idx === updated.idx ? updated : t)));
  };

  const handleDelete = (deleted) => {
    setTodos(deleted.filter((t) => t.idx !== deleted.idx));
  };
  //선택한 필터에 해당하는 todo만 들어있음
  const filtered = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => {
          return (
            <Todo
              key={item.idx}
              todo={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      {/* 등록되면 콜백함수 호출 */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log("readTodosFromLocalStorage");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
