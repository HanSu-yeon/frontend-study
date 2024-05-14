import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    //새로운 투두를 todos에 업데이트
    let todosString = localStorage.getItem("todos");
    let todosArr = JSON.parse(todosString);
    todosArr.push(todo);
    localStorage.setItem("todos", JSON.stringify(todosArr));
    setTodos([...todos, todo]);
    // console.log(todosArr);
  };

  //check여부
  const handleUpdate = (updated) => {
    const updateTodo = todos.map((t) => (t.idx === updated.idx ? updated : t));
    localStorage.setItem("todos", JSON.stringify(updateTodo));

    setTodos(updateTodo);
  };

  const handleDelete = (deleted) => {
    let todosString = localStorage.getItem("todos");
    let todosArr = JSON.parse(todosString);
    // setTodos(todos.filter((t) => t.idx !== deleted.idx));
    const deleteTodo = todosArr.filter((t) => t.idx !== deleted.idx);
    console.log(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
    setTodos(deleteTodo);
  };
  //선택한 필터에 해당하는 todo만 들어있음
  const filtered = getFilteredItems(todos, filter);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");

    if (todoString == null) {
      //key :value 저장
      const initTodo = [];
      localStorage.setItem("todos", JSON.stringify(initTodo));
    } else {
      const todosArr = JSON.parse(todoString);
      setTodos([...todosArr]);
    }
  }, []);

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

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
