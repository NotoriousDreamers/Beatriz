import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import Header from "../components/home/Header.jsx";
import TypeWriteR from "../components/home/typewriter.jsx";
import FoodMenu from "../components/home/FoodMenu.jsx";
import Video from "../components/home/Video.jsx";
import Carousel from "../components/home/Carousel.jsx";

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
          <Carousel />
        </div>
            <br/>
            <br/>
        <div>
          <center><Video /></center>
        </div>
      </div>
    );
  }


};

export default Home;
