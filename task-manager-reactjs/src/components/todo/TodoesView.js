import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDataEditWindow, openEditWindow } from '../../redux/actions/appActions'
import { readyTodo, cancelTodo } from '../../redux/actions/todoActions'
import AddTodo from './AddTodo'
import TodoViewNotReady from './TodoViewNotReady'
import TodoViewReady from './TodoViewReady'

export default function () {
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
        } else {
            const ready = todo.getAttribute('data-ready')
            const index = todo.getAttribute('data-index')
            const todoId = todo.getAttribute('data-todoid')
            if (ready === "false") {
                dispatch(readyTodo(index, todoId))
            } else {
                dispatch(cancelTodo(index, todoId))
            }   
        }
    }

    return(
        <div className="todoes">
            <div className="new-todo">
                <AddTodo/>
            </div>
            <div className="todoes-list">
                <TodoViewNotReady todoes={todoes} reflist={refList} readyTodoClick={readyTodoClick}/>
                <TodoViewReady todoes={todoes} reflist={refList} readyTodoClick={readyTodoClick}/>
            </div>
        </div>
    )
}