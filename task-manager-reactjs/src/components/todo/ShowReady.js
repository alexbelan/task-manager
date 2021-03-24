import React from 'react'
import { useDispatch } from 'react-redux'
import checkIcon from '../../img/check.svg'
import { changeList } from '../../redux/actions/appActions'

export default function() {
    const dispatch = useDispatch()

    const openTodoToday = () => {
        dispatch(changeList("check"))
    }


    return (
        <div className="file-block">
            <div 
            onClick={openTodoToday} 
            className="file standard" >
                <div className="file-title">
                    <img className="icon" src={checkIcon} />
                    <h4>Ready</h4>
                </div>
            </div>
        </div>
    )
}