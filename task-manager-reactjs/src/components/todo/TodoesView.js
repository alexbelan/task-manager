import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDataEditWindow, openEditWindow } from '../../redux/actions/appActions'
import { readyTodo, cancelTodo, deleteTodo } from '../../redux/actions/todoActions'
import HeaderList from './HeaderList'
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
        } else if (target.className === "delete-todo") {
            const todoId = todo.getAttribute('data-todoid')
            const id = todoes.findIndex(el => el.todoId === +todoId)
            dispatch(deleteTodo({todoId: todoId, id: id}))
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
                <HeaderList/>
            </div>
            <div className="todoes-list">
                <TodoViewNotReady todoes={todoes} reflist={refList} readyTodoClick={readyTodoClick}/>
                <TodoViewReady todoes={todoes} reflist={refList} readyTodoClick={readyTodoClick}/>
            </div>
        </div>
    )
}