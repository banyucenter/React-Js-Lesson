import React from 'react'
import {
    Row, Col, Jumbotron, Button, Card,
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">About Us</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Row>
                <Col>
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default AboutComp
