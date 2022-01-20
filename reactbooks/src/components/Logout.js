import React from "react";
import { Button, Form, NavDropdown, Modal } from "react-bootstrap";
import { Router, Routes } from "react-router-dom";
import axios from "axios";

function Logout() {
    console.log(localStorage.getItem('token'));
    let token = { token: localStorage.getItem('token') };
    axios.post('/api/Access/Logout', token)
    .catch(err => {
        console.log(err); //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Błędyyyyy
    })
    .then( function () {
        localStorage.clear();
        //window.location.replace("/Login");
    });
    return "";
}

export default Logout