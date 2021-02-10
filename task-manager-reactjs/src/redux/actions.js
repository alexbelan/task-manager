import { GET_FILE } from "../type";

const initialTodoState = {
    file: []
}

export function userReducer(state = initialTodoState, action) {
    switch (action.type) {
        case GET_FILE:
            return state.file = action.payload;
        default:
            return state;
    }
}