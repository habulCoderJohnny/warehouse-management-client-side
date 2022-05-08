import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logo/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg='white' variant="danger">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img height={35} src={logo} alt="" />
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
                            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                            {user && <>
                            <Nav.Link as={Link} to="/add-service">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/manage">add item</Nav.Link>
                            <Nav.Link as={Link} to="/orders">my item</Nav.Link>
                        </>}
                        {user ? <button className="btn btn-link text-danger" onClick={handleSignout}> LOGOUT</button>
                            :
                            <Nav.Link as={Link} to="/login">
                                LOGIN
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;