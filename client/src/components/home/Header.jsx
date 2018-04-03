import React from 'react';
import {Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';


const Header = (props) => (
  <section className="headerRow">
    <div className="row-1">
      <div className="col-md-12">

            <div id="Nav">
              <Navbar>
                <nav className="navbar transparent navbar-fixed-top">
                  <Navbar.Header id="HeaderTacosBeatriz">
                    Tacos Beatriz <small id="LaRoma">La Roma</small>
                  </Navbar.Header>
                  <Nav>
                    <NavItem eventKey={0} href="/">
                      Inicio
                    </NavItem>
                    <NavItem eventKey={1} href="/menu">
                      Menu
                    </NavItem>
                    <NavItem eventKey={2} href="/catering">
                      Catering
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                      Sobre Nosotros
                    </NavItem>
                    <NavDropdown eventKey={3} title="Contacto" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                  </Nav>
                </nav>
              </Navbar>
            </div>
      </div>
    </div>
  </section>
)
export default Header;
