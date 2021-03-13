import React from 'react'
import { useDispatch } from 'react-redux';
import add from '../../img/add.svg'
import { openEditWindow, addDataEditWindow } from '../../redux/actions/appActions';

export default function({listId}) {
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch(openEditWindow())
        dispatch(addDataEditWindow({type: "addTodo", id: listId}))
    }

    return (
        <div onClick={addTodo} className="btn">
            <img src={add} className="icon"/><h4>Add todo</h4>
        </div>
    )
}