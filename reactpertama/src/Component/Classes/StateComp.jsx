import React, { Component } from 'react'
import '../../App.css';
import './css/StateComp.css';

class StateComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "Beli",
            status: "Tersedia",
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState ({
            stock : this.state.stock - 1

        })

        if(this.state.stock === 1){
            this.setState ({
                status : "Maaf Stok Habis Gaes!",
                disabled : true
    
            })
        }
    }

    render() {
        return (
            <div className="box-stok">
                <h2>{this.props.nama}</h2>
                <img src="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/5/25/73ce423e-0458-4566-b0ff-8fed37bab585.jpg.webp" alt="Macbook Pro 2020"/>
                <p>Harga Rp.<b>{this.props.harga}</b></p>
                <p>Stok Tersedia <b>{this.state.stock}</b></p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>{this.state.sub}</button>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default StateComp