import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function List({ items, deleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx} style={{ backgroundColor: "yellowgreen" }}>
              {item}
              <p
                onClick={() => {
                  deleteItem(idx);
                }}
              >
                <FaRegTrashAlt />
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
