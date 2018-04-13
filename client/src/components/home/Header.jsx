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
                    <NavItem eventKey={2} href="/revisiones">
                      Opiniones
                    </NavItem>
                    <NavItem eventKey={3} href="/aboutus">
                      Nosotros
                    </NavItem>

                  </Nav>
                </nav>
              </Navbar>
            </div>
      </div>
    </div>
  </section>
)
export default Header;
