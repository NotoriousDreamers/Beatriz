import React from 'react';
import {Nav, Navbar, NavItem, MenuItem } from 'react-bootstrap';


const Header = (props) => (
  <Navbar fixedTop={true} inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Tacos Beatriz <small id="LaRoma">La Roma</small></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/menu">
          Menu
        </NavItem>
        <NavItem eventKey={2} href="/catering">
          Banquetes
        </NavItem>
        <NavItem eventKey={3} href="/revisiones">
          Reseñas
        </NavItem>
        <NavItem eventKey={4} href="/aboutus">
          Sobre Nosotros
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
