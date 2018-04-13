import React from "react";

import Footer from "../components/home/Footer.jsx";
import Header from "../components/home/Header.jsx";
import TypeWriteR2 from "../components/Aboutus/aboutUs.jsx";


class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <TypeWriteR2 />
        </div>
        <div>
        <br /><br />
          <Footer />
        </div>
      </div>
    );
  }


};

export default AboutUs;
