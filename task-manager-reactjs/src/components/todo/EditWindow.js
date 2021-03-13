import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import closeIcon from '../../img/close.svg'
import { closeEditWindow } from '../../redux/actions/appActions'
import EditList from './EditList'
import EditTodo from './EditTodo'
import EditFile from './EditFile'
import DeleteFile from './DeleteFile'
import AddFileEdit from './AddFileEdit'
import AddList from './AddList'
import AddTodo from './AddTodo'

export default function () {
    const editData = useSelector(state => state.app.editData)

    const dispatch = useDispatch()

    const closeWindow = () => {
        dispatch(closeEditWindow())
    }

    const viewWindow = () => {
        if (editData.type === "todo") {
            return <EditTodo index={editData.id} />
        } else if (editData.type === "list") {
            return <EditList index={editData.id} />
        } else if (editData.type === "file") {
            return <EditFile index={editData.id} />
        } else if (editData.type === "deleteFile") {
            return <DeleteFile index={editData.id} />
        } else if (editData.type === "addFile") {
            return <AddFileEdit/>
        } else if (editData.type === "addList") {
            return <AddList fileId={editData.id} />
        } else if (editData.type === "addTodo") {
            return <AddTodo listId={editData.id} />
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