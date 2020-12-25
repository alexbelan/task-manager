import React, { useState } from 'react'
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../app/error';
import { getEmail, getUserPhoto, getUserName, getUserVerified } from '../../redux/actions';
import { DOMEN_SITE } from '../../config/const'


export default function Login () {
    
    const dispatch = useDispatch()
    // const userState = useSelector(state => state.user)
    const [errorApp, setErrorApp] = useState("");

    const [login, setLogin] = useState(() => {
        return {
            email: "",
            password: "",
        }
    })

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
        firebase.auth().signInWithEmailAndPassword(login.email, login.password)
            .then((user) => {
                // dispatch(getUserName(user.user.displayName))
                // dispatch(getEmail(user.user.email))
                // dispatch(getUserPhoto(user.user.photoURL))
                // dispatch(getUserVerified(user.user.emailVerified))
                window.location.href = DOMEN_SITE + "/"
            })
            .catch((error) => {
                console.log(error)
                setErrorApp(error.message)
            });
    }

    return (
        <>
            <h2>Entry</h2>
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
                <input type="submit"/>
            </form>
            <div>
                <Link to="/auth/register">Register</Link>
                <Link to="/auth/passreset">Forgot password</Link>
            </div>
            <Error msg={errorApp} />
        </>
    )
}

