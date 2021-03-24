import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocalStorageApi from '../../api/localStorage'
import { DOMEN_SITE } from '../../config/const'
import userIcon from '../../img/user.svg'
import { clearUserData } from '../../redux/actions/userActions'

export default function() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const logout = () => {
        LocalStorageApi.deleteToken()
        window.location.href = DOMEN_SITE + "/auth"
        dispatch(clearUserData())
    }

    return (
        <div className="file-block header">
            <div 
            className="file standard" >
                <div className="file-title">
                    <img className="icon" src={userIcon} />
                    <h4>{user.username}</h4>
                </div>
                <div className="file-actions">
                    <button onClick={logout} style={{"margin": "auto 10px"}}>Log Out</button>
                </div>
            </div>
        </div>
    )
}