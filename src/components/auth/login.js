import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmail, getPassword } from '../../redux/actions'

export default function Login () {
    const dispatch = useDispatch()
    const login = useSelector(state => {
        return state.login
    })

    const valueEmail = (email) => {
        dispatch(getEmail(email))
    }

    const valuePass = (pass) => {
        dispatch(getPassword(pass))
    }

    return (
        <>
            <h2>Ввидие логин</h2>
            <form>
                <p>Email: <input type="email"
                 onChange={e => valueEmail(e.target.value)}
                 value={login.email}
                /></p>
                <p>Password: <input type="password"
                 onChange={e => valuePass(e.target.value)}
                 value={login.password}
                  /></p>
                <input type="submit" />
            </form>
        </>
    )
}

// const mapStateToProps = state => {
//     return {
//         login: state.login
//     }
// }

// export default connect(mapStateToProps, null)(Login)
