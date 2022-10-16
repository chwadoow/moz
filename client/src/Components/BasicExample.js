import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample({user,setUser}) {
  
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="/">Rent Managment App</Navbar.Brand>
      
     
        <Nav.Link href="/payments"> Payments</Nav.Link>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
           
      </Container>
    </Navbar>
  );
}

export default BasicExample;