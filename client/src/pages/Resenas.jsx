import React from "react";

import Footer from "../components/home/Footer.jsx";
import Header from "../components/home/Header.jsx";


class Resenas extends React.Component {
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
          <Footer />
        </div>
      </div>
    );
  }


};

export default Resenas;
