import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';



const Header = () => {
    
    return (
        <>
    
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand to="/home">Food Master</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/home">Home</Nav.Link>
           
          </Nav>
          </Container>
        </Navbar>
      
       
      </>
    );
};

export default Header;