import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { ADD_TODO, CANCEL_TODO, DELETE_TODO, EDIT_TODO, GET_TODO, READY_TODO } from "../type"

export const getTodoes = () => {
    return dispatch => {
        instance.get(DOMEN_SERVER + "/todo/get")
        .then(res => {
            dispatch({
                type: GET_TODO,
                payload: res.data
            })
        })
    }
}

export const readyTodo = (index, todoId) => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/todo/ready", {todoId: todoId})
        .then(() => {
            dispatch({
                type: READY_TODO,
                payload: index
            })
        })
    }
}

export const cancelTodo = (index, todoId) => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/todo/ready", {todoId: todoId})
        .then(() => {
            dispatch({
                type: CANCEL_TODO,
                payload: index
            })
        })
    }
}

export const addTodo = (obj) => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/todo/add", {list: obj.listId, data: obj.data})
        .then(res => {
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        })
    }
}

export const editTodo = (obj) => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/todo/edit", {todoId: obj.todoId, data: obj.data})
        .then(res => {
            dispatch({
                type: EDIT_TODO,
                payload: {
                    index: obj.id,
                    data: res.data
                }
            })
        })
    }
}

export const deleteTodo = (obj) => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/todo/delete", {todoId: obj.todoId})
        .then(res => {
            if (res.data.result === true) {
                dispatch({
                    type: DELETE_TODO,
                    payload: obj.id,
                })
            }
        })
    }
}

export const deleteTodoOnFrontend = id => {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}