import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editList } from '../../redux/actions/listActions';

export default function({index}) {
    const id = useSelector(state => state.list.findIndex(el => el.listId === +index));
    const list = useSelector(state => state.list.filter(el => el.listId === +index))[0];
    const dispatch = useDispatch();
    const [name, setName] = useState(list.name);

    const changeInputName = event => {
        event.persist()

        setName(() => {
            return event.target.value
        })
    }

    const submitList = function (event) {
        event.preventDefault();
        if (name.split(' ').join('') === "") {
            alert("В заголовки одни пробелы")
        } else {
            dispatch(editList({name: name, listId: list.listId, id: id}))
        }
    }

    return (
        <form onSubmit={submitList}>
            <input type="text" value={name} onChange={changeInputName}/>
            <input type="submit"/>
        </form>
    )
}