import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Register from "./register";
import Login from "./login";
import PasswordReset from "./passwordReset";

export default function Auth() {
    return (
        <Router>
            <Switch>
                <Route path="/auth/register">
                    <Register/>
                </Route>
                <Route path="/auth/passreset">
                    <PasswordReset/>
                </Route>
                <Route exact path="/auth">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
} 