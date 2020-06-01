import React, { Fragment } from 'react';
import './App.css';
import StateComp from './Component/Classes/StateComp';
// import FungsiKomponent from './Component/Functional/FungsiKomponent';
// import KelasComponent from './Component/Classes/KelasComponent';
// import Home from './Component/Classes/Home';

function App() {
  return (
    <Fragment>
      <StateComp
        nama="MacBook Pro 2020 Mid Retina"
        stock="10"
        harga="43000000" />
      <StateComp
        nama="MacBook Air 2020 Mid Retina"
        stock="20"
        harga="40000000" />
      <StateComp
        nama="MacBook Pro 2019 Mid Retina"
        stock="25"
        harga="33000000" />
    </Fragment>
  );
}

export default App;
