import React, { PureComponent } from 'react'
import { Container, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            display: 'none'
        }
    }

    Addmahasiswa = () => {
        axios.post(api + '/tambah', {
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        })
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    // alert("Mahasiswa telah ditambahkan");
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
                else {
                    // alert('Mahasiswa gagal tersimpan');
                    debugger;
                    this.props.history.push('/mahasiswa/tambah')
                }
            })
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <Container>
                <h4>Masukan data mahasiswa</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label for="nim">NIM</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nim" onChange={this.handleChange} value={this.state.nim} placeholder="Masukan NIM" />
                            </Col>
                        </FormGroup>
                        <Label for="nama">Nama</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="nama" onChange={this.handleChange} value={this.state.nama} placeholder="Masukan Nama" />
                            </Col>
                        </FormGroup>
                        <Label for="jurusan">Jurusan</Label>
                        <FormGroup row>
                            <Col>
                                <Input type="text" name="jurusan" onChange={this.handleChange} value={this.state.jurusan} placeholder="Masukan Jurusan" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col>   
                                <button type="button" onClick={this.Addmahasiswa} className="btn btn-success">Submit</button>
                            </Col>
                            <Col>
                                <Button color="danger">Reset</Button>{' '}
                            </Col>
                            <Col>
                                <Link to='/mahasiswa'><Button color="secondary">Kembali</Button></Link>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>

        )
    }
}

export default TambahComp