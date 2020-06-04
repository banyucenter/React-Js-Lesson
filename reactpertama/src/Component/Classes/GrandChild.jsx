import React, { Component } from 'react'

class GrandChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    minBeli = 1;
    render() {
        return (
            <div>
                <p>{this.props.data}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Stock</button>
            
            </div>
        )
    }
}

export default GrandChild