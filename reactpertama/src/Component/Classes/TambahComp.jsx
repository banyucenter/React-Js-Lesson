import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class TambahComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <h1>Tambah Mahasiswa</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">NIM</Label>
                        <Input type="text" name="nim" id="exampleEmail" placeholder="NIM" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Nama</Label>
                        <Input type="text" name="nama" id="examplePassword" placeholder="Nama" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Jurusan</Label>
                        <Input type="text" name="jurusan" id="examplePassword" placeholder="Jurusan" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
}

export default TambahComp