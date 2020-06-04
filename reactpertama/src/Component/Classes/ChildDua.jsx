import React, { Component } from 'react'

class ChildDua extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: props.stock
        }

        
    }

    render() {
        return (
            <div>
                <h2>Stok Saat ini adalah</h2>
                <h2>{this.state.stock}</h2>
            </div>

        )
    }
}

export default ChildDua