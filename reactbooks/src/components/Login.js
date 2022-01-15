import React from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import { Router, Routes } from "react-router-dom";

class Login extends React.Component {
    
    render(){
        return(
            <Form className="MyLogin">
                <div className="MyLoginInfo">Zaloguj się</div>

                <div>
                    <label>Podaj e-mail:</label>
                    <input type="email" className="form-control" placeholder="Wpisz swój adres e-mail" />
                </div>

                <div>
                    <label>Podaj hasło:</label>
                    <input type="password" className="form-control" placeholder="Wpisz swoje hasło" />
                </div>

                <div className="MyLoginRememberMe">
                    <input type="checkbox" />
                    <label htmlFor="customCheck1">Zapamiętaj mnie</label>
                </div>

                <div className="MyCenterLogin">
                    <Button type="submit" className="btn btn-dark btn-lg btn-block">Zaloguj</Button>
                </div>
                <div className="MyRegisterLink">Nie masz konta? <a href="/Register">Zarejestruj się!</a></div>
            </Form>
        );
    }
}

export default Login