import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대문사진 넣기 */}
      <div className="main-bg"></div>
    </div>
  );
}

export default App;
