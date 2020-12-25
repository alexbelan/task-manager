import React from "react";
import firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DOMEN_SITE } from "../../config/const";

export default function ToDo() {

    const logOut = () => {
        firebase.auth().signOut()
        window.location.href = DOMEN_SITE + "/auth"
    }

    return (
        <>
            <h1>Добро пожаловать в ToDo</h1>
            <button onClick={logOut}>Log Out</button>
        </>
    )
} 