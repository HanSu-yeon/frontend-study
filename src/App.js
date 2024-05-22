import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import TodoList from "./component/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleFilter = (selected) => {
    //console.log(selected);
    setFilter(selected);
  };
  return (
    <>
      <Header filter={filter} filters={filters} onFilter={handleFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
