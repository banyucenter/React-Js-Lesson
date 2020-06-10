import React, { Component } from 'react';
import { Table, Button, Alert, Container, Col, Row, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'

class ListMahasiswa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            mahasiswa: [],
            response: {}
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:3001/tampil';

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        mahasiswa: result.values
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    deleteMahasiswa = (idmahasiswa) => {
        const { mahasiswa } = this.state;
        const apiUrl = 'http://localhost:3001/hapus';
        let formBody = [];
        let id = 'id_mahasiswa';
        formBody.push(id + "=" + idmahasiswa);

        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== idmahasiswa)
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )

    }

    render() {
        const { error, mahasiswa } = this.state;

        if (error) {
            return (
                <div>Error: {error.message}</div>
            )
        } else {
            return (
                <Container>
                    <h2>Daftar Mahasiswa</h2>
                    {this.state.response.values && <Alert variant="info">{this.state.response.values}</Alert>}
                    <NavLink href="/mahasiswa/tambah"><Button color="info">+ Mahasiswa</Button></NavLink>
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
                            {mahasiswa.map(mahasiswa => (
                                <tr key={mahasiswa.id_mahasiswa}>
                                    <td>{mahasiswa.nim}</td>
                                    <td>{mahasiswa.nama}</td>
                                    <td>{mahasiswa.jurusan}</td>
                                    <td>
                                        <Button color="info" onClick={() => this.props.editProduct(mahasiswa.id_mahasiswa)}>Edit</Button> <span> </span>
                                        <Button color="danger" onClick={() => this.deleteMahasiswa(mahasiswa.id_mahasiswa)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            )
        }
    }
}

export default ListMahasiswa;