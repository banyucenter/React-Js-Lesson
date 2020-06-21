import React from 'react'

function TampilComp(props) {
    return (
        <div>
            <p> Hallo, {props.username}</p>
            <h1>{props.jumlah}</h1>
            <button onClick={() => props.fungsi(props.jumlah + 1)}
                disabled={props.disabled}>Tambah</button>
        </div>
    )
}

export default TampilComp
