import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
export default function List({ items }) {
  return (
    <div>
      <ul>
        {items.map((item, idx) => {
          return (
            <li key={idx} style={{ backgroundColor: "yellowgreen" }}>
              {item}
              <FaRegTrashAlt onClick={deleteItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
