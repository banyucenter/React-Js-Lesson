import React from 'react'
import {
    Row,Container
} from 'reactstrap';
import RowProduct from './rowProduct';

function ProductComp() {
    return (
        <div>
            <Container>
                <hr />
                <h2>Produk</h2>
                <Row>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                </Row>

            </Container>
        </div>
    )
}

export default ProductComp
