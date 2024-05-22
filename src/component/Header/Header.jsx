import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import { useDarkMode } from "../context/DarkModeContext";
export default function Header({ filters, filter, onFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleDarkMode = () => {
    toggleDarkMode();
  };
  return (
    <>
      <button onClick={handleDarkMode}>
        {!darkMode && <IoMoonOutline />}
        {darkMode && <FaRegSun />}
      </button>

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
