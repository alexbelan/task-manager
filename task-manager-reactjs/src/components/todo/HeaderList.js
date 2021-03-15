import React from 'react'
import { useSelector } from 'react-redux';import BtnAddTodo from './BtnAddTodo';
;

export default function({refList}) {
    const listId = useSelector(state => state.app.refList)
    const list = useSelector(state => state.list.filter(item => item.listId === +listId)[0])
    if (list !== undefined && Number.isInteger(refList) && refList > -1) {
        return (
            <>
                <h3>{list.name}</h3>
                <BtnAddTodo listId={listId}/>
            </>
        )
    } else if (list === undefined && typeof refList === "string" && refList === "today") {
        return (
            <>
                <h3>Today</h3>
            </>
        )
    } else if (list === undefined && typeof refList === "string" && refList === "check") {
        return (
            <>
                <h3>Check</h3>
            </>
        )
    } else {
        return (
            <h3>List don't open</h3>
        )
    }
}