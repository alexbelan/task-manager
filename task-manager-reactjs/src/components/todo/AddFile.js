import React from 'react'
import { useDispatch } from 'react-redux';
import add from '../../img/add.svg'
import { openEditWindow, addDataEditWindow } from '../../redux/actions/appActions';

export default function() {
    const dispatch = useDispatch();

    const addFile = () => {
        dispatch(openEditWindow())
        dispatch(addDataEditWindow({type: "addFile", id: -1}))
    }

    return (
        <div onClick={addFile} className="file-block add-file">
            <div className="file">
                <div className="file-title">
                    <img src={add} className="icon"/>
                    <h4>Add file</h4>
                </div>
            </div>
        </div>
    )
}