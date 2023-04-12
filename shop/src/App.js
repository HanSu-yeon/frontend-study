import "./App.css";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Card from "./components/Card";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Event from "./pages/Event";
import data from "../src/data.js"; //데이터 import 해왔음

function App() {
  let navigate = useNavigate();
  const [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              이벤트
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i} />;
          })}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          {/* 중첩라우트를 쓰면 두 요소 모두 보임 -> 여러 유사한 페이지 필요할 때 */}
          <Route path="member" element={<h2>멤버임</h2>} />
          <Route path="location" element={<h2>장소임</h2>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<h4>첫 주문시 양배추즙 서비스</h4>} />
          <Route path="two" element={<h4>생일기념 쿠폰 받기</h4>} />
        </Route>
        <Route path="*" element={<div>404page 없는 페이지</div>} />
      </Routes>
    </div>
  );
}
// path에 *은 위에 작성한 라우트 경로 외 모든 것(오타포함)
export default App;
