import React from 'react';
import { Switch, Route } from "react-router-dom";


import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Catering from "./pages/Catering.jsx";
import Revisiones from "./pages/Revisiones.jsx";
import formSubmission from './pages/formSubmission.jsx';


const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route  path={`${match.path}menu`} component={Menu} />
        <Route exact path={`${match.path}`} component={Home} />
        <Route  path={`${match.path}aboutus`} component={AboutUs} />
        <Route  path={`${match.path}catering`} component={Catering} />
        <Route  path={`${match.path}revisiones`} component={Revisiones} />
        <Route  path={`${match.path}formSubmission`} component={formSubmission} />

      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
