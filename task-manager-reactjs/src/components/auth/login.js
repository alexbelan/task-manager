import React, { useState } from 'react';
import axios from 'axios';
import { DOMEN_SERVER, DOMEN_SITE } from '../../config/const';
import { Link } from "react-router-dom";
import { Error } from '../app/error';
import LocalStorageApi from '../../api/localStorage';


export default function Login () {

    const [login, setLogin] = useState(() => {
        return {
            email: "",
            password: "",
        }
    })

    const [error, setError] = useState("");

    const changeInputLogin = event => {
        event.persist()
        setLogin((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitAuth = (event) => {
        event.preventDefault();
        axios.post(DOMEN_SERVER + '/auth/login/', {
            email: login.email,
            password: login.password
        }).then(res => {
            if (res.data.code && res.data.code === 2) {
                setError('Wrong password or email');
            } else {
                LocalStorageApi.addToken(res.data.token)
                window.location.href = DOMEN_SITE
            }
        }).catch(() => {
            setError("An error occurred on the server");
        })
    }

    return (
        <div className="form">
            <h2>Entry:</h2>
            <form onSubmit={submitAuth}>
                <p>Email: <input 
                type="email"
                id="email"
                name="email"
                value={login.email}
                onChange={changeInputLogin}
                /></p>
                <p>Password: <input 
                type="password"
                id="password"
                name="password"
                value={login.password}
                onChange={changeInputLogin}
                  /></p>
                  <div>
                      <Link to="/auth/register">Registration</Link>
                  </div>
                <input type="submit"/>
                <Error msg={error} />
            </form>
        </div>
    )
}

