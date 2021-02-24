import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editList } from '../../redux/actions/fileActions';
import { editTodo } from '../../redux/actions/listActions';

export default function({index}) {
    // const list = useSelector(state => state.file.list[index]);
    const dispatch = useDispatch();
    const [name, setTitle] = useState(list.name);

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
        } else {
            dispatch(editList({title: title, todoId: todo.todoId}))
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <input type="text" value={title} onChange={changeInputTitle}/>
            <input type="submit"/>
        </form>
    )
}