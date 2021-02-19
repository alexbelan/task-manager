import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import add from '../../img/add.svg'
import { newFile } from '../../redux/actions/fileActions';

export default function() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [state, setState] = useState('notAdd');

    const changeState = () => {
        setState(() => {
            if (state === 'add') {
                return 'notAdd'
            } else {
                return 'add'
            }
        })
    }

    const changeInputName = event => {
        event.persist()
        setName(() => {
            return event.target.value
        })
    }

    const addFile = () => {
        dispatch(newFile(name))
        changeState()
    }

    if (state === 'add') {
        return (
            <div className="file-block">
                <div className="file"><div onClick={addFile}><img src={add} className="icon"/></div><input type="text" value={name} onChange={changeInputName} /></div>
            </div>
        )
    } else {
        return (
            <div onClick={changeState} className="file-block">
                <div className="file"><img src={add} className="icon"/><h4>Add file</h4></div>
            </div>
        )
    }
}