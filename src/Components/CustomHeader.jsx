import { Container, Nav, Navbar } from "react-bootstrap";

const CustomHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="primary"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Che tempo fa?</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Città</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Dati storici</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomHeader;
