import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDataEditWindow, closeEditWindow } from '../../redux/actions/appActions';
import { newFile } from '../../redux/actions/fileActions';

export default function() {
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const changeInputName = event => {
        event.persist()
        setName(() => {
            return event.target.value
        })
    }

    const submitFile = event => {
        event.preventDefault();
        if (name.split(' ').join('') === "") {
            alert("В заголовки одни пробелы")
        } else {
            dispatch(newFile(name));
            dispatch(closeEditWindow());
            dispatch(addDataEditWindow({type: "", id: -1}))
        }
    }

    return (
        <form onSubmit={submitFile}>
            <div>
            <label for="nameFile">
                <h5>Name:</h5>
            </label>
                <input id="nameFile" type="text" value={name} onChange={changeInputName}/>
            </div>
            <input type="submit"/>
        </form>
    )
}