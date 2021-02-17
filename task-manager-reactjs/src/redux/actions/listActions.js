import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { ADD_TODO, CANCEL_TODO, GET_LIST_TODOE, READY_TODO } from "../type"

export const getTodoesList = id => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/list/get", {listId: id})
        .then(res => {
            dispatch({
                type: GET_LIST_TODOE,
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
    console.log("Новое Todo")
    return dispatch => {
        instance.post(DOMEN_SERVER + "/todo/add", {list: obj.listId, title: obj.title})
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        })
    }
}