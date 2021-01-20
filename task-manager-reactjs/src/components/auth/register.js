import React, { useState } from 'react'
import axios from 'axios';
import validator from 'validator';
import { Error } from '../app/error';
import { DOMEN_SERVER, DOMEN_SITE } from '../../config/const';

export default function Register () {
   
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const [error, setError] = useState("");

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        event.preventDefault();
        if(!validator.isEmail(register.email)) {
            setError(() => {
                return "You did not enter email"
            })
        } else if(register.password !== register.password2) {
            setError(() => {
                return "Repeated password incorrectly"
            })
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
            setError(() => {
                return "Password must consist of one lowercase, uppercase letter and number, at least 8 characters"
            })
        } else {
            if (error !== "") {
                setError("")
            }
            axios.post(DOMEN_SERVER + "/auth/registration/", {
                username: register.username,
                email: register.email,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = DOMEN_SITE + "/auth"
                } else {
                    setError(() => {
                        if(res.data.code === 1) {
                            return "There is already a user with this email"
                        }
                    })
                }
            }).catch(() => {
                setError("An error occurred on the server")
            })
        }
    }

    return (
        <div className="form">
            <h2>Register user:</h2>
            <form onSubmit={submitChackin}>
                <p>Name: <input 
                type="username"
                id="username"
                name="username"
                value={register.usernamr}
                onChange={changeInputRegister}
                /></p>
                <p>Email: <input 
                type="email"
                id="email"
                name="email"
                value={register.email}
                onChange={changeInputRegister}
                formnovalidate
                /></p>
                <p>Password: <input 
                type="password"
                id="password"
                name="password"
                value={register.password}
                onChange={changeInputRegister}
                /></p>
                <p>Repeat password: <input 
                type="password"
                id="password2"
                name="password2"
                value={register.password2}
                onChange={changeInputRegister}
                  /></p>
                <input type="submit"/>
            </form>
            <Error msg={error} />
        </div>
    )
}