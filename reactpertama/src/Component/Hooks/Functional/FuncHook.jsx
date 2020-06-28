import React, { useState } from 'react';
import TampilComp from './TampilComp';
import {Container} from 'reactstrap';


function FuncHook() {
    const [jumlah, tambahJumlah] = useState(0);

    //login
    const [dataLogin] = useState({ username: 'firda', token: '123abcde', isLogin: false });

    let tampil;

    if (dataLogin.isLogin) {
        tampil = <TampilComp
            username={dataLogin.username}
            fungsi={tambahJumlah.bind(this)}
            jumlah={jumlah} />;
    } else {
        tampil = <TampilComp
            username="Maaf Anda Belum Login"
            disabled={true} />;
    }

    return (
        <div>
            <Container>
                {tampil}
            </Container>
        </div>
    )
}

export default FuncHook
