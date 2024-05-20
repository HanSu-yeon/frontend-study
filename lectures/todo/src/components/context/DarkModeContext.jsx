import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

//글로벌하게 처리하고 싶은 데이터, 함수들을 여기서 만들어준다 -> value에 넣음
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    //  == setDarkMode((mode) => !mode) 아래와 같음
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    //다크모드 여부 저장
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark); //react 내부 state에 먼저 업데이트
    updateDarkMode(isDark); //html에 "dark" 클래스 추가
  }, []);

  return (
    <DarkModeContext.Provider
      //   value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
      value={{ darkMode, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

//이렇게 하면 내부적으로 어떤 Context를 쓰는지 신경쓰지 않아도 x
export const useDarkMode = () => useContext(DarkModeContext);
