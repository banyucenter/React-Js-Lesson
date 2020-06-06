import React from 'react'

import {
    Container,Jumbotron

} from 'reactstrap';

const DetailComp = (props) => {
    const judul = props.location.state.judul;
    const tanggal = props.location.state.tanggal;
    console.log("judul:"+judul);
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">{judul}</h1>
                <p className="lead">{tanggal}.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </Jumbotron>
        </Container>
        
    )
}

export default DetailComp
