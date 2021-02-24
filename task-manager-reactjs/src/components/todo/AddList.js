import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import add from '../../img/add.svg'
import { fileNewList } from '../../redux/actions/appActions';
import { newList } from '../../redux/actions/listActions';

export default function() {
    const fileId = useSelector(state => state.app.fileNewList);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const changeInputName = event => {
        event.persist()

        setName(() => {
            return event.target.value
        })
    }

    const addList = () => {
        dispatch(newList({name: name, fileId: fileId}))
        dispatch(fileNewList(null))
    }

    return (
        <li><div onClick={addList}><img className="icon" src={add}/></div><input type="text" value={name} onChange={changeInputName} /></li>
    )
}