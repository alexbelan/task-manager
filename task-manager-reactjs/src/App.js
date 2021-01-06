import React from 'react';
import firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Auth from './components/auth/auth'
import ToDo from './components/todo/todo'
import { DOMEN_SITE } from './config/const';

export default function App() {
    firebase.auth().onAuthStateChanged(function(user) {
        let url = window.location.href;
        console.log(user)
        if (!user) {
            if(url.indexOf('auth') == -1) {
                window.location.href = DOMEN_SITE + "/auth"
            }
        } else {
            
            if(url.indexOf('auth') != -1) {
                window.location.href = DOMEN_SITE + "/"
            }
        }
    });




    return (
        <Router>
            <Switch>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route exact path="/">
                    <ToDo/>
                </Route>
            </Switch>
        </Router>
    )
};