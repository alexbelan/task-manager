import { ADD_TODO, CANCEL_TODO, EDIT_TODO, GET_TODO, READY_TODO } from "../type";

const initialTodoState = []


export function todoReducer(state = initialTodoState, action) {
    switch (action.type) {
        case GET_TODO:
            return action.payload
        case READY_TODO:
            state[action.payload].ready = true
            return [
                ...state,
            ]
        case CANCEL_TODO:
            state[action.payload].ready = false 
            return  [
                ...state,
            ]
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        case EDIT_TODO:
            state[action.payload.index] = action.payload.data
            return [
                ...state,
            ]
        default:
            return state;
    }
}