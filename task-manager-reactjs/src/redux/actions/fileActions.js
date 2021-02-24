import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { EDIT_LIST, GET_FILE, GET_FILE_ERROR, NEW_FILE, NEW_LIST } from "../type"

export const getFile = () => {
    return dispatch => {
        instance.get(DOMEN_SERVER + "/file/get")
        .then(res => {
            dispatch({
                type: GET_FILE,
                payload: res.data 
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

export const editList = obj => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/list/edit", {listId: obj.listId, name: obj.name})
        .then(res => {
            dispatch({
                type: EDIT_LIST,
                payload: {
                    index: obj.id,
                    fileId: obj.fileId, 
                    data: res.data
                }
            })
        })
    }
}
