import React from "react";

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

      </div>
    );
  }


};

export default AboutUs;
