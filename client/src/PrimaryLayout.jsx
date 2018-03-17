import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Catering from "./pages/Catering.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home} />
        <Route path={`${match.url}catering`} component={Catering} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
