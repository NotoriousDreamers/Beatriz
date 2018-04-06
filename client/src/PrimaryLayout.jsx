import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Menu from './pages/Menu.jsx';
import AboutUs from "./pages/AboutUs.jsx";
import Catering from "./pages/Catering.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route  path={`${match.path}catering`} component={Catering} />
        <Route  path={`${match.path}menu`} component={Menu} />
        <Route  path={`${match.path}aboutus`} component={AboutUs} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
