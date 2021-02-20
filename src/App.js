import React from "react";
import LayoutHome from "./layouts/LayoutHome";
import LayoutTeam from "./layouts/LayoutTeam";
import LayoutContact from "./layouts/LayoutContact";
import NavbarAlt from "./components/NavbarAlt";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

export default function App() {
  return (
    <Router>
        <Route component={NavbarAlt}/>
        <Switch>
          <Route exact path='/' component={LayoutHome} />
          <Route exact path='/team' component={LayoutTeam} />
          <Route exact path='/contact' component={LayoutContact} />
        </Switch>
        <Route component={Footer} />
    </Router>
  );
}
