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
        default:
            return state;
    }
}