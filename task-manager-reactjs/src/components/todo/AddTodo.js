import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions/listActions';

export default function() {
    const listId = useSelector(state => state.app.refList);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const changeInputTitle = event => {
        event.persist()

        setTitle(() => {
            return event.target.value
        })
    }

    const submitTodo = function (event) {
        event.preventDefault();
        if (title.split(' ').join('') === "") {
            alert("В заголовки одни пробелы")
        } else if (listId === 0) {
            alert("Список не выбран")
        } else {
            dispatch(addTodo({title: title, listId: listId}))
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <input type="text" value={title} onChange={changeInputTitle}/>
            <input type="submit"/>
        </form>
    )
}