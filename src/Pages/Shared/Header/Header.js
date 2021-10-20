import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">PortsMouth Surgery</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/fees">Fees</Nav.Link>
                        <Nav.Link as={Link} to="/enquiry">Enquiry</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Rahul
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;