import React from "react";
import { Button, Form, Table } from "react-bootstrap";
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
            users: Users
        };
    }
    
    deleteItem(index) {
        let users = this.state.users;
        users.splice(index, 1);
        this.setState({ users: users });
    }

    render(){
        const UsersList = this.state.users.map((x,index) => {
        return (
            <tr key={x.userid}>
                <td>{index+1}</td>
                <td>{x.name} {x.type ? <span title="Konto administratora">✔</span> : ''}</td>
                <td>{x.surname}</td>
                <td>{x.email}</td>
                <td>{x.type ? '' : <button type="button" onClick={() => {this.deleteItem(index)}} className="btn btn-outline-secondary">Edytuj</button>}</td>
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
            </Container>
        );
    }
}

{/* <Form.Control type="email" placeholder="Enter email" /> */}

export default UsersPanel