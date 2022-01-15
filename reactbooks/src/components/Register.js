import React from "react";
import { Button, Form } from "react-bootstrap";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModalSuccess: false,
            showModalFail: false
        };
    }
    
    register() {
        let registerName = document.getElementById("registerName").value;
        let registerSurname = document.getElementById("registerSurname").value;
        let registerEmail = document.getElementById("registerEmail").value;
        let registerPassword = document.getElementById("registerPassword").value;
        let registerUser = {name: registerName, surname: registerSurname, email: registerEmail, password: registerPassword};


        console.log("rejestrujemy użytkownika: "+registerUser.name+" "+registerUser.surname+" "+registerUser.email+" "+registerUser.password); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        console.log("Jeśli serwer odpowie to wyświetlamy Modal");
        //this.setState({ showModalSuccess: true});
        //this.setState({ showModalFail: true});
    }

    render(){
        return(
            <Form className="MyLogin">
                <div className="MyLoginInfo">Zarejestruj się</div>

                <div>
                    <label>Podaj imię:</label>
                    <input type="name" id="registerName" className="form-control" placeholder="Wpisz swoje imię" />
                </div>

                <div>
                    <label>Podaj nazwisko:</label>
                    <input type="surname" id="registerSurname" className="form-control" placeholder="Wpisz swoje nazwisko" />
                </div>

                <div>
                    <label>Podaj e-mail:</label>
                    <input type="email" id="registerEmail" className="form-control" placeholder="Wpisz swój adres e-mail" />
                </div>

                <div>
                    <label>Podaj hasło:</label>
                    <input type="password" id="registerPassword" className="form-control" placeholder="Wpisz swoje hasło" />
                </div>

                <div className="MyCenterRegister">
                    <Button className="btn btn-dark btn-lg btn-block" onClick={() => {this.register()}}>Zarejestruj</Button>
                </div>
                <div className="MyRegisterLink">Masz już konto? <a href="./Login">Zaloguj się!</a></div>
            </Form>
        );
    }
}

export default Register