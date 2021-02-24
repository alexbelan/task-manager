import { GET_FILE, GET_FILE_ERROR, NEW_FILE } from "../type";

const initialFileState = []

export function fileReducer(state = initialFileState, action) {
    switch (action.type) {
        case GET_FILE:
            return action.payload
        case GET_FILE_ERROR:
            return "error"
        case NEW_FILE:
            return [
                ...state,
                action.payload
            ]
        // case EDIT_TODO: 
        //     if (action.payload.fileId == -1) {
        //         let newFiles = state.list_no_file
        //         state.list_no_file[action.payload.index] = action.payload.data
        //         return {
        //             ...state,
        //             list_no_file: newFiles
        //         }
        //     } else {
        //         let newFiles = state.files
        //         newFiles.find(file => {
        //             if (file.fileId == action.payload.fileId) {
        //                 file.list[action.payload.index] = action.payload.data
        //             }
        //         })
        //         return {
        //             ...state,
        //             files: newFiles
        //         }
        //     }
        default:
            return state;
    }
}