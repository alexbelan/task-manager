import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addDataEditWindow, closeEditWindow } from '../../redux/actions/appActions';
import { editFile } from '../../redux/actions/fileActions';

export default function({index}) {
    const id = useSelector(state => state.file.findIndex(el => el.fileId === +index));
    const file = useSelector(state => state.file.filter(el => el.fileId === +index))[0];
    const dispatch = useDispatch();
    const [name, setName] = useState(file.name);

    const changeInputName = event => {
        event.persist()

        setName(() => {
            return event.target.value
        })
    }

    const submitFile = function (event) {
        event.preventDefault();
        if (name.split(' ').join('') === "") {
            alert("В заголовки одни пробелы")
        } else {
            dispatch(editFile({name: name, fileId: file.fileId, id: id}))
            dispatch(closeEditWindow())
            dispatch(addDataEditWindow({type: "", id: -1}))
        }
    }

    return (
        <form onSubmit={submitFile}>
            <input type="text" value={name} onChange={changeInputName}/>
            <input type="submit"/>
        </form>
    )
}