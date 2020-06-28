import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap';

function HooksUseEffects() {
    const [namaLengkap, setNamaLengkap] = useState({ nama: '', marga: '' })
    const [judul] = useState('Penggunaan useEffects');

    //useEffect
    useEffect(() => {
        setNamaLengkap({ nama: 'Marco', marga: 'Simanjuntak' })
        document.title = [judul]
    },[]);

    return (
        <Container>
            <h3>Profil User</h3>
            <h5>Name: {namaLengkap.nama}</h5>
            <h5>Family Name: {namaLengkap.marga}</h5>
        </Container>
    )
}

export default HooksUseEffects
