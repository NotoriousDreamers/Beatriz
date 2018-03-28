import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

//import Video from "../components/home/Video.jsx";
import Carousel from "../components/home/Carousel.jsx";
import Header from "../components/home/Header.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
         <div>
          <center>
           <Header />
         </center>
           <Carousel />
        </div>
      </div>
    );
  }


};

export default Home;
