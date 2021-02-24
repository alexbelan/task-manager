import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editTodo } from '../../redux/actions/todoActions';

export default function({index}) {
    const id = useSelector(state => state.todo.findIndex(el => el.todoId === +index));
    const todo = useSelector(state => state.todo.filter(el => el.todoId === +index))[0];
    const dispatch = useDispatch();
    const [title, setTitle] = useState(todo.title);

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
            dispatch(editTodo({title: title, todoId: todo.todoId, id: id}))
        }
    }

    return (
        <form onSubmit={submitTodo}>
            <input type="text" value={title} onChange={changeInputTitle}/>
            <input type="submit"/>
        </form>
    )
}