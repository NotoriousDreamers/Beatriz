import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";



import Map from "../components/home/Map.jsx";
import Video from "../components/home/Video.jsx";
import Header from "../components/home/Header.jsx";
import Header2 from "../components/home/Header2.jsx";
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
        <br />
        <br />
        <br />
        </div>
        <div>
          <Carousel />
        </div>
            <br/>
            <br/>
        <div>
          <center><Video /></center>
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }


};

export default Home;
