import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ListingsNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Properties For Sale</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <p>Sort By: </p>
          <Nav className="me-auto">
            
            <NavDropdown title="Select" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Low to High</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                High to Low
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Saved
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ListingsNavBar;