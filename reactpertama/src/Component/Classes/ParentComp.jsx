import React, { Component } from 'react'
import ChildComp from './ChildComp'
import ChildDua from './ChildDua'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: 11,
            status: "tersedia"

        }
    }

    ambilDataChild = (item) => {
        this.setState({
            stock: this.state.stock - item

        })
    }

    tambahDataChild = (item) => {
        this.setState({
            stock: this.state.stock + item

        })
    }


    render() {
        return (
            <div>
                <ChildComp
                    stock={this.state.stock}
                    fungsi={this.ambilDataChild.bind(this)} />
                <ChildDua
                    stock={this.state.stock}
                    fungsi={this.tambahDataChild.bind(this)} />
            </div>
        )
    }
}

export default ParentComp