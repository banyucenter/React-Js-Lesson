import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap';

function HooksUseEffects() {
    const [namaLengkap, setNamaLengkap] = useState({ nama: '', marga: '' })

    //useEffect
    useEffect(() => {
        console.log('Panggil Use Effects!');
        setNamaLengkap({ nama: 'Marco', marga: 'Simanjuntak' })
        
    },[]);

    return (
        <Container>
            <h3>Profil User</h3>
            <h5>Name: {namaLengkap.nama}</h5>
            <h5>Family Name: {namaLengkap.marga}</h5>
            <button onClick={() => setNamaLengkap({nama:'Ipung', marga:'Wijaya'})}>Ubah Nama</button>
        </Container>
    )
}

export default HooksUseEffects
