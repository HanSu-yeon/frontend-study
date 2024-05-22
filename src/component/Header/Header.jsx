import React from "react";

export default function Header({ filters, filter, onFilter }) {
  return (
    <>
      <li>
        {filters.map((filter) => {
          return (
            <button
              onClick={() => {
                onFilter(filter);
              }}
            >
              {filter}
            </button>
          );
        })}
      </li>
    </>
  );
}
