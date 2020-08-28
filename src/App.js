
import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}