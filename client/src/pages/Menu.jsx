import React from "react";

import Foods from "../components/menu/menuDeComidas.jsx";
import Header from "../components/home/Header.jsx";
import Menubonito from "../components/menu/flipBoook.jsx";

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
          <Menubonito />
        </div>
        <div>
          <Foods />
        </div>
      </div>
    )
  }

};

export default Menu;
