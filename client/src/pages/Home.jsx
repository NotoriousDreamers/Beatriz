import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

Footer

import Footer from "../components/home/Footer.jsx";
import Map from "../components/home/Map.jsx";
import Video from "../components/home/Video.jsx";
import Header from "../components/home/Header.jsx";
import FoodMenu from "../components/home/FoodMenu.jsx";
import Carousel from "../components/home/Carousel.jsx";
import TypeWriteR from "../components/home/typewriter.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
            <br/>
            <br/>
        <div>
          <TypeWriteR />
        </div>
            <br/>
            <br/>
        <div>
          <FoodMenu />
        </div>
        <div>
        </div>
        <div>
          <center><Video /></center>
        </div>
        <div>
          <Map />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }


};

export default Home;
