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
// import { Container, Row, Col } from 'reactstrap';

// import Blog from './Component/Functional/Blog';
// // import FungsiKomponent from './Component/Functional/FungsiKomponent';
// // import KelasComponent from './Component/Classes/KelasComponent';
// import Home from './Component/Classes/Home';
// import Produk from './Component/Classes/Produk';

const App = () => {
  return (
      <BrowserRouter>
      <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutComp} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
