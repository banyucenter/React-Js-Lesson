import React, { Component } from 'react'
import '../../App.css';

class StateComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: 10,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState ({
            stock : this.state.stock - 1

        })

        if(this.state.stock == 1){
            this.setState ({
                status : "Maaf Stok Habis Gaes!",
                disabled : true
    
            })
        }
    }

    render() {
        return (
            <div className="App">
                <p>Stok MacBook Pro 2020 adalah: <b>{this.state.stock}</b></p>
                <button onClick={this.ButtonBeli} disabled={this.state.disabled}>{this.state.sub}</button>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default StateComp