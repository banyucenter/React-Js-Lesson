import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import './App.css';
import ParentComp from './Component/Classes/ParentComp';

// import Blog from './Component/Functional/Blog';
// // import FungsiKomponent from './Component/Functional/FungsiKomponent';
// // import KelasComponent from './Component/Classes/KelasComponent';
// import Home from './Component/Classes/Home';
// import Produk from './Component/Classes/Produk';

const App = () => {
  return (
    <div className="App">
      <ParentComp/>
    </div>

  );
}

export default App;
