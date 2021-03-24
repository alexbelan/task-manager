import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDataEditWindow, openEditWindow } from '../../redux/actions/appActions'
import { readyTodo, cancelTodo, deleteTodo } from '../../redux/actions/todoActions'
import TodoReady from './TodoReady'
import TodoToday from './TodoToday'
import TodoViewNotReady from './TodoViewNotReady'
import TodoViewReady from './TodoViewReady'

export default function() {
    const todoes = useSelector(state => state.todo)
    const refList = useSelector(state => state.app.refList)

    const dispatch = useDispatch()

    const readyTodoClick = (e) => {
        const target = e.target
        const todo = e.currentTarget
        if (target.className === "edit-todo") {
            const todoId = todo.getAttribute('data-todoid')
            dispatch(addDataEditWindow({type: "todo", id: todoId}))
            dispatch(openEditWindow())
        } else if (target.className === "delete-todo") {
            const todoId = todo.getAttribute('data-todoid')
            const id = todoes.findIndex(el => el.todoId === +todoId)
            dispatch(deleteTodo({todoId: todoId, id: id}))
        } else {
            const ready = todo.getAttribute('data-ready')
            // const index = todo.getAttribute('data-index')
            const todoId = todo.getAttribute('data-todoid')
            const index = todoes.findIndex(el => el.todoId === +todoId)
            if (ready === "false") {
                dispatch(readyTodo(index, todoId))
            } else {
                dispatch(cancelTodo(index, todoId))
            }   
        }
    }

    if (Number.isInteger(refList) && refList > -1) {
        return (
            <>
                <TodoViewNotReady todoes={todoes} reflist={refList} readyTodoClick={readyTodoClick}/>
                <TodoViewReady todoes={todoes} reflist={refList} readyTodoClick={readyTodoClick}/>
            </>
        )
    } else if (typeof refList === "string" && refList === "today") {
        return (
            <TodoToday todoes={todoes} readyTodoClick={readyTodoClick} />
        )
    } else if (typeof refList === "string" && refList === "check") {
        return (
            <TodoReady todoes={todoes} readyTodoClick={readyTodoClick} />
        )
    } else {
        return <div className="notTodo">List don't open</div>
    }
}