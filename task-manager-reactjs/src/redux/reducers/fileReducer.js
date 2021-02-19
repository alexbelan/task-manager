import { GET_FILE, GET_FILE_ERROR, NEW_FILE, NEW_LIST } from "../type";

const initialFileState = {
    files: [],
    list_no_file: []
}

export function fileReducer(state = initialFileState, action) {
    switch (action.type) {
        case GET_FILE:
            return action.payload
        case GET_FILE_ERROR:
            return "error"
        case NEW_FILE:
            let newFiles = state.files
            newFiles.push(action.payload)
            return {
                ...state,
                files: newFiles
            }
        case NEW_LIST:
            if (action.payload.fileId == -1) {
                let newFiles = state.list_no_file
                state.list_no_file.push(action.payload.list)
                return {
                    ...state,
                    list_no_file: newFiles
                }
            } else {
                let newFiles = state.files
                newFiles.find(file => {
                    if (file.fileId == action.payload.fileId) {
                        file.list.push(action.payload.list)
                    }
                })
                return {
                    ...state,
                    files: newFiles
                }
            }
        default:
            return state;
    }
}