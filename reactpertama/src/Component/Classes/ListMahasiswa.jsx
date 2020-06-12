import React, { Component } from 'react';
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';

const api = 'http://localhost:3001'

class ListMahasiswa extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            console.log(res.data.values)
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    //Delet harus menggunakan header
    Deletemahasiswa = (idmahasiswa) => {
        const { mahasiswa } = this.state;
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa
        });

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    this.setState({
                        response: json.data.values,
                        mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== idmahasiswa),
                        display: 'block'
                    });
                    this.props.history.push('/mahasiswa')
                }
                else {
                    alert('Mahasiswa gagal terhapus');
                    this.props.history.push('/mahasiswa')
                }
            });
    }

    render() {
        return (
            <Container>
                <h2>Daftar Mahasiswa</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
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
                        {this.state.mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.nim}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: `/mahasiswa/edit`,
                                                state: {
                                                    is_edit: true,
                                                    id_mahasiswa: mahasiswa.id_mahasiswa,
                                                    nim: mahasiswa.nim,
                                                    nama: mahasiswa.nama,
                                                    jurusan: mahasiswa.jurusan
                                                }
                                            }
                                        }>
                                        <Button>Edit</Button>
                                    </Link>
                                    <span> </span>
                                    <Button onClick={() => this.Deletemahasiswa(mahasiswa.id_mahasiswa)} color="danger" >Delete</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default ListMahasiswa;