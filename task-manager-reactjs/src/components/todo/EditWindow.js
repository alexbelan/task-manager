import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../img/close.svg'
import { closeEditWindow } from '../../redux/actions/appActions'
import EditTodo from './EditTodo'

export default function () {
    const editData = useSelector(state => state.app.editData)

    const dispatch = useDispatch()

    const closeWindow = () => {
        dispatch(closeEditWindow())
    }

    const viewWindow = () => {
        if (editData.type === "todo") {
            return <EditTodo index={editData.id}/>
        }
    }

    return(
        <div className="edit-window">
            <div className="header">
                <div className="icon">
                    <img onClick={closeWindow} src={closeIcon} />
                </div>

            </div>
            <div>
                {viewWindow()}
            </div>
        </div>
    )
}