import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readyTodo, cancelTodo } from '../../redux/actions/listActions'
import AddTodo from './AddTodo'
import TodoViewNotReady from './TodoViewNotReady'
import TodoViewReady from './TodoViewReady'

export default function () {
    const todoes = useSelector(state => state.list)

    const dispatch = useDispatch()

    const readyTodoClick = (e) => {
        const todo = e.currentTarget
        const ready = todo.getAttribute('data-ready')
        const index = todo.getAttribute('data-index')
        const todoId = todo.getAttribute('data-todoid')
        console.log(todoId)
        if (ready === "false") {
            dispatch(readyTodo(index, todoId))
        } else {
            dispatch(cancelTodo(index, todoId))
        }
        
    }

    return(
        <div className="todoes">
            <div className="new-todo">
                <AddTodo/>
            </div>
            <div className="todoes-list">
                <TodoViewNotReady todoes={todoes} readyTodoClick={readyTodoClick}/>
                <TodoViewReady todoes={todoes} readyTodoClick={readyTodoClick}/>
            </div>
        </div>
    )
}