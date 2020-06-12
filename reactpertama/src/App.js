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
import ListMahasiswa from './Component/Classes/ListMahasiswa';
import TambahComp from './Component/Classes/TambahComp';


// <!--App js-->
const App = () => {
  return (
      <BrowserRouter>
      <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutComp} />
          <Route exact path="/mahasiswa" component={ListMahasiswa} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          {/* <Route exact path="/edit/:id" component={EditTambahComp} />
          <Route exact path="/detail/:id" component={DetailComp} /> */}
        </Switch>
      </BrowserRouter>
  );
}

export default App;
