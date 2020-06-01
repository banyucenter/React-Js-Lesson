import React, { Fragment } from 'react';
import StateComp from '../Classes/StateComp';

class Produk extends React.Component {
    render(){
        return <Fragment>
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
    }
}

export default Produk;