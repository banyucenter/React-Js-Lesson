import React, {useContext} from 'react'
import {
    Row, Container
} from 'reactstrap';
import RowProduct from './rowProduct';
import { CartContext } from '../../../CartContext';

function ProductComp() {
    const { value, setValue } = useContext(CartContext)
    return (
        <div>
            <Container>
                <hr />
                <h2>Produk {value}</h2>
                <Row>
                    <RowProduct />
                    <RowProduct />
                    <RowProduct />
                </Row>

            </Container>
        </div>
    )
}

export default ProductComp
