import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const FoodMenu = () => (

  <Grid className="show-grid-FoodMenu">
  <Row className="foodMenuTitle" >
    <Col xs={6} md={2}>



    </Col>
    <Col xs={6} md={8}>

    <center><h1 className="TitulosYHeaders">Las especialidades de la casa</h1></center>


    </Col>
    <Col xs={6} md={2}>



    </Col>
  </Row>
    <Row className="foodMenuTop" >
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/HYi5H3V.jpg?1" alt="Sopes"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/eqSk0UM.jpg?2" alt="Huaraches"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/AQVCLby.jpg?1" alt="Tortillas Hechas A Mano"/>


      </Col>
    </Row>
    <Row className="foodMenuBottom" >
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/hMk0UQO.jpg?1" alt="Jugos Frescos Al Momento"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/ooKm9CF.jpg?1" alt="Tacos de Guisado"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/c1jWM7U.jpg?1" alt="Mas!!"/>


      </Col>
    </Row>
  </Grid>

);

export default FoodMenu;
