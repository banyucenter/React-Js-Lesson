import React from 'react';

import './App.css';
// import ParentComp from './Component/Classes/ParentComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Component/Functional/HomePage';
import AboutComp from './Component/Functional/AboutComp';
import NavbarComp from './Component/Classes/NavbarComp';
import ListMahasiswa from './Component/Classes/ListMahasiswa';
import TambahComp from './Component/Classes/TambahComp';
import EditComp from './Component/Classes/EditComp';
import FuncHook from './Component/Hooks/Functional/FuncHook';
import HooksComp from './Component/Hooks/Class/HooksComp';
import HooksEffects from './Component/Hooks/Functional/HooksEffects';


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
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/class" component={HooksComp} />
          <Route exact path="/hook" component={FuncHook} />
          <Route exact path="/hookeffects" component={HooksEffects} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
