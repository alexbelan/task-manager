import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";

export default function Auth() {
    return (
        <Router>
            <Switch>
                <Route path="/auth/register">
                    <Register/>
                </Route>
                <Route path="/auth">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
} 