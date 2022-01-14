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
var UsersList = Users.map((x,index) => 
    <tr key={x.userid}>
        <td>{index+1}</td>
        <td>{x.name} {x.type ? <span title="Konto administratora">✔</span> : ''}</td>
        <td>{x.surname}</td>
        <td>{x.email}</td>
        <td>{x.type ? '' : <button type="button" onClick={edit(x)} className="btn btn-outline-secondary">Edytuj</button>}</td>
    </tr>);

function edit(x) {
    console.log("Imie: "+x.name); //co tutaj się dzieje
}

const UsersPanel = () => {
    let content;
    if (Users.length > 0) {
        content = 
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
                        <tr key={-1}>
                            <th>Lp.</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>
                            <Form.Control type="email" placeholder="Enter email" />
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
    }
    else {content = <div className="MyTitleGreen">Nie ma żadnych użytkowników!</div>}
    
    return(
        <Container className="MyContainer">
            {content}
        </Container>
    );
}

export default UsersPanel