import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from './components/auth/auth'
import ToDo from './components/todo/todo';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route path="/">
                    <ToDo />
                </Route>
            </Switch>
        </Router>
    )
};