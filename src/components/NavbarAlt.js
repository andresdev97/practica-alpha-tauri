import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/img/alpha-tauri.png";

import '../scss/components/NavbarAlt.scss';
import '../scss/hover.css';

export default function NavbarAlt() {
  return (
    <Navbar className='alpha-tauri-navbar' expand="lg">
      <a href='/'><img src={logo} alt='alpha-tauri' style={{'width':'70px'}} className="ml-5"/></a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <Nav.Link href="/" className="hvr-underline-from-right">Home</Nav.Link>
          <Nav.Link href="team" className="hvr-underline-from-right">Team</Nav.Link>
          <Nav.Link href="contact" className="hvr-underline-from-right">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
