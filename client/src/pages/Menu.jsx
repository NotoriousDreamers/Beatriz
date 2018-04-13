import React from "react";

import Foods from "../components/menu/menuDeComidas.jsx";
import Header from "../components/home/Header.jsx";

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
      </div>
    )
  }

};

export default Menu;
