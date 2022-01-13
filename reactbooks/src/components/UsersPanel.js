import React from "react";
import { Button, Table } from "react-bootstrap";
import { Container } from 'react-bootstrap';

var Users = [
    {userid: 0,type: true,name: "Adam",surname: "Małysz",email: "adam.malysz@wp.pl"},
    {userid: 1,type: false,name: "Robert",surname: "Lewandowski",email: "zlota@pilka.fr"},
    {userid: 2,type: false,name: "Michał",surname: "Pazdan",email: "ronaldo@nieprzejdzie.pl"},
    {userid: 3,type: false,name: "Sergio",surname: "Ramos",email: "ball@incosmos.com"},
    {userid: 4,type: false,name: "Arek",surname: "Milik",email: "sila@nietechnika.pl"}
];
// Users = [];
var UsersList = Users.map((x,index) => 
    <tr key={x.userid}>
        <td>{index+1}</td>
        <td><button type="button" className="btn btn-outline-secondary">Edytuj</button></td>
    </tr>);

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