import { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './navbar.scss';

function BasicExample() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  const getUser = localStorage.getItem('userData');
  const getPassword = localStorage.getItem('passwordData');

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Drummer School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/activities">
                Activities
              </Nav.Link>
              <Nav.Link as={Link} to="/lesson">
                Day Lesson
              </Nav.Link>
            </Nav>
            {getUser && getPassword ? (
              <button onClick={handleClick} className="link">
                Logout
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
