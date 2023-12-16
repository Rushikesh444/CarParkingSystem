import { Button,Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from "../utils/TokenUtil";
import { useNavigate } from "react-router-dom";

export function NavigationBar() {

  const navigate=useNavigate();

  // logout handle function
  const handleLogoutClick=()=>{
      logout();
      navigate("/");
  }


  return (

    <Navbar bg="dark" data-bs-theme="dark" expand="lg" >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Parking System App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/booklist">
              <Nav.Link>Booking List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/booknow">
              <Nav.Link>Book Now</Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="primary" size="sm" onClick={handleLogoutClick}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}
