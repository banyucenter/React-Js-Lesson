import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import './App.css';
// import ParentComp from './Component/Classes/ParentComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Component/Functional/HomePage';
import AboutComp from './Component/Functional/AboutComp';
import NavbarComp from './Component/Classes/NavbarComp';
import DetailComp from './Component/Functional/DetailComp';


const App = () => {
  return (
      <BrowserRouter>
      <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/detail/:id" component={DetailComp} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
