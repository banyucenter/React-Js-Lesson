import React, { PureComponent } from 'react'
import { Container, Row, Col, Form, Alert, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';

const api = 'http://localhost:3001'

class EditComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,
            nama: this.props.location.state.nama,
            jurusan: this.props.location.state.jurusan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    Ubahmahasiswa = (idmahasiswa) => {
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        });

        axios.put(api + '/ubah',data)
            .then(json => {
                if (json.data.status === 200) {
                    console.log(json.data.status);
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
                else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    });
                }
            });
    }

    render() {
        return (
            <Container>
                <h4>Ubah data mahasiswa</h4>
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
                            <Row>
                            <Col>
                                <button type="button" onClick={() => this.Ubahmahasiswa(this.state.id_mahasiswa)} className="btn btn-success">Submit</button>
                            </Col>
                            <Col>
                                <Button color="danger">Reset</Button>{' '}
                            </Col>
                            <Col>
                                <Link to='/mahasiswa'><Button color="secondary">Kembali</Button></Link>
                            </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default EditComp