import React from "react";
import { Image, Button, Col, Grid, Row, Well, Nav, Navbar, NavItem, MenuItem, Panel } from "react-bootstrap";


const Map = () => (
<div>
  <Grid className="show-grid-mapa">
  <Row className="MapTitle" >
    <Col xs={6} md={2}>



    </Col>
    <Col xs={6} md={8}>

    <center><h1 className="TitulosYHeaders">Conocenos!</h1></center>


    </Col>
    <Col xs={6} md={2}>



    </Col>
  </Row>
    <Row >
      <Col xs={6} md={6}>

      <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.7909548250786!2d-99.16794757076877!3d19.405326599181215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff152a67d391%3A0x8c116b8a3cdd22e9!2sTuxpan+32%2C+Roma+Sur%2C+06760+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1sen!2smx!4v1523596077838" width="450" height="450"  allowFullScreen></iframe></center>


      </Col>
      <Col xs={6} md={6}>

      <center><h1 className="TitulosYHeaders">DIRECCIÓN</h1></center>
      <center><h3 className="TextosComunes">Tuxpan 32, Roma Sur, 06760 Ciudad de México, CDMX</h3></center>
      <center><h1 className="TitulosYHeaders">TELÉFONO</h1></center>
      <center><h3 className="TextosComunes">55-84-34-24</h3></center>
      <center><h1 className="TitulosYHeaders">Proximamente</h1></center>
      <center><h3 className="TextosComunes">Entregas a domicilio!</h3></center>




      </Col>
    </Row>
  </Grid>
  <br/>
</div>

);

export default Map;
