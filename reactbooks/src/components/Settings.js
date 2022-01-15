import React from "react";
import { Container, Button, Form, Modal, Table, FormLabel, Alert } from "react-bootstrap";

var User = {userid: 0,type: true,name: "Adam",surname: "Małysz",email: "adam.małysz@wp.pl"};

class Settings extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: User,
            showModalDelete: false,
            showModalEdit: false,
            whatEdit: '',
        };
    }

    changeDetails() {
        
        console.log("Zmiana");
        this.setState({whatEdit: ''});
    }

    render(){
        return(
            <Container className="MyContainer">
                <span className="MyTitle">Witaj {this.state.user.name} {this.state.user.surname}!<br /><br /></span>
                <p></p>
                <p>Twoje dane:</p>
                <Table>
                    <tbody>
                        <tr>
                            <th>Imię:</th>
                            <th><Form.Control className="MyTableButton" defaultValue={this.state.user.name} disabled={this.state.whatEdit === "name" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "name" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => this.changeDetails()}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => this.changeDetails()}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "name"})}}>Edytuj</Button>}
                            </th>
                        </tr>
                        <tr>
                            <th>Nazwisko:</th>
                            <th><Form.Control className="MyTableButton" defaultValue={this.state.user.surname} disabled={this.state.whatEdit === "surname" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "surname" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "surname"})}}>Edytuj</Button>}
                            </th>
                        </tr>
                        <tr>
                            <th>E-mail:</th>
                            <th><Form.Control className="MyTableButton" defaultValue={this.state.user.email} disabled={this.state.whatEdit === "email" ? false : true} /></th>
                            <th>
                                {this.state.whatEdit === "email" ?
                                <span><Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Zatwierdź</Button>
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.changeDetails()}}>Anuluj</Button></span> : 
                                <Button className="MyTableButton" variant="secondary" onClick={() => {this.setState({whatEdit: "email"})}}>Edytuj</Button>}
                            </th>
                        </tr>
                    </tbody>
                </Table>
                {this.state.user.type ? <Alert className="MyMarginTop" variant="info">{this.state.user.name}! Jesteś administratorem naszego serwisu!</Alert> : ''}
            </Container>
        );
    }
}

export default Settings

{/* <p>Imię: </p><Form.Control defaultValue={this.state.user.name} disabled />
<p>Nazwisko: </p><Form.Control defaultValue={this.state.user.surname} disabled />
<p>E-mail: </p><Form.Control defaultValue={this.state.user.email} disabled /> */}