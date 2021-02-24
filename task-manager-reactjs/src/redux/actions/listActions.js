import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { GET_LIST, NEW_LIST } from "../type"

export const getLists = () => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/list/get")
        .then(res => {
            dispatch({
                type: GET_LIST,
                payload: res.data
            })
        })
    }
}

export const newList = obj => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/list/add", {name: obj.name, file: obj.fileId})
        .then(res => {
            dispatch({
                type: NEW_LIST,
                payload: res.data,
            })
        })
    }
}