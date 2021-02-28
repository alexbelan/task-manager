import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { EDIT_FILE, GET_FILE, NEW_FILE } from "../type"

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
