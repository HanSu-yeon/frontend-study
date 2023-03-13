import { useState } from "react";

//input의 value를 state와 연결
function App() {
  const [inputValue, setInputValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //이 함수의 목적: event에 접근
    const {
      currentTarget: { inputValue },
    } = event;
    setInputValue(inputValue);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {};
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={inputValue}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
