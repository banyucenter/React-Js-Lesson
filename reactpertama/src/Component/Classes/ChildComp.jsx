import React, { Component } from 'react'
// import ChildDua from './ChildDua'
// import PropTypes from 'prop-types'

class ChildComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    minBeli = 1;
    render() {
        return (
            <div>
                {/* <p>Stock: {this.props.stock}</p> */}
                <p>Macbook Pro Edisi Terbatas</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>

        )
    }
}

export default ChildComp