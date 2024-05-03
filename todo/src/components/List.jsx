import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function List({ items, deleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx} style={{ backgroundColor: "yellowgreen" }}>
              <input type="checkbox" />
              {item}
              <span
                onClick={() => {
                  deleteItem(idx);
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
