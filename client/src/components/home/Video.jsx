import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

const Video = () => (

  <Grid>
  <Row className="VideoTitle" >
    <Col xs={6} md={2}>



    </Col>
    <Col xs={6} md={8}>

    <center><h1 className="TitulosYHeaders">Una vista a nuestro hogar...</h1></center>


    </Col>
    <Col xs={6} md={2}>



    </Col>
  </Row>
    <Row className="show-grid-video">

      <iframe src="//www.youtube.com/embed/uiHF6HIRtjg?rel=0&amp;showinfo=0"  allowFullScreen></iframe>

    </Row>
  </Grid>
);

export default Video;
