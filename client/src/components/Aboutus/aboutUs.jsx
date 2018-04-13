import $ from "jquery";
import React from 'react';
import TypeWriter from 'react-typewriter';
import { Grid, Row, Col } from "react-bootstrap";

class TypeWriteR2 extends React.Component {

  render() {
    return (
    <div>
      <Grid className="show-grid-AboutUs">
        <Row >
          <Col xs={6} md={4}>

          <center><img id='beatriz' src="https://i.imgur.com/cWEMVV6.png" alt="Beatriz tipa"/></center>


          </Col>
          <Col className="LaEscritora" xs={6} md={4}>
          <TypeWriter className="TextosComunes" typing={2.0}>
            En Tacos Beatriz 1910 se hacen decir los "originales" mencionando a un tal defraudador que trabajó con ellos y ahora tiene su negocio propio, cuando ellos son un completo fiasco!

            Coticé un servicio de alimentos y me dieron precio, condiciones de pago, etc.

          </TypeWriter>
          </Col>
          <Col xs={6} md={4}>

          <center><img id='panchito' src="https://i.imgur.com/TDsMveO.png" alt="Pancho tipo"/></center>


          </Col>
        </Row>
      </Grid>
      <br/><br/><br/><br/><br/><br/><br/><br/><br />
    </div>
    )
  }
};

export default TypeWriteR2;
