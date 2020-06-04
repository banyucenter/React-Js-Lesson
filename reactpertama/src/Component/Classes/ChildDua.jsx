import React, { Component } from 'react'
import GrandChild from './GrandChild'

class ChildDua extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }


    }

    render() {
        return (
            <div>
                <h2>Stok Saat ini adalah</h2>
                
                <GrandChild
                    data={this.props.stock}
                    fungsi={this.props.fungsi} />
            </div>

        )
    }
}

export default ChildDua