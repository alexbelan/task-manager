import { GET_FILE, GET_FILE_ERROR, GET_LIST_TODOE } from "../type";

const initialTodoState = {
    fileData: {},
    list: []
}

export function todoReducer(state = initialTodoState, action) {
    switch (action.type) {
        case GET_FILE:
            return {
                ...state,
                fileData: action.payload,
            } 
        case GET_FILE_ERROR:
            return {
                ...state,
                fileData: "error"
            }
        case GET_LIST_TODOE: 
            return {
                ...state,
                list: action.payload,
            }
        default:
            return state;
    }
}