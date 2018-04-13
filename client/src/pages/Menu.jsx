import React from "react";

import Header from "../components/home/Header.jsx";
import Footer from "../components/home/Footer.jsx";
import Foods from "../components/menu/menuDeComidas.jsx";


class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Foods />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }

};

export default Menu;
