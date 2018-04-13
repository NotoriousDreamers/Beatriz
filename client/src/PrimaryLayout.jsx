import React from 'react';
import { Switch, Route } from "react-router-dom";


import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Resenas from "./pages/Resenas.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Catering from "./pages/Catering.jsx";
import Header from "../src/components/home/Header.jsx";
import Footer from "../src/components/home/Footer.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
      <Route  path={`${match.path}menu`} component={Menu} />
        <Route exact path={`${match.path}`} component={Home} />
        <Route  path={`${match.path}aboutus`} component={AboutUs} />
        <Route  path={`${match.path}resenas`} component={Resenas} />
        <Route  path={`${match.path}catering`} component={Catering} />
        <Header />
        <Footer />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
