import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

//CircleProps의 타입이 뭔지 component에게 말해줘야 함
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [value, setValue] = useState(0);

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
}

export default Circle;

// interface PlayerShap {
//   name: string;
//   age: string;
// }

// const sayHello = (playerObj: PlayerShap) =>
//   `Hello ${playerObj.name} you are ${playerObj.age} years old`;

// console.log(sayHello({ name: "su", age: "1" }));
