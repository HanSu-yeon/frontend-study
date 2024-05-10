import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div>
      {/* 참고: onFilterChange={(filter) => setFilter(filter)} => 
        인자값(filter)과 호출하는 값이 같으니까 onFilterChange={setFilter} 이렇게 함수의 참조값만 전달해줘도된다*/}
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
