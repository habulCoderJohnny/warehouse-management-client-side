import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="info" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img height={40} width={50} src="https://chaldn.com/_mpimage/fruits-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23769&q=low&v=1&m=400&webp=1" alt="" />{'  '}ChaalDaal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#go-to-services">Services</Nav.Link>
                        <Nav.Link href="home#go-to-experts">Experts</Nav.Link>
                        <NavDropdown title="More Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                    
                            <Nav.Link as={Link} to="/add-service">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                LOGIN
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;