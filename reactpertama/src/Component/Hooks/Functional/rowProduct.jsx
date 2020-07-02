import React, {useContext} from 'react'
import {
    Card, Row, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import { CartContext } from '../../../CartContext';

function RowProduct() {
    const {value,setValue} = useContext(CartContext)

    // const increment = () => {
    //     setValue(value + 1);
    //   };

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    <Col>
                        <Button color="warning">Beli</Button> {' '}
                        <Button color="danger" onClick={()=> setValue(value+1)}> Keranjang</Button>
                    </Col>
                </CardBody>
            </Card>
        </Col>
    )
}

export default RowProduct
