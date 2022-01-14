import React from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { Container } from 'react-bootstrap';

var Users = [
    {userid: 0,type: true,name: "Adam",surname: "Małysz",email: "adam.małysz@wp.pl"},
    {userid: 1,type: false,name: "Robert",surname: "Lewandowski",email: "złota@piłka.fr"},
    {userid: 2,type: false,name: "Michał",surname: "Pazdan",email: "ronaldo@nieprzejdzie.pl"},
    {userid: 3,type: false,name: "Sergio",surname: "Ramos",email: "ball@incosmos.com"},
    {userid: 4,type: false,name: "Arek",surname: "Milik",email: "siła@nie-technika.pl"}
];
// Users = [];

class UsersPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: Users,
            currentUser: '',
            currentIndex: -1,
            showModalDelete: false,
            showModalEdit: false
        };
    }
    
    deleteItem() {
        let users = this.state.users;
        users.splice(this.state.currentIndex, 1);
        this.setState({ users: users, showModalDelete: false });
    }

    deleteUser() {
        console.log("Usuwamy obiekt: "+this.state.currentUser.name+" "+this.state.currentUser.surname); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        this.deleteItem();
    }

    editUser(){
        console.log("Edytujemy obiekt: "+this.state.currentUser.name+" "+this.state.currentUser.surname); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    }

    render(){
        const UsersList = this.state.users.map((x,index) => {
        return (
            <tr key={x.userid}>
                <td>{index+1}</td>
                <td>{x.name} {x.type ? <span title="Konto administratora">✔</span> : ''}</td>
                <td>{x.surname}</td>
                <td>{x.email}</td>
                <td>
                    {x.type ? '' : <button type="button" onClick={() => {this.setState({showModalEdit: true, currentUser: x, currentIndex: index})}} className="btn btn-outline-secondary">Edytuj</button>}
                    {x.type ? '' : <button type="button" onClick={() => {this.setState({showModalDelete: true, currentUser: x, currentIndex: index})}} className="btn btn-outline-danger">Usuń</button>}
                </td>
            </tr>
        )});
        let Content;
        if (this.state.users.length > 0){
            Content = 
            <div>
            <span className="MyTitle">Lista użytkowników:<br /><br /></span>
            <Table>
                <thead>
                    <tr>
                        <th>Lp.</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {UsersList}
                </tbody>
            </Table>
        </div>
        } else {Content = <div className="MyTitleGreen">Nie ma żadnych użytkowników!</div>}
        
        return(
            <Container className="MyContainer">
                {Content}

                <Modal show={this.state.showModalDelete} onHide={() => {this.setState({showModalDelete: false})}}>
                    <Modal.Header closeButton><Modal.Title>Usuwanie użytkownika</Modal.Title></Modal.Header>
                    <Modal.Body><p>Czy na pewno chcesz usunąć użytkownika {this.state.currentUser.name} {this.state.currentUser.surname}?</p></Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalDelete: false})}}>Anuluj</Button>
                        <Button variant="danger" onClick={() => {this.deleteUser()}}>Tak, usuń!</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.showModalEdit} onHide={() => {this.setState({showModalEdit: false, currentUser: ''})}}>
                    <Modal.Header closeButton><Modal.Title>Edytuj dane użytkownika:</Modal.Title></Modal.Header>
                    <Modal.Body>
                        <Form>
                        <Form.Control className="MyFormControl" type="text" defaultValue={this.state.currentUser.name} />
                        <Form.Control className="MyFormControl" type="text" defaultValue={this.state.currentUser.surname} />
                        <Form.Control className="MyFormControl" type="email" defaultValue={this.state.currentUser.email} />
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.setState({showModalEdit: false, currentUser: ''})}}>Anuluj</Button>
                        <Button variant="success" onClick={() => {this.editUser()}}>Tak, zmień!</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default UsersPanel