import React from 'react';
import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
const Header = (props) => (
  <div id="Nav">
    <Navbar>
  <Navbar.Header>
    Tacos Beatriz
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="www.com">
      Menu
    </NavItem>
    <NavItem eventKey={2} href="#">
      Catering
    </NavItem>
    <NavItem eventKey={2} href="#">
      About Us
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
  </div>
)
export default Header;
