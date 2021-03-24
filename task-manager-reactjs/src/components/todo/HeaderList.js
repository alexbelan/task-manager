import React from 'react'
import { useSelector } from 'react-redux';import BtnAddTodo from './BtnAddTodo';
;

export default function({refList}) {
    const listId = useSelector(state => state.app.refList)
    const list = useSelector(state => state.list.filter(item => item.listId === +listId)[0])
    if (list !== undefined && Number.isInteger(refList) && refList > -1) {
        return (
            <>
                <h4>{list.name}</h4>
            </>
        )
    } else if (list === undefined && typeof refList === "string" && refList === "today") {
        return (
            <>
                <h4>Today</h4>
            </>
        )
    } else if (list === undefined && typeof refList === "string" && refList === "check") {
        return (
            <>
                <h4>Check</h4>
            </>
        )
    } else {
        return (
            <h4>List don't open</h4>
        )
    }
}