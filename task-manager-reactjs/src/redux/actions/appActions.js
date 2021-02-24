import { ADD_DATA_EDIT_WINDOW, CHANGE_LIST, CLOSE_EDIT_WINDOW, FILE_NEW_LIST, OPEN_EDIT_WINDOW } from "../type"

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

export const openEditWindow = () => {
    return {
        type: OPEN_EDIT_WINDOW
    }
}

export const closeEditWindow = () => {
    return {
        type: CLOSE_EDIT_WINDOW
    }
}

export const addDataEditWindow = data => {
    return {
        type: ADD_DATA_EDIT_WINDOW,
        payload: data
    }
}