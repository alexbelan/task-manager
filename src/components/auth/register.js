import React, { useEffect, useState } from 'react'
import firebase from 'firebase';
import { DOMEN_SITE } from '../../config/const';
import { Error } from '../app/error';

export default function Register () {
   
    const [register, setRegister] = useState(() => {
        return {
            email: "",
            password: "",
            password2: "",
        }
    })

    const [errorApp, setErrorApp] = useState("");


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
        if (register.password === register.password2) {
            firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
            .then((user) => {
                console.log()
                if (user.additionalUserInfo.isNewUser) {
                    window.location.href = DOMEN_SITE + "/"
                }
            })
            .catch((error) => {
                setErrorApp(() => {
                    return error.message;
                })
            });
        } else {
            setErrorApp(() => {
                return "Repeated password does not match";
            })
        }
    }

    return (
        <>
            <h2>Register user:</h2>
            <form onSubmit={submitChackin}>
                <p>Email: <input 
                type="email"
                id="email"
                name="email"
                value={register.email}
                onChange={changeInputRegister}
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
            <Error msg={errorApp} />
        </>
    )
}