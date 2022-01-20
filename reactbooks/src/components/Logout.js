import React from "react";
import { Button, Form, NavDropdown, Modal } from "react-bootstrap";
import { Router, Routes } from "react-router-dom";
import axios from "axios";

function Logout() {
    axios.post('/api/Access/Logout')
    .then(res => {
        localStorage.clear();
    })
    .catch(err => {
        console.log(err);
    })
    .then( function () {
        window.location.replace("/Login");
    });
}

export default Logout