import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
    return (
        <div className="nav">
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>KISS<img class="sine" src="favicon.ico"></img>Analog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="circuit-design">Circuit Design</Nav.Link>
                        <Nav.Link href="equipment-reviews">Equipment Reviews</Nav.Link>
                        <Nav.Link href="kiss-u">Kiss U</Nav.Link>
                        <Nav.Link href="channel">Channel</Nav.Link>
                        <Nav.Link href="blog">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;