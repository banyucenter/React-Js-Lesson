import React from 'react'

import {
    Container, Row, Col, Jumbotron, Button
} from 'reactstrap';

import CardComp from './CardComp';

class AboutComp extends React.Component {
    render() {
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
                <Container>
                    <Row>
                        <Col>
                            <CardComp id="1" judul="Belajar React Keren" tanggal="12/12/2020"/>
                        </Col>
                        <Col>
                            <CardComp id="2" judul="Belajar React Mantap" tanggal="22/12/2020"/>
                        </Col>
                        <Col>
                            <CardComp id="3" judul="Belajar React Joss" tanggal="23/12/2020"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutComp
