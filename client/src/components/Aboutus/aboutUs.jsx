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
          <TypeWriter typing={2.0}>
            The Mexican Revolution (Spanish: Revolución Mexicana) was a major armed struggle c.
             1910–1920 radically transforming Mexican culture and government. Although recent
            research has focused on local and regional aspects of the Revolution, it was a
            "genuinely national revolution".
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
