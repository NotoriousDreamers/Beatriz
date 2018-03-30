import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import FoodMenu from "../components/home/FoodMenu.jsx";
import Header from "../components/home/Header.jsx";
import Video from "../components/home/Video.jsx";
import Carousel from "../components/home/Carousel.jsx";
import YourReactClass from "../components/home/typewriter.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          <YourReactClass />
        </div>
        <div>
          <Header />
        </div>
        <br />
        <br />
        <div>
        </div>
        <div>
          <Carousel />
        </div>
        <br />
        <br />
        <div>
          <center>
         <Video />
         </center>
      </div>
      </div>
    );
  }


};

export default Home;
