import React from "react";
import { Form } from "react-bootstrap";

class Login extends React.Component {
    
    render(){
        return(
            <Form className="MyLogin">
                <div className="MyLoginInfo">Zaloguj się</div>

                <div>
                    <label>Podaj e-mail:</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div>
                    <label>Podaj hasło:</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="MyLoginRememberMe">
                    <input type="checkbox" />
                    <label htmlFor="customCheck1">Zapamiętaj mnie</label>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </Form>
        );
    }
}

export default Login