import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/1.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="text-black" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
