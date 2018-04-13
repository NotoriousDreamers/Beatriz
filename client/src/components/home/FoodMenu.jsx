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

      <img id='foodMenuImgs' src="https://i.imgur.com/mNzKgZ1.jpg" alt="Sopes"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/ht5xdFu.jpg" alt="Huaraches"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/qfJ9mMF.jpg" alt="Tortillas Hechas A Mano"/>


      </Col>
    </Row>
    <Row className="foodMenuBottom" >
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/APEjgFm.jpg" alt="Jugos Frescos Al Momento"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/Ylxdeip.jpg" alt="Tacos de Guisado"/>


      </Col>
      <Col xs={6} md={4}>

      <img id='foodMenuImgs' src="https://i.imgur.com/m5UuCIb.jpg" alt="Mas!!"/>


      </Col>
    </Row>
  </Grid>

);

export default FoodMenu;
