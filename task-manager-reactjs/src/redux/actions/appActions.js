import { CHANGE_LIST, FILE_NEW_LIST } from "../type"

export const changeList = listId => {
    return {
        type: CHANGE_LIST,
        payload: listId,
    }
}

export const fileNewList = fileId => {
    return {
        type: FILE_NEW_LIST,
        payload: fileId,
    }
}