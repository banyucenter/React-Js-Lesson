import React, { useEffect, useState } from 'react'
import { Table, Button, Container, NavLink } from 'reactstrap';
import axios from 'axios';


const api = 'http://localhost:3001'

function HooksEffects() {

    const [mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        document.title = 'List Mahasiswa'
        axios.get(api + '/tampil').then(res => {
            console.log(res.data.values)
            setMahasiswa(res.data.values)
        })
    },[]);

    return (
        <Container>
            <h2>Daftar Mahasiswa</h2>
            <NavLink href="/mahasiswa/tambah">
                <Button color="info">+ Mahasiswa</Button>
            </NavLink>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map(mahasiswa =>
                        <tr key={mahasiswa.id_mahasiswa}>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.jurusan}</td>
                            <td>
                                <Button>Edit</Button>
                                <span> </span>
                                <Button color="danger" >Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default HooksEffects
