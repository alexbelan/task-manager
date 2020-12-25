import React, { useState } from 'react'
import firebase from 'firebase';
import { Error } from '../app/error';


export default function PasswordReset () {

    const [errorApp, setErrorApp] = useState("");

    const [email, setEmail] = useState("")

    const changeInputEmail = event => {
        event.persist()
        setEmail(event.target.value);
    }

    const submitPasswordReset = event => {
        event.preventDefault();
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                console.log("Email sent")
                if (errorApp !== "") {
                    setErrorApp("");
                }
            })
            .catch((error) => {
                setErrorApp(error.message)
            });
    }

    return (
        <>
            <h2>Forgot password:</h2>
            <form onSubmit={submitPasswordReset}>
                <p>Email: <input 
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={changeInputEmail }
                /></p>
                <input type="submit"/>
            </form>
            <Error msg={errorApp} />
        </>
    )
}
