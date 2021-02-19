import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { GET_FILE, GET_FILE_ERROR, NEW_FILE, NEW_LIST } from "../type"

export const getFile = () => {
    return dispatch => {
        instance.get(DOMEN_SERVER + "/file/get")
        .then(res => {
            dispatch({
                type: GET_FILE,
                payload: res.data 
            })
        }).catch(() => {
            dispatch({
                type: GET_FILE_ERROR,
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
                payload: {
                    fileId: obj.fileId,
                    list: res.data
                },
            })
        })
    }
}

export const newFile = name => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/file/add", {name: name})
        .then(res => {
            dispatch({
                type: NEW_FILE,
                payload: res.data,
            })
        })
    }
}
