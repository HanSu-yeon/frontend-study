import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
export default function TodoList({ items, deleteItem, filterItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.idx}>
              <input
                type="checkbox"
                onClick={(e) => {
                  filterItem(e.target.checked, item.idx);
                }}
              />
              {item.title}
              <span
                onClick={() => {
                  deleteItem(item.idx);
                }}
              >
                <FaRegTrashAlt />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
