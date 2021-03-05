import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { CHANGE_FILE_LIST, DELETE_FILE_LIST, DELETE_FILE, EDIT_FILE, GET_FILE, NEW_FILE } from "../type"

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

export const editFile = obj => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/file/edit", {fileId: obj.fileId, name: obj.name})
        .then(res => {
            console.log(res.data)
            dispatch({
                type: EDIT_FILE,
                payload: {
                    index: obj.id,
                    data: res.data
                }
            })
        })
    }
}

export const deleteFile = obj => {
    return dispatch => {
        instance.post(DOMEN_SERVER + "/file/delete", {fileId: obj.fileId, deleteLists: obj.deleteLists })
        .then(res => {
            if (res.data.result === true) {
                dispatch({
                    type: DELETE_FILE,
                    payload: obj.id
                })
                console.log(obj.deleteLists)
                if (obj.deleteLists === true) {
                    dispatch({
                        type: DELETE_FILE_LIST,
                        payload: obj.fileId
                    })
                } else {
                    dispatch({
                        type: CHANGE_FILE_LIST,
                        payload: obj.fileId
                    })
                }
            }
        })
    }
}
