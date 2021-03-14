import React from 'react'
import { useDispatch } from 'react-redux'
import clockIcon from '../../img/clock.svg'
import { changeList } from '../../redux/actions/appActions'

export default function() {
    const dispatch = useDispatch()

    const openTodoToday = () => {
        dispatch(changeList("today"))
    }


    return (
        <div className="file-block">
            <div 
            onClick={openTodoToday} 
            className="file" >
                <img className="icon" src={clockIcon} />
                <h4>Today</h4>
            </div>
        </div>
    )
}