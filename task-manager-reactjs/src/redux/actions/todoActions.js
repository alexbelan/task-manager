import { DOMEN_SERVER } from "../../config/const"
import instance from "../../config/instance"
import { GET_FILE, GET_FILE_ERROR } from "../type"

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