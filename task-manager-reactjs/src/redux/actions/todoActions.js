import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { ADD_TODO, CANCEL_TODO, EDIT_TODO, GET_TODO, READY_TODO } from "../type"

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
        instance.post(DOMEN_SERVER + "/todo/add", {list: obj.listId, title: obj.title})
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
        instance.post(DOMEN_SERVER + "/todo/edit", {todoId: obj.todoId, title: obj.title})
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