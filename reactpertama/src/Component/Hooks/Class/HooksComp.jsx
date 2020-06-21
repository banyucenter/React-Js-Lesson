import React, { PureComponent } from 'react'

class HooksComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            jumlah: 0
        }
    }

    tambahBarang = () => {
        this.setState({ jumlah: this.state.jumlah + 1 });
    };

    render() {
        return (
            <div>
                <h1>{this.state.jumlah}</h1>

                <button onClick={this.tambahBarang}>Tambah Produk</button>
            </div>
        )
    }
}

export default HooksComp