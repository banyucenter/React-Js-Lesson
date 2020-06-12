import React, { Component } from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class EditTambahComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jenis: props.location.state.jenis,
            idmahasiswa : props.location.state.idmahasiswa,
            nim:props.location.state.nim,
            nama:props.location.state.nama,
            jurusan:props.location.state.jurusan,
            mahasiswa: []
        }

        // this.changeNIM = this.changeNIM.bind(this);
        // this.changeNama = this.changeNama.bind(this);
        // this.changeJurusan = this.changeJurusan.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        })
      }

    // changeNama(event){
    //     this.setState(
    //         {nama : event.target.value}
    //     );
    // }

    // changeNIM(event){
    //     this.setState(
    //         {nim : event.target.value}
    //     );
    // }

    // changeJurusan(event){
    //     this.setState(
    //         {jurusan : event.target.value}
    //     );
    // }

    // componentDidMount() {
    //     const apiUrl = `http://localhost:3001/tampil/${this.state.idmahasiswa}`;

    //     fetch(apiUrl)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     mahasiswa: result.values
    //                 });
    //             },
    //             (error) => {
    //                 this.setState({ error });
    //             }
    //         )
    // }

   

    

    render() {
        return (
            <Container>
                <h1>{this.state.jenis} Mahasiswa {this.state.idmahasiswa}</h1>

                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">NIM</Label>
                        <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder="NIM" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Nama</Label>
                        <Input type="text" name="nama" value={this.state.nama}  onChange={this.handleChange} placeholder="Nama" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Jurusan</Label>
                        <Input type="text" name="jurusan" value={this.state.jurusan}  onChange={this.handleChange} placeholder="Jurusan" />
                    </FormGroup>
                    <Button onClick={() => this.ubahMahasiswa(this.state.id_mahasiswa)}>Submit</Button>
                </Form>

            </Container>
        )
    }
}

export default EditTambahComp