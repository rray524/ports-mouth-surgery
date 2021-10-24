import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { logOut, user } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">PortsMouth Surgery</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/fees">Patient Fees</Nav.Link>
                        <Nav.Link as={Link} to="/form">Patient Form</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        {(user.displayName || user.emailVerified) ? <button onClick={logOut} className="btn-warning">Log Out</button>
                            : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        {(user.displayName || user.emailVerified) && <Nav.Link eventKey={2} as={Link} to="/">
                            <img className="user-header-img" src={user.photoURL} alt="" />
                        </Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;