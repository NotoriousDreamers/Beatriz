import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import $ from "jquery";

class TypeWriteR extends React.Component {

  render() {
    return (
      <Grid className="show-grid-BettyYPancho">
        <Row >
          <Col xs={6} md={4}>

          <center><img id='beatriz' src="https://i.imgur.com/cWEMVV6.png" alt="Beatriz tipa"/></center>


          </Col>
          <Col xs={6} md={4}>

          <img id='TacosBeatriz' src="https://i.imgur.com/gS6IPvN.png?2" alt="TB Logo"/>
            <img id='Apetisar' src="https://i.imgur.com/6V2bNfr.png " alt="Taquito"/>

          </Col>
          <Col xs={6} md={4}>

          <center><img id='panchito' src="https://i.imgur.com/TDsMveO.png" alt="Pancho tipo"/></center>


          </Col>
        </Row>
      </Grid>
    )
  }
};

export default TypeWriteR;
