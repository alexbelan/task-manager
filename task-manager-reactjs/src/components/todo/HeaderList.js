import React from 'react'
import { useSelector } from 'react-redux';import BtnAddTodo from './BtnAddTodo';
;

export default function() {
    const listId = useSelector(state => state.app.refList)
    const list = useSelector(state => state.list.filter(item => item.listId === +listId)[0])
    if (list !== undefined) {
        return (
            <>
                <h3>{list.name}</h3>
                <BtnAddTodo listId={listId}/>
            </>
        )
    } else {
        return (
            <h3>List don't open</h3>
        )
    }
}