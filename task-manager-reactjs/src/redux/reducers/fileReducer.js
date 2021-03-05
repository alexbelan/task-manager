import { GET_FILE, GET_FILE_ERROR, NEW_FILE, EDIT_FILE, DELETE_FILE } from "../type";

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
        case EDIT_FILE:
            state[action.payload.index] = action.payload.data
            return [
                ...state,
            ]  
        case DELETE_FILE:
            state.splice(action.payload, 1);
            return [
                ...state,
            ]
        default:
            return state;
    }
}